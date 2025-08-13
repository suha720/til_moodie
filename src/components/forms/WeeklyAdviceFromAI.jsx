// src/pages/moodie/WeeklyAdviceFromAI.jsx
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { ClipLoader } from "react-spinners";
import { analyzePeriodInsight } from "../../services/openai"; // 너가 준 함수 그대로 사용

import {
  AiAdviceBox,
  AiAdviceSubText,
  AiAdviceText,
  AiAdviceTitle,
  AiAdviceWrap,
  WeeklyAiInsightBox,
  WeeklyAiInsightSubText,
  WeeklyAiInsightText,
  WeeklyAiInsightTitle,
  WeeklyAiInsightWrap,
} from "../../pages/moodie/MoodieWeeklyChart.style";

const EMOTIONS = ["joy", "sadness", "anger", "anxiety", "calmness"];

// 이번 주 범위 계산 (US 주: 일~토)
function getWeekRange(ref = moment()) {
  const base = moment(ref).locale("en"); // <- 로케일 고정
  // (일요일 시작, 토요일 끝)
  const start = moment(ref).startOf("week");
  const end = moment(ref).endOf("week");
  const weekId = `US-${start.format("YYYY-[W]ww")}`; // 예: US-2025-W32

  return { start, end, weekId };
}

function buildWeeklyDataset(moodList, ref = moment()) {
  const { start, end, weekId } = getWeekRange(ref);

  // 이번 주 항목만
  const items = (moodList || []).filter(it => {
    const d = moment(it.date, ["YYYY-MM-DD", moment.ISO_8601], true);
    return d.isValid() && d.isBetween(start, end, "day", "[]");
  });

  // 평균
  const sums = { joy: 0, sadness: 0, anger: 0, anxiety: 0, calmness: 0 };
  items.forEach(it => {
    EMOTIONS.forEach(k => (sums[k] += Number(it?.[k] ?? 0)));
  });
  const count = items.length || 1;
  const averages = Object.fromEntries(
    EMOTIONS.map(k => [k, Math.round((sums[k] / count) * 10) / 10]),
  );

  // 상위 키워드 10개 정도 뽑기(간단 빈도 기준)
  const freq = {};
  items.forEach(it => {
    (it.keywords || []).forEach(w => {
      const key = String(w).trim();
      if (!key) return;
      freq[key] = (freq[key] || 0) + 1;
    });
  });
  const topKeywords = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([w]) => w);

  // OpenAI에 넘길 entries: 날짜/제목/앞부분만
  const sliced = items.map(it => ({
    date: it.date,
    title: Array.isArray(it.title) ? it.title[0] : it.title,
    content: (it.content || "").slice(0, 140),
    joy: it.joy,
    sadness: it.sadness,
    anger: it.anger,
    anxiety: it.anxiety,
    calmness: it.calmness,
  }));

  return {
    weekId,
    payload: {
      periodLabel: `${weekId} ( ${start.format("MM.DD")}~${end.format("MM.DD")} )`,
      items: sliced,
      averages,
      topKeywords,
    },
  };
}

export default function WeeklyAdviceFromAI({ moodList }) {
  const [data, setData] = useState(null); // OpenAI JSON
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 주간 데이터 준비 (memo로 불필요 재계산 방지)
  const weekly = useMemo(
    () => buildWeeklyDataset(moodList, moment()),
    [moodList],
  );

  useEffect(() => {
    let alive = true;
    const run = async () => {
      setLoading(true);
      setError("");

      // 1) 캐시 체크
      const cacheKey = `insight:weekly:${weekly.weekId}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (alive) {
            setData(parsed);
            setLoading(false);
          }
          return;
        } catch (_) {
          // 공백
        }
      }

      // 2) 기록이 없으면 즉시 종료
      if (!weekly.payload.items.length) {
        if (alive) {
          setData({
            summary: {
              title: "이번 주 기록이 없어요",
              description:
                "가볍게 한 줄부터 시작해볼까요? 오늘의 감정을 10자만 기록해도 충분해요.",
            },
            tips: [
              {
                title: "한 줄 일기",
                description:
                  "매일 밤 같은 시간에 10자만 써보기. 부담을 줄이면 꾸준함이 쉬워져요.",
              },
              {
                title: "알림 잡기",
                description:
                  "저녁 10시에 푸시/알람을 설정해 기록 루틴을 만들어보세요.",
              },
              {
                title: "템플릿 활용",
                description:
                  "“오늘 좋았던 1가지 / 힘들었던 1가지 / 배운 점 1가지” 템플릿을 사용해보세요.",
              },
            ],
            highlights: [],
          });
          setLoading(false);
        }
        return;
      }

      // 3) OpenAI 호출
      try {
        const res = await analyzePeriodInsight(weekly.payload);
        if (alive) {
          setData(res);
          setLoading(false);
          localStorage.setItem(cacheKey, JSON.stringify(res)); // 캐시 저장
        }
      } catch (e) {
        console.error(e);
        if (alive) {
          setError(
            "인사이트 생성 중 문제가 발생했어요. 잠시 뒤 다시 시도해 주세요.",
          );
          setLoading(false);
        }
      }
    };

    run();
    return () => {
      alive = false;
    };
  }, [weekly]);

  // ----- 렌더 -----
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <ClipLoader size={28} />
        {/* 초소형 스피너 */}
      </div>
    );
  }

  if (error) {
    return <div style={{ padding: 16, color: "#b00020" }}>{error}</div>;
  }

  return (
    <>
      {/* 주간 AI 인사이트 */}
      <WeeklyAiInsightWrap>
        <WeeklyAiInsightTitle>주간 AI 인사이트</WeeklyAiInsightTitle>

        <WeeklyAiInsightBox>
          <WeeklyAiInsightText>
            {data?.summary?.title || "이번 주 감정 흐름"}
          </WeeklyAiInsightText>
          <WeeklyAiInsightSubText>
            {data?.summary?.description}
          </WeeklyAiInsightSubText>
        </WeeklyAiInsightBox>
      </WeeklyAiInsightWrap>

      {/* AI 맞춤 조언 */}
      <AiAdviceWrap>
        <AiAdviceTitle>AI 맞춤 조언</AiAdviceTitle>
        {(data?.tips || []).map((t, i) => (
          <AiAdviceBox key={i}>
            <AiAdviceText>{t.title}</AiAdviceText>
            <AiAdviceSubText>{t.description}</AiAdviceSubText>
          </AiAdviceBox>
        ))}
      </AiAdviceWrap>
    </>
  );
}
