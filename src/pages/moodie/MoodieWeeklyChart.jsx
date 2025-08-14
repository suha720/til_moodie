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

  // 이번 주 일기만 (US 주: 일~토)
  const weeklyItems = moodList.filter(item => {
    const d = moment(item.date, "YYYY-MM-DD");
    return d.isBetween(startOfWeek, endOfWeek, "day", "[]");
  });

  // 키 변환 맵
  const keyToKo = {
    joy: "기쁨",
    sadness: "슬픔",
    anger: "분노",
    anxiety: "불안",
    calmness: "평온",
  };
  const koToKey = Object.fromEntries(
    Object.entries(keyToKo).map(([k, v]) => [v, k]),
  );

  // 각 일기의 '감정의 최고점'을 map으로 계산하고, 동점이면 imoji 선택, (imoji 오타인데, 추후 수정)
  const winners = weeklyItems.map(it => {
    const scores = {
      joy: Number(it.joy) || 0,
      sadness: Number(it.sadness) || 0,
      anger: Number(it.anger) || 0,
      anxiety: Number(it.anxiety) || 0,
      calmness: Number(it.calmness) || 0,
    };

    const maxVal = Math.max(...Object.values(scores));
    const tied = Object.keys(scores).filter(k => scores[k] === maxVal);

    // 단일 최댓값이면 바로 한국어 라벨 반환
    if (tied.length === 1) return keyToKo[tied[0]];

    // 동점이면 해당 일기의 imoji(대표감정)로 결정, 없으면 첫 번째로
    const imojiKey = koToKey[it.imoji];
    const pick = tied.includes(imojiKey) ? imojiKey : tied[0];
    return keyToKo[pick];
  });

  // 카운터 집계 (reduce)
  const emotionCounts = winners.reduce(
    (acc, ko) => {
      acc[ko] = (acc[ko] || 0) + 1;
      return acc;
    },
    { 기쁨: 0, 슬픔: 0, 불안: 0, 분노: 0, 평온: 0 },
  );

  // 카운트 초기화
  // const emotionCounts = {
  //   기쁨: 0,
  //   슬픔: 0,
  //   불안: 0,
  //   분노: 0,
  //   평온: 0,
  // };

  // 이번 주 데이터만 필터해서 카운트
  // moodList.forEach(item => {
  //   const date = moment(item.date, "YYYY-MM-DD");
  //   if (date.isBetween(startOfWeek, endOfWeek, "day", "[]")) {
  //     if (item.imoji) {
  //       if (item.imoji in emotionCounts) {
  //         emotionCounts[item.imoji] += 1;
  //       }
  //     }
  //   }
  // });
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
                style={{ width: "50px" }}
              />
              <span className="emotionnumber">{emotionCounts["불안"]}</span>
              <div className="text">불안</div>
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
