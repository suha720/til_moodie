import React, { useState } from "react";
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

function MoodieAllRecord() {
  //js

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setCurrentDate(activeStartDate);
  };

  const leftEmotions = [
    { name: "불안", src: "./불안.svg" },
    { name: "평온", src: "./평온.svg" },
  ];

  const rightEmotions = [
    { name: "기쁨", src: "./기쁨.svg" },
    { name: "분노", src: "./분노.svg" },
    { name: "슬픔", src: "./슬픔.svg" },
  ];
  //jsx
  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieCategoryBt />

      <AllRecordCalendarWrap>
        <AllRecordCalendarTopWrap>
          <AllCalendar
            currentDate={currentDate}
            onActiveStartDateChange={handleActiveStartDateChange}
          />
        </AllRecordCalendarTopWrap>
        <AllRecordCalendarTextWrap>
          <AllRecordCalendarText>
            {currentDate.getMonth() + 1}월은
            <span className="text"> 총 /D/개의 기록이 보관되어 있어요.</span>
          </AllRecordCalendarText>
          <AllRecordCalendarSubText>
            /D/차근 차근 감정을 기록하며 자신을 돌보고 있어요! 꾸준히 작성하여
            큰 변화를 만들어 보아요☺
          </AllRecordCalendarSubText>
        </AllRecordCalendarTextWrap>
      </AllRecordCalendarWrap>

      <MonthlyEmotionReport>
        <MonthlyEmotionReportTitle>
          {currentDate.getMonth() + 1}월 모든 기록 감정 요약
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
                  <img className="img" src={emotion.src} alt={emotion.name} />
                  <div className="scoretext">{emotion.name} : /D/점</div>
                </EmotionStatsEmotionScore>
              ))}
            </EmotionStatsLSubInfo>
            <EmotionStatsRSubInfo>
              {rightEmotions.map((emotion, idx) => (
                <EmotionStatsEmotionScore key={idx}>
                  <img className="img" src={emotion.src} alt={emotion.name} />
                  <div className="scoretext">{emotion.name} : /D/점</div>
                </EmotionStatsEmotionScore>
              ))}
            </EmotionStatsRSubInfo>
          </EmotionStatsRInfo>
        </EmotionStatsInfowrap>
        <MonthlyInsightWrap>
          <MonthlyInsightTitle>🎈이번 달 인사이트</MonthlyInsightTitle>
          <MonthlyInsightSubTitle>
            /D/이번 달은 기쁨의 감정점수가 높아요! 그 다음 감정은 화남, 다음은
          </MonthlyInsightSubTitle>
        </MonthlyInsightWrap>
      </MonthlyEmotionReport>
    </ContainerMain>
  );
}

export default MoodieAllRecord;
