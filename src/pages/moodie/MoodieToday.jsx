import React from "react";
import {
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
  WeeklyBtn,
} from "./MoodieDetail.style";
import {
  AiTipSubTitle,
  AiTipTitle,
  AiTipWrap,
  TodaySaveEmotionImg,
  TodaySaveEmotionSubTitle,
  TodaySaveEmotionTextBox,
  TodaySaveEmotionTitle,
  TodaySaveEmotionWrap,
  TodaySaveSubTitle,
  TodaySaveTitle,
  TodaySaveWrap,
} from "./MoodieToday.style";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import { Link } from "react-router-dom";
import moment from "moment";

function MoodieToday() {
  moment.locale("ko");
  const today = moment().format("YYYY-MM-DD");

  return (
    <ContainerMain>
      <TmpLogo />

      <TodaySaveWrap>
        <TodaySaveTitle>오늘의 감정기록을 저장 했어요!</TodaySaveTitle>
        <TodaySaveSubTitle>
          앞으로도 꾸준히 감정 기록을 해보아요.
        </TodaySaveSubTitle>
      </TodaySaveWrap>
      <TodaySaveEmotionWrap>
        <TodaySaveEmotionImg src="/기쁨.svg" />
        <TodaySaveEmotionTextBox>
          <TodaySaveEmotionTitle>오늘은 기쁜 하루였네요!</TodaySaveEmotionTitle>
          <TodaySaveEmotionSubTitle>
            이 기분을 이어서 좋아하는 일을 더 해보는 건 어때요?
          </TodaySaveEmotionSubTitle>
        </TodaySaveEmotionTextBox>
      </TodaySaveEmotionWrap>
      <DetailDiaryDataWrap>
        <DetailDiaryDay>
          {moment().format("YYYY년 MM월 DD일 dd요일")}
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
          /데이터/오늘 운동을 했는데 온몸이 뻐근하다. 그래도 개운한 기분이든다.
          꾸준히 해야겠다. 얼른 집가서 밥먹고싶다. 이번주는 쉬어야겠다.
        </DetailDiaryData>
        <DetailDiaryBntWrap>
          <DetailDiaryBntData>/피곤/</DetailDiaryBntData>
          <DetailDiaryBntData>/개운/</DetailDiaryBntData>
          <DetailDiaryBntData>/만족/</DetailDiaryBntData>
        </DetailDiaryBntWrap>
      </DetailDiaryDataWrap>
      <DetailDiaryInsightWrap>
        <DetailDiaryInsightTitle>
          AI 인사이트 한 줄 요약
        </DetailDiaryInsightTitle>
        <DetailDiaryInsightBox>
          <DetailDiaryInsightSubTitle>
            /D/개운하고 만족스러운 하루!
          </DetailDiaryInsightSubTitle>
          <DetailDiaryInsightSubTitleText>
            /D/스스로에게 고생했다 말해 줄 수 있다면 그 하루는 충분히 의미있는
            날이에요.
          </DetailDiaryInsightSubTitleText>
        </DetailDiaryInsightBox>
      </DetailDiaryInsightWrap>
      <AiTipWrap>
        <AiTipTitle>
          <img className="img" src="./tipicon.svg" alt="팁" />
          당신에게 딱 맞는 팁
        </AiTipTitle>
        <AiTipSubTitle>
          /D/몸이 뻐근하다면 스트레칭이나 폼롤러로 풀어보세요. 개운한 기분은
          좋은 신호니까 그 감각을 기억해두면 운동 습관에 도움이 돼요. 꾸준히
          하고 싶다면 작게 루틴을 정해보는 것도 좋아요. 운동 후엔 단백질 식사 꼭
          챙기고요. 이번 주 쉬고 싶다면 가볍게 걷기나 요가처럼 부담 없는 활동도
          괜찮아요.
        </AiTipSubTitle>
      </AiTipWrap>
      <WeeklyBtn>
        <Link to={"/record"}>작성 기록 보러가기</Link>
      </WeeklyBtn>
    </ContainerMain>
  );
}

export default MoodieToday;
