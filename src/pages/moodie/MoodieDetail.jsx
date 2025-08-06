import React from "react";
import {
  AiMoodieBox,
  AiMoodieImage,
  AiMoodieSubTitle,
  AiMoodieTitle,
  DetailDiaryBntData,
  DetailDiaryBntWrap,
  DetailDiaryData,
  DetailDiaryDataWrap,
  DetailDiaryDay,
  DetailDiaryInsightBox,
  DetailDiaryInsightSubTitle,
  DetailDiaryInsightSubTitleText,
  DetailDiaryInsightTitle,
  DetailDiaryInsightWrap,
  DetailDiaryScoreBox,
  DetailDiaryScoreText,
  DetailDiaryScoreTitle,
  DetailDiaryScoreWrap,
  WeeklyBtn,
} from "./MoodieDetail.style";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import moment from "moment";
import "moment/locale/ko";
import EmotionMessages from "./../../apis/EmotionMessages.json";

function MoodieDetail({ moodList }) {
  moment.locale("ko");
  const today = moment().format("YYYY-MM-DD");
  const todayDiary = moodList.find(item => item.date === today);
  const todayImoji = todayDiary?.imoji;

  // 종합 감정 점수
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
  // 랜덤 메시지 선택
  const messages = EmotionMessages[todayImoji] || [];
  const randomMessage = messages[
    Math.floor(Math.random() * messages.length)
  ] || {
    title: "오늘 하루는 어땠나요?",
    subTitle: "당신의 감정을 기록해보세요.",
  };

  return (
    <ContainerMain>
      <TmpLogo></TmpLogo>
      <AiMoodieBox>
        <AiMoodieImage src={`/${todayImoji}.svg`} alt="기쁨" />
        <AiMoodieTitle>
          {todayDiary?.title[1] || "오늘 작성된 일기가 없습니다."}
        </AiMoodieTitle>
        <AiMoodieSubTitle>
          {todayDiary?.message[1] || "오늘 작성된 일기가 없습니다."}
        </AiMoodieSubTitle>
      </AiMoodieBox>
      <DetailDiaryDataWrap>
        <DetailDiaryDay>
          {moment().format("YYYY년 MM월 DD일 dddd")}
        </DetailDiaryDay>
        <hr
          style={{
            border: "none",
            height: "0.5px",
            backgroundColor: "rgba(78, 116, 29, 0.5)",
            margin: "0px 23px",
          }}
        />
        <DetailDiaryData>
          {todayDiary?.content || "오늘 작성된 일기가 없습니다."}
        </DetailDiaryData>
        <DetailDiaryBntWrap>
          {todayDiary?.checkboxs?.map((item, index) => (
            <DetailDiaryBntData key={index}>{item}</DetailDiaryBntData>
          ))}
        </DetailDiaryBntWrap>
      </DetailDiaryDataWrap>
      <DetailDiaryInsightWrap>
        <DetailDiaryInsightTitle>AI 인사이트</DetailDiaryInsightTitle>
        <DetailDiaryInsightBox>
          <DetailDiaryInsightSubTitle>
            {todayDiary?.title[0] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitle>
          <DetailDiaryInsightSubTitleText>
            {todayDiary?.message[0] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitleText>
        </DetailDiaryInsightBox>
      </DetailDiaryInsightWrap>
      <DetailDiaryScoreWrap>
        <DetailDiaryScoreTitle>
          오늘의 감정점수
          <span className="label">
            {" "}
            {todayDiary
              ? `${calculateOverallScore(todayDiary).toFixed(1)} / 10 `
              : "? / 10 "}
          </span>
          점
        </DetailDiaryScoreTitle>
        <DetailDiaryScoreBox>
          <DetailDiaryScoreText>
            {todayDiary?.message[2] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryScoreText>
        </DetailDiaryScoreBox>
      </DetailDiaryScoreWrap>
      <WeeklyBtn>주간 기록 화면으로</WeeklyBtn>
    </ContainerMain>
  );
}

export default MoodieDetail;
