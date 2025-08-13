import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { analyzePeriodInsight } from "../services/openai";

// 미국식 주(일요일 시작)
moment.updateLocale("en", { week: { dow: 0, doy: 6 } });

const INSIGHT_KEY = "mind-insights";

// const getWeekId = dateStr =>
//   moment(dateStr, "YYYY-MM-DD").startOf("week").format("YYYY-[W]ww");

// US 주간 고정: 로케일 en을 명시해 startOf/endOf의 기준을 일요일로 고정
const getWeekId = dateStr =>
  moment(dateStr, "YYYY-MM-DD")
    .locale("en")
    .startOf("week")
    .format("YYYY-[W]ww");

const getMonthId = dateStr => moment(dateStr, "YYYY-MM-DD").format("YYYY-MM");

// 기존에 생성한 인사이트를 재사용
const loadInsights = () => {
  try {
    const raw = localStorage.getItem(INSIGHT_KEY);
    if (!raw) return { weekly: {}, monthly: {} };
    const parsed = JSON.parse(raw);
    return { weekly: parsed.weekly || {}, monthly: parsed.monthly || {} };
  } catch {
    return { weekly: {}, monthly: {} };
  }
};

const saveInsights = next => {
  localStorage.setItem(INSIGHT_KEY, JSON.stringify(next));
};

// 요약 통계(평균) 계산
const calcAverages = items => {
  const n = items.length || 0;
  const sum = items.reduce(
    (acc, it) => ({
      joy: acc.joy + (it.joy || 0),
      sadness: acc.sadness + (it.sadness || 0),
      anger: acc.anger + (it.anger || 0),
      anxiety: acc.anxiety + (it.anxiety || 0),
      calmness: acc.calmness + (it.calmness || 0),
    }),
    { joy: 0, sadness: 0, anger: 0, anxiety: 0, calmness: 0 },
  );
  const avg = n
    ? Object.fromEntries(
        Object.entries(sum).map(([k, v]) => [k, +(v / n).toFixed(2)]),
      )
    : sum;
  return { count: n, avg };
};

export default function useInsights(moodList) {
  const [insights, setInsights] = useState(loadInsights());
  const [isInsightLoading, setIsInsightLoading] = useState(false);

  // 주/월 그룹핑
  const groupedByWeek = useMemo(() => {
    const map = {};
    for (const it of moodList || []) {
      if (!it?.date) continue;
      const id = getWeekId(it.date);
      (map[id] ||= []).push(it);
    }
    return map;
  }, [moodList]);

  const groupedByMonth = useMemo(() => {
    const map = {};
    for (const it of moodList || []) {
      if (!it?.date) continue;
      const id = getMonthId(it.date);
      (map[id] ||= []).push(it);
    }
    return map;
  }, [moodList]);

  // 변경된 기간만 인사이트 갱신
  useEffect(() => {
    let alive = true;
    (async () => {
      const next = {
        weekly: { ...insights.weekly },
        monthly: { ...insights.monthly },
      };
      const tasks = [];

      const ensurePeriod = (type, id, items) => {
        const { count, avg } = calcAverages(items);
        const latestDate =
          items
            .map(i => i.date)
            .sort()
            .slice(-1)[0] || null;
        const cached = next[type][id];
        const isStale =
          !cached ||
          cached?.computedFrom?.count !== count ||
          cached?.computedFrom?.latestDate !== latestDate;

        if (!isStale) return;

        // 상위 키워드(간단 추출)
        const freq = {};
        items.forEach(i =>
          (i.keywords || []).forEach(k => (freq[k] = (freq[k] || 0) + 1)),
        );
        const topKeywords = Object.entries(freq)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([k]) => k);

        // 기간 레이블
        const label =
          type === "weekly"
            ? `${id} (${moment(items[0].date)
                .locale("en")
                .startOf("week")
                .format("MMM D")}–${moment(items[0].date)
                .locale("en")
                .endOf("week")
                .format("MMM D")})`
            : `${id}`;

        // 토큰 절약: 서버로 보내는 entries를 요약해서 전달
        const briefItems = items.map(it => ({
          date: it.date,
          title: Array.isArray(it.title) ? it.title[0] : it.title,
          content: (it.content || "").slice(0, 200),
        }));

        tasks.push(
          (async () => {
            try {
              const insight = await analyzePeriodInsight({
                periodLabel: label,
                items: briefItems,
                averages: avg,
                topKeywords,
              });

              next[type][id] = {
                summary: insight?.summary || "",
                tips: Array.isArray(insight?.tips) ? insight.tips : [],
                highlights: Array.isArray(insight?.highlights)
                  ? insight.highlights
                  : [],
                averages: avg,
                computedFrom: { count, latestDate },
              };
            } catch (e) {
              console.error("period insight error:", e);
            }
          })(),
        );
      };

      Object.entries(groupedByWeek).forEach(([id, items]) =>
        ensurePeriod("weekly", id, items),
      );
      Object.entries(groupedByMonth).forEach(([id, items]) =>
        ensurePeriod("monthly", id, items),
      );

      if (tasks.length === 0) return;
      setIsInsightLoading(true);
      await Promise.all(tasks);
      if (!alive) return;
      setInsights(next);
      saveInsights(next);
      setIsInsightLoading(false);
    })();

    return () => {
      alive = false;
    };
  }, [moodList]); // insights는 내부에서 복제/저장

  // 필요하면 강제 재계산용 API
  const refreshInsights = () => {
    // moodList 의존 useEffect를 한 번 더 트리거하려면
    setInsights(loadInsights()); // 캐시를 리로드
  };

  return { insights, isInsightLoading, refreshInsights };
}
