import React, { useState } from "react";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import {
  MoodieCategoryBtnWrap,
  MoodieCategoryMainBtn,
  MoodieCategoryMainBtnWrap,
  MoodieCategorySubBtn,
  MoodieCategorySubBtnWrap,
} from "./MoodieRecord.style";
import AllCalendar from "../../components/allcalendar/AllCalendar";
import {
  AllRecordCalendarSubText,
  AllRecordCalendarText,
  AllRecordCalendarTextWrap,
  AllRecordCalendarTopButton,
  AllRecordCalendarTopButtonWrap,
  AllRecordCalendarTopTitle,
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
  const getMonthInfo = () => {
    const today = new Date();
    return {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
    };
  };

  const [currentDate, setCurrentDate] = useState(getMonthInfo);

  const changeMonth = offset => {
    const newDate = new Date(currentDate.year, currentDate.month - 1 + offset);
    setCurrentDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
    });
  };

  //jsx
  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieCategoryBt />

      <AllRecordCalendarWrap>
        <AllRecordCalendarTopWrap>
          <AllRecordCalendarTopTitle>{`${currentDate.year}년 ${currentDate.month}월 기록`}</AllRecordCalendarTopTitle>
          <AllRecordCalendarTopButtonWrap>
            <AllRecordCalendarTopButton onClick={() => changeMonth(-1)}>
              {`${currentDate.month - 1}월`}
            </AllRecordCalendarTopButton>
            <AllRecordCalendarTopButton onClick={() => changeMonth(1)}>
              {`${currentDate.month + 1}월`}
            </AllRecordCalendarTopButton>
          </AllRecordCalendarTopButtonWrap>
        </AllRecordCalendarTopWrap>
        <AllCalendar year={currentDate.year} month={currentDate.month} />
        <AllRecordCalendarTextWrap>
          <AllRecordCalendarText>
            {`${currentDate.month}월은`}
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
          {`${currentDate.month}월 모든 기록 감정 요약`}
        </MonthlyEmotionReportTitle>
        <EmotionStatsInfowrap>
          <EmotionStatsLInfo>
            <EmotionStatsLInfoScore>55</EmotionStatsLInfoScore>
            <EmotionStatsLInfoText>평균 감정 점수</EmotionStatsLInfoText>
          </EmotionStatsLInfo>
          <EmotionStatsRInfo>
            <EmotionStatsLSubInfo>
              <EmotionStatsEmotionScore>
                <img className="imgp" src="./불안.svg" alt="불안" />
                <div className="scoretext">불안 : /D/점</div>
              </EmotionStatsEmotionScore>
              <EmotionStatsEmotionScore>
                <img className="img" src="./평온.svg" alt="평온" />
                <div className="scoretext">평온 : /D/점</div>
              </EmotionStatsEmotionScore>
            </EmotionStatsLSubInfo>
            <EmotionStatsRSubInfo>
              <EmotionStatsEmotionScore>
                <img className="img" src="./기쁨.svg" alt="기쁨" />
                <div className="scoretext">기쁨 : /D/점</div>
              </EmotionStatsEmotionScore>
              <EmotionStatsEmotionScore>
                <img className="img" src="./분노.svg" alt="분노" />
                <div className="scoretext">분노 : /D/점</div>
              </EmotionStatsEmotionScore>
              <EmotionStatsEmotionScore>
                <img className="img" src="./슬픔.svg" alt="슬픔" />
                <div className="scoretext">슬픔 : /D/점</div>
              </EmotionStatsEmotionScore>
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
