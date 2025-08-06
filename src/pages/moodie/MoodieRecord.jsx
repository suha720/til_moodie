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
import moment from "moment";

function MoodieRecord({ moodList }) {
  //js

  const getWeekInfo = () => {
    const today = moment();
    const month = today.month() + 1; // 0부터 시작하므로 +1

    // 이번 달의 1일을 기준으로
    const firstDayOfMonth = moment().startOf("month");

    // 첫 주의 첫 일요일까지 며칠 차이 나는지
    const offset = firstDayOfMonth.day(); // 0(Sun) ~ 6(Sat)

    // 오늘까지 총 몇 일이 지났는지 (1일부터 오늘까지)
    const passedDays = today.date() + offset - 1;

    // 주차 계산
    const week = Math.floor(passedDays / 7) + 1;

    return { month, week };
  };

  const { month, week } = getWeekInfo();

  const todayInfo = getWeekInfo(moment().format("YYYY-MM-DD"));

  const countThisWeek = moodList.filter(item => {
    const { month, week } = getWeekInfo(item.date);
    return month === todayInfo.month && week === todayInfo.week;
  }).length;

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

  // 일기 수에 따른 코멘트
  const getWeeklyComment = count => {
    if (count === 0) {
      return "이번 주는 좀 바빴나 봐요! 다음 주엔 감정 한 줄씩만 남겨보는 건 어때요? 😊";
    } else if (count <= 2) {
      return "한 번이라도 써준 거 정말 좋아요! 시작이 반이니까, 다음엔 좀 더 자주 써봐요 💪";
    } else if (count <= 4) {
      return "감정을 하나씩 잘 챙기고 있네요 🙌 조금씩 기록하다 보면 어느새 익숙해질 거예요!";
    } else if (count <= 6) {
      return "오! 거의 매일 썼네요 😲 진짜 잘하고 있어요. 자신을 돌보는 힘, 이미 갖고 있는 듯!";
    } else {
      return "완.벽. 그 자체✨ 매일매일 감정 챙긴 당신, 너무 멋져요! 스스로도 느껴지죠? 😎";
    }
  };

  //jsx

  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieCategoryBt />

      <RecordWeeklyWrap>
        <RecordWeeklyTitle>{`${month}월 ${week}주차 기록`}</RecordWeeklyTitle>
        <WeekCalendar moodList={moodList} />
        <RecordWeeklyTextBox>
          <RecordWeeklyText>
            7개 중{" "}
            <span className="label">
              {countThisWeek}개의 기록을 작성완료 했어요.
            </span>
          </RecordWeeklyText>
          <RecordWeeklySubText>
            {getWeeklyComment(countThisWeek)}
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
                  <RecordTextBoxTopEmotion
                    bgColor={emotionBorderColors[record.emotion]}
                  >
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
