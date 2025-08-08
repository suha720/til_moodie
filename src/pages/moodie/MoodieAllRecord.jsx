import React, { useEffect, useState } from "react";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import AllCalendar from "../../components/allcalendar/AllCalendar";
import {
  AllRecordCalendarSubText,
  AllRecordCalendarText,
  AllRecordCalendarTextWrap,
  AllRecordCalendarTopWrap,
  AllRecordCalendarWrap,
  EmotionStatsEmotionScore,
  EmotionStatsInfowrap,
  EmotionStatsLInfo,
  EmotionStatsLInfoScore,
  EmotionStatsLInfoText,
  EmotionStatsLSubInfo,
  EmotionStatsRInfo,
  EmotionStatsRSubInfo,
  MonthlyEmotionReport,
  MonthlyEmotionReportTitle,
  MonthlyInsightSubTitle,
  MonthlyInsightTitle,
  MonthlyInsightWrap,
} from "./MoodieAllRecord.style";
import MoodieCategoryBt from "../../components/moodiecategorybutton/MoodieCategoryBt";
import useFakeLoading from "../../hooks/useFakeLoading";
import LoadingSpinner from "../../components/spinners/LoadingSpinner";
import moment from "moment";
import {
  generateMonthlyInsight,
  generateMonthlyMessage,
} from "../../services/openai";

function MoodieAllRecord({ moodList, isLoading }) {
  //js

  const [currentDate, setCurrentDate] = useState(new Date());
  const isFakeLoading = useFakeLoading(isLoading, 500);

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setCurrentDate(activeStartDate);
  };

  // 새로운 시작
  const getThisMonthRecords = (list, date) => {
    const m = moment(date);
    return (list || []).filter(it => {
      const d = moment(it.date, "YYYY-MM-DD", true); // strict
      return d.isValid() && d.month() === m.month() && d.year() === m.year();
    });
  };

  const thisMonthRecords = getThisMonthRecords(moodList, currentDate);
  const currentMonth = moment(currentDate).month(); // 0부터 시작 (1월 = 0)
  const countThisMonth = thisMonthRecords.length;

  const leftEmotions = [
    { name: "불안", src: "./불안.svg" },
    { name: "평온", src: "./평온.svg" },
  ];

  const rightEmotions = [
    { name: "기쁨", src: "./기쁨.svg" },
    { name: "분노", src: "./분노.svg" },
    { name: "슬픔", src: "./슬픔.svg" },
  ];

  const emotionToImage = {
    기쁨: "/기쁨.svg",
    슬픔: "/슬픔.svg",
    분노: "/분노.svg",
    불안: "/불안.svg",
    평온: "/평온.svg",
  };

  // 종합 감정 점수 (하루)
  const calculateOverallScore = item => {
    const { joy, sadness, anger, anxiety, calmness } = item;
    return (
      (2 * joy -
        2 * sadness -
        1.5 * anger -
        1.5 * anxiety +
        1.5 * calmness +
        50) /
      8.5
    );
  };

  // 종합 감정 점수 (월별)
  let monthlyOverallAverage = 0;
  if (countThisMonth > 0) {
    const total = thisMonthRecords.reduce(
      (sum, it) => sum + calculateOverallScore(it),
      0,
    );
    monthlyOverallAverage = total / countThisMonth;
  }

  // 각각 구하기
  const getMonthlyEmotionAverages = records => {
    if ((records || []).length === 0) {
      return { joy: 0, sadness: 0, anger: 0, anxiety: 0, calmness: 0 };
    }
    const c = records.length;
    const totals = records.reduce(
      (acc, it) => {
        acc.joy += Number(it.joy) || 0;
        acc.sadness += Number(it.sadness) || 0;
        acc.anger += Number(it.anger) || 0;
        acc.anxiety += Number(it.anxiety) || 0;
        acc.calmness += Number(it.calmness) || 0;
        return acc;
      },
      { joy: 0, sadness: 0, anger: 0, anxiety: 0, calmness: 0 },
    );
    // 소수 버림: Math.floor / 반올림: Math.round
    return {
      joy: Math.round(totals.joy / c),
      sadness: Math.round(totals.sadness / c),
      anger: Math.round(totals.anger / c),
      anxiety: Math.round(totals.anxiety / c),
      calmness: Math.round(totals.calmness / c),
    };
  };

  const emotionKeyByName = {
    기쁨: "joy",
    슬픔: "sadness",
    분노: "anger",
    불안: "anxiety",
    평온: "calmness",
  };

  const monthlyAvg = getMonthlyEmotionAverages(thisMonthRecords);

  const [calendarMessage, setCalendarMessage] = useState("");
  useEffect(() => {
    let alive = true;

    (async () => {
      if (countThisMonth === 0) {
        setCalendarMessage(
          "이번 달 기록이 아직 없어요. 오늘 한 줄부터 시작해볼까요? 🙂",
        );
        return;
      }
      try {
        const msg = await generateMonthlyMessage({
          count: countThisMonth,
          avgScore: monthlyOverallAverage,
        });
        if (alive) setCalendarMessage(msg);
      } catch (e) {
        if (alive) setCalendarMessage("오늘도 짧게 마음을 남겨보면 좋아요 🙂");
      }
    })();

    return () => {
      alive = false;
    };
  }, [countThisMonth, monthlyOverallAverage]);

  const [monthlyInsight, setMonthlyInsight] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      if (countThisMonth === 0) {
        setMonthlyInsight(
          "이번 달은 아직 기록이 없어요. 새로운 감정을 남겨보세요 🙂",
        );
        return;
      }
      try {
        const msg = await generateMonthlyInsight({ monthlyAvg });
        if (alive) setMonthlyInsight(msg);
      } catch {
        if (alive) setMonthlyInsight("이번 달 감정 경향을 분석할 수 없습니다.");
      }
    })();
    return () => {
      alive = false;
    };
  }, [countThisMonth]);
  //jsx
  return (
    <>
      <TmpLogo />
      {isFakeLoading ? (
        <ContainerMain style={{ textAlign: "center", paddingTop: "120px" }}>
          <LoadingSpinner />
        </ContainerMain>
      ) : (
        <ContainerMain>
          <MoodieCategoryBt />

          <AllRecordCalendarWrap>
            <AllRecordCalendarTopWrap>
              <AllCalendar
                currentDate={currentDate}
                onActiveStartDateChange={handleActiveStartDateChange}
                moodList={moodList}
                emotionToImage={emotionToImage}
              />
            </AllRecordCalendarTopWrap>
            <AllRecordCalendarTextWrap>
              <AllRecordCalendarText>
                {currentMonth + 1}월은
                <span className="text">
                  {" "}
                  총 {countThisMonth}개의 기록이 보관되어 있어요.
                </span>
              </AllRecordCalendarText>
              <AllRecordCalendarSubText>
                {calendarMessage ||
                  (countThisMonth > 0
                    ? "메시지 생성 중…"
                    : "이번 달 기록이 아직 없어요.")}
              </AllRecordCalendarSubText>
            </AllRecordCalendarTextWrap>
          </AllRecordCalendarWrap>

          <MonthlyEmotionReport>
            <MonthlyEmotionReportTitle>
              {currentMonth + 1}월 모든 기록 감정 요약
            </MonthlyEmotionReportTitle>
            <EmotionStatsInfowrap>
              <EmotionStatsLInfo>
                <EmotionStatsLInfoScore>
                  {Math.round(monthlyOverallAverage)}
                </EmotionStatsLInfoScore>
                <EmotionStatsLInfoText>평균 감정 점수</EmotionStatsLInfoText>
              </EmotionStatsLInfo>
              <EmotionStatsRInfo>
                <EmotionStatsLSubInfo>
                  {leftEmotions.map((emotion, idx) => (
                    <EmotionStatsEmotionScore key={idx}>
                      <img
                        className="img"
                        src={emotion.src}
                        alt={emotion.name}
                      />
                      <div className="scoretext">
                        {emotion.name} :{" "}
                        {monthlyAvg[emotionKeyByName[emotion.name]] || 0}점
                      </div>
                    </EmotionStatsEmotionScore>
                  ))}
                </EmotionStatsLSubInfo>
                <EmotionStatsRSubInfo>
                  {rightEmotions.map((emotion, idx) => (
                    <EmotionStatsEmotionScore key={idx}>
                      <img
                        className="img"
                        src={emotion.src}
                        alt={emotion.name}
                      />
                      <div className="scoretext">
                        {emotion.name} :{" "}
                        {monthlyAvg[emotionKeyByName[emotion.name]] || 0}점
                      </div>
                    </EmotionStatsEmotionScore>
                  ))}
                </EmotionStatsRSubInfo>
              </EmotionStatsRInfo>
            </EmotionStatsInfowrap>
            <MonthlyInsightWrap>
              <MonthlyInsightTitle>🎈이번 달 인사이트</MonthlyInsightTitle>
              <MonthlyInsightSubTitle>{monthlyInsight}</MonthlyInsightSubTitle>
            </MonthlyInsightWrap>
          </MonthlyEmotionReport>
        </ContainerMain>
      )}
    </>
  );
}

export default MoodieAllRecord;
