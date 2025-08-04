import styled from "@emotion/styled";
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

  return (
    <ContainerMain>
      <TmpLogo></TmpLogo>
      <AiMoodieBox>
        <AiMoodieImage src={`/${todayImoji}.svg`} alt="기쁨" />
        <AiMoodieTitle>/D/기분 좋은 하루였네요.</AiMoodieTitle>
        <AiMoodieSubTitle>
          /D/이런 날은 나에게 작은 선물을 주는 것도 좋아요!
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
            {todayDiary?.title || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitle>
          <DetailDiaryInsightSubTitleText>
            {todayDiary?.message || "오늘 작성된 일기가 없습니다."}
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
              : "작성된 일기 없음"}
          </span>
          점
        </DetailDiaryScoreTitle>
        <DetailDiaryScoreBox>
          <DetailDiaryScoreText>
            /D/데이터 업데이트 칠 곳을 표시해 두었습니다.
          </DetailDiaryScoreText>
        </DetailDiaryScoreBox>
      </DetailDiaryScoreWrap>
      <WeeklyBtn>주간 기록 화면으로</WeeklyBtn>
    </ContainerMain>
  );
}

export default MoodieDetail;
