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

function MoodieAllRecord({ moodList, isLoading }) {
  //js

  const [currentDate, setCurrentDate] = useState(new Date());
  const isFakeLoading = useFakeLoading(isLoading, 500);

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setCurrentDate(activeStartDate);
  };

  const currentMonth = moment(currentDate).month(); // 0부터 시작 (1월 = 0)
  const countThisMonth = moodList.filter(item => {
    return (
      moment(item.date).month() === currentMonth &&
      moment(item.date).year() === moment(currentDate).year()
    );
  }).length;

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

  // 월별 감정 점수 평균 계산
  const getMonthlyEmotionAverages = (moodList, currentDate) => {
    const currentMonth = moment(currentDate).month();
    const currentYear = moment(currentDate).year();

    const thisMonthRecords = moodList.filter(item => {
      const date = moment(item.date, "YYYY-MM-DD");
      return date.month() === currentMonth && date.year() === currentYear;
    });

    const totals = {
      joy: 0,
      sadness: 0,
      anger: 0,
      anxiety: 0,
      calmness: 0,
    };

    thisMonthRecords.forEach(item => {
      totals.joy += item.joy || 0;
      totals.sadness += item.sadness || 0;
      totals.anger += item.anger || 0;
      totals.anxiety += item.anxiety || 0;
      totals.calmness += item.calmness || 0;
    });

    const count = thisMonthRecords.length || 1; // 0방지

    return {
      joy: Math.round(totals.joy / count),
      sadness: Math.round(totals.sadness / count),
      anger: Math.round(totals.anger / count),
      anxiety: Math.round(totals.anxiety / count),
      calmness: Math.round(totals.calmness / count),
    };
  };

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
                /D/차근 차근 감정을 기록하며 자신을 돌보고 있어요! 꾸준히
                작성하여 큰 변화를 만들어 보아요☺
              </AllRecordCalendarSubText>
            </AllRecordCalendarTextWrap>
          </AllRecordCalendarWrap>

          <MonthlyEmotionReport>
            <MonthlyEmotionReportTitle>
              {currentMonth + 1}월 모든 기록 감정 요약
            </MonthlyEmotionReportTitle>
            <EmotionStatsInfowrap>
              <EmotionStatsLInfo>
                <EmotionStatsLInfoScore>55</EmotionStatsLInfoScore>
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
                      <div className="scoretext">{emotion.name} : /D/점</div>
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
                      <div className="scoretext">{emotion.name} : /D/점</div>
                    </EmotionStatsEmotionScore>
                  ))}
                </EmotionStatsRSubInfo>
              </EmotionStatsRInfo>
            </EmotionStatsInfowrap>
            <MonthlyInsightWrap>
              <MonthlyInsightTitle>🎈이번 달 인사이트</MonthlyInsightTitle>
              <MonthlyInsightSubTitle>
                /D/이번 달은 기쁨의 감정점수가 높아요! 그 다음 감정은 화남,
                다음은
              </MonthlyInsightSubTitle>
            </MonthlyInsightWrap>
          </MonthlyEmotionReport>
        </ContainerMain>
      )}
    </>
  );
}

export default MoodieAllRecord;
