import React from "react";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import {
  AiAdviceBox,
  AiAdviceSubText,
  AiAdviceText,
  AiAdviceTitle,
  AiAdviceWrap,
  AiMessageBox,
  AiMessageImg,
  AiMessageSubTitle,
  AiMessageTitle,
  MoodieWeeklyChartWrap,
  WeeklyAiInsightBox,
  WeeklyAiInsightSubText,
  WeeklyAiInsightText,
  WeeklyAiInsightTitle,
  WeeklyAiInsightWrap,
  WeeklyEmotion,
  WeeklyEmotionBox,
  WeeklyEmotionTitle,
  WeeklyEmotionWrap,
} from "./MoodieWeeklyChart.style";
import WeeklyAdviceFromAI from "../../components/forms/WeeklyAdviceFromAI";
import moment from "moment";

function MoodieWeeklyChart({ moodList, monthlyInsights }) {
  //js
  const entries = Object.entries(monthlyInsights).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  // US 주간 고정: 로케일을 en으로 강제 → 일(0)~토(6)
  const base = moment().locale("en");
  // US 날짜 기준 이번 주 시작/끝 (일요일 시작, 토요일 끝)
  const startOfWeek = base.clone().startOf("week"); // 일요일
  const endOfWeek = base.clone().endOf("week"); // 토요일

  // 카운트 초기화
  const emotionCounts = {
    기쁨: 0,
    슬픔: 0,
    불안: 0,
    분노: 0,
    평온: 0,
  };

  // 이번 주 데이터만 필터해서 카운트
  moodList.forEach(item => {
    const date = moment(item.date, "YYYY-MM-DD");
    if (date.isBetween(startOfWeek, endOfWeek, "day", "[]")) {
      if (item.imoji) {
        if (item.imoji in emotionCounts) {
          emotionCounts[item.imoji] += 1;
        }
      }
    }
  });
  //jsx
  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieWeeklyChartWrap>
        <AiMessageBox>
          <AiMessageImg src="./messageimg.svg" alt="잘하고있어요" />
          <AiMessageTitle>차근차근 잘 하고 있어요!</AiMessageTitle>
          <AiMessageSubTitle>
            꾸준히 감정을 기록하며 한 걸음씩 나아가고 있어요🎉 눈에 띄는 변화가
            없더라도, 매일 감정을 돌아보고 기록한다는 건 스스로를 돌보는 큰
            용기예요!
          </AiMessageSubTitle>
        </AiMessageBox>
        <WeeklyEmotionWrap>
          <WeeklyEmotionTitle>이번 주 감정 분포</WeeklyEmotionTitle>
          <WeeklyEmotionBox>
            <WeeklyEmotion>
              <img src="./기쁨.svg" alt="기쁨" style={{ width: "50px" }} />
              <span className="emotionnumber">{emotionCounts["기쁨"]}</span>
              <div className="text">기쁨</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img src="./슬픔.svg" alt="슬픔" style={{ width: "50px" }} />
              <span className="emotionnumber">{emotionCounts["슬픔"]}</span>
              <div className="text">슬픔</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img
                className="emoji"
                src="./불안.svg"
                alt="불안"
                style={{ width: "60px", height: "56px" }}
              />
              <span className="emotionnumber">{emotionCounts["불안"]}</span>
              <div className="settext">불안</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img src="./분노.svg" alt="분노" style={{ width: "50px" }} />
              <span className="emotionnumber">{emotionCounts["분노"]}</span>
              <div className="text">분노</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img src="./평온.svg" alt="평온" style={{ width: "50px" }} />
              <span className="emotionnumber">{emotionCounts["평온"]}</span>
              <div className="text">평온</div>
            </WeeklyEmotion>
          </WeeklyEmotionBox>
        </WeeklyEmotionWrap>

        {/* 테스트 */}
        <WeeklyAdviceFromAI moodList={moodList} />
      </MoodieWeeklyChartWrap>
    </ContainerMain>
  );
}

export default MoodieWeeklyChart;
