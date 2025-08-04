import React, { useState } from "react";

import TmpLogo from "../../components/logo/TmpLogo";
import { ContainerMain } from "./Moodie.style";
import {
  EmotionPatternBox,
  EmotionPatternLBox,
  EmotionPatternLText,
  EmotionPatternRBox,
  EmotionPatternRText,
  EmotionPatternTextBox,
  EmotionPatternTitle,
  RecordAllScore,
  RecordBox,
  RecordImgBox,
  RecordImgBoxImg,
  RecordScore,
  RecordScoreBox,
  RecordScoreText,
  RecordTextBox,
  RecordTextBoxBottom,
  RecordTextBoxBottomSubTitle,
  RecordTextBoxBottomTitle,
  RecordTextBoxTop,
  RecordTextBoxTopDate,
  RecordTextBoxTopEmotion,
  RecordWeeklySubText,
  RecordWeeklyText,
  RecordWeeklyTextBox,
  RecordWeeklyTitle,
  RecordWeeklyWrap,
  WeeklyInsightBox,
  WeeklyInsightSubTitle,
  WeeklyInsightTitle,
  WeeklyRecordBox,
  WeeklyRecordBoxWrap,
  WeeklyScoreBox,
  WeeklyScoreLBox,
  WeeklyScoreLNumber,
  WeeklyScoreLText,
  WeeklyScoreRBox,
  WeeklyScoreRNumber,
  WeeklyScoreRText,
  WeeklyScoreTitle,
  WeeklyScoreWrap,
} from "./MoodieRecord.style";
import WeekCalendar from "../../components/weekcalendar/WeekCalendar";
import MoodieCategoryBt from "../../components/moodiecategorybutton/MoodieCategoryBt";

function MoodieRecord() {
  //js
  const [hasRecord, setHasRecord] = useState(true);

  const getWeekInfo = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const week = Math.ceil(date / 7);
    return { month, week };
  };

  const { month, week } = getWeekInfo();

  const weeklyRecords = [
    {
      emotion: "기쁨",
      date: "2025년 7월 22일",
      title: "/D/기분좋은 하루였네요!",
      subTitle: "/D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다",
      score: 85,
      imgSrc: "./기쁨.svg",
    },
    {
      emotion: "슬픔",
      date: "2025년 7월 23일",
      title: "/D/조금 우울한 하루였어요",
      subTitle: "/D/비가 와서 기분이 가라앉았어요",
      score: 62,
      imgSrc: "./슬픔.svg",
    },
    {
      emotion: "화남",
      date: "2025년 7월 24일",
      title: "/D/짜증나는 일이 있었어요",
      subTitle: "/D/버스 놓치고 중요한 회의도 늦었어요",
      score: 50,
      imgSrc: "./분노.svg",
    },
  ];
  const emotionBorderColors = {
    기쁨: "#FFE24A",
    슬픔: "#507DB2",
    불안: "#9E54B7",
    화남: "#FB4C36",
    평온: "#8CC942",
  };
  //jsx

  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieCategoryBt />

      <RecordWeeklyWrap>
        <RecordWeeklyTitle>{`${month}월 ${week}주차 기록`}</RecordWeeklyTitle>
        <WeekCalendar />
        <RecordWeeklyTextBox>
          <RecordWeeklyText>
            /D/7개 중{" "}
            <span className="label">3개의 기록을 작성완료 했어요.</span>
          </RecordWeeklyText>
          <RecordWeeklySubText>
            /D/차근차근 감정을 기록하며 자신을 돌보고 있어요! 꾸준히 작성하여 큰
            변화를 만들어 보아요😊
          </RecordWeeklySubText>
        </RecordWeeklyTextBox>
      </RecordWeeklyWrap>
      <WeeklyRecordBoxWrap>
        {weeklyRecords.map((record, index) => (
          <WeeklyRecordBox key={index}>
            <RecordBox>
              <RecordImgBox borderColor={emotionBorderColors[record.emotion]}>
                <RecordImgBoxImg src={record.imgSrc} alt={record.emotion} />
              </RecordImgBox>
              <RecordTextBox>
                <RecordTextBoxTop>
                  <RecordTextBoxTopEmotion>
                    {record.emotion}
                  </RecordTextBoxTopEmotion>
                  <RecordTextBoxTopDate>{record.date}</RecordTextBoxTopDate>
                </RecordTextBoxTop>
                <RecordTextBoxBottom>
                  <RecordTextBoxBottomTitle>
                    {record.title}
                  </RecordTextBoxBottomTitle>
                  <RecordTextBoxBottomSubTitle>
                    {record.subTitle}
                  </RecordTextBoxBottomSubTitle>
                </RecordTextBoxBottom>
                <RecordScoreBox>
                  <RecordAllScore>
                    <RecordScore />
                  </RecordAllScore>
                  <RecordScoreText>{record.score}점</RecordScoreText>
                </RecordScoreBox>
              </RecordTextBox>
            </RecordBox>
          </WeeklyRecordBox>
        ))}
      </WeeklyRecordBoxWrap>
      <WeeklyScoreWrap>
        <WeeklyScoreTitle>{`${month}월 ${week}주차 기록 요약`}</WeeklyScoreTitle>
        <WeeklyScoreBox>
          <WeeklyScoreLBox>
            <WeeklyScoreLNumber>/D/3</WeeklyScoreLNumber>
            <WeeklyScoreLText>총 감정 기록 수</WeeklyScoreLText>
          </WeeklyScoreLBox>
          <WeeklyScoreRBox>
            <WeeklyScoreRNumber>/D/55</WeeklyScoreRNumber>
            <WeeklyScoreRText>평균 감정 점수</WeeklyScoreRText>
          </WeeklyScoreRBox>
        </WeeklyScoreBox>
        <WeeklyInsightBox>
          <WeeklyInsightTitle>🎈 이번 주 인사이트</WeeklyInsightTitle>
          <WeeklyInsightSubTitle>
            /D/차근차근 기록하고 있어요! 감정을 돌아보며 점수를 관리해보세요.
          </WeeklyInsightSubTitle>
        </WeeklyInsightBox>
      </WeeklyScoreWrap>
      <EmotionPatternBox>
        <EmotionPatternTitle>감정 패턴</EmotionPatternTitle>
        <EmotionPatternTextBox>
          <EmotionPatternLBox>
            <EmotionPatternLText>가장 많이 느낀 감정</EmotionPatternLText>
            <EmotionPatternLText>가장 좋았던 날</EmotionPatternLText>
            <EmotionPatternLText>감정 기복</EmotionPatternLText>
          </EmotionPatternLBox>
          <EmotionPatternRBox>
            <EmotionPatternRText>/D/😊기쁨(43%)</EmotionPatternRText>
            <EmotionPatternRText>/D/2025년 7월 22일(85점)</EmotionPatternRText>
            <EmotionPatternRText>
              <span className="point">/D/다소 안정적</span>
            </EmotionPatternRText>
          </EmotionPatternRBox>
        </EmotionPatternTextBox>
      </EmotionPatternBox>
    </ContainerMain>
  );
}

export default MoodieRecord;
