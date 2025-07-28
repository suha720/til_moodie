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
import { Container, ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";

function MoodieDetail() {
  return (
    <ContainerMain>
      <TmpLogo></TmpLogo>
      <AiMoodieBox>
        <AiMoodieImage src="/기쁨.svg" alt="기쁨" />
        <AiMoodieTitle>/D/기분 좋은 하루였네요.</AiMoodieTitle>
        <AiMoodieSubTitle>
          /D/이런 날은 나에게 작은 선물을 주는 것도 좋아요!
        </AiMoodieSubTitle>
      </AiMoodieBox>
      <DetailDiaryDataWrap>
        <DetailDiaryDay>2025년 7월 22일 화요일</DetailDiaryDay>
        <hr
          style={{
            border: "none",
            height: "0.5px",
            backgroundColor: "rgba(78, 116, 29, 0.5)",
            margin: "0px 23px",
          }}
        />
        <DetailDiaryData>
          /데이터/오늘 운동을 했는데 온몸이 뻐근하다.
          <br />
          그래도 개운한 기분이든다. 꾸준히 해야겠다.
          <br />
          얼른 집가서 밥먹고싶다. 이번주는 쉬어야겠다.
        </DetailDiaryData>
        <DetailDiaryBntWrap>
          <DetailDiaryBntData>/피곤/</DetailDiaryBntData>
          <DetailDiaryBntData>/개운/</DetailDiaryBntData>
          <DetailDiaryBntData>/만족/</DetailDiaryBntData>
        </DetailDiaryBntWrap>
      </DetailDiaryDataWrap>
      <DetailDiaryInsightWrap>
        <DetailDiaryInsightTitle>AI 인사이트</DetailDiaryInsightTitle>
        <DetailDiaryInsightBox>
          <DetailDiaryInsightSubTitle>
            /D/개운하고 만족스러운 하루!
          </DetailDiaryInsightSubTitle>
          <DetailDiaryInsightSubTitleText>
            /D/개운하고 만족스러운 하루는 큰 성취보다 작은 일상을 잘
            마무리했을때 찾아옵니다. 해야 할 일을 무리 없이 끝내고, 스스로에게
            고생했다 말해줄 수 있다면 그 하루는 충분히 의미 있었던 날이에요.
          </DetailDiaryInsightSubTitleText>
        </DetailDiaryInsightBox>
      </DetailDiaryInsightWrap>
      <DetailDiaryScoreWrap>
        <DetailDiaryScoreTitle>
          오늘의 감정점수
          <span className="label">/D/85</span>점
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
