import React from "react";
import { Link } from "react-router-dom";
import {
  BottomNav,
  ChartBox,
  ChartBoxContent,
  ChartBoxText,
  Container,
  ContainerMain,
  EmotionBox,
  EmotionBoxTitle,
  Greeting,
  HamCate,
  Logo,
  MoodieBtn,
  MoodiePTag,
  RecordButton,
  TmpSection,
} from "./Moodie.style";

function Moodie() {
  return (
    <ContainerMain>
      <Logo>
        <img src="/logo.svg" alt="Moodie Logo" width={80} />
      </Logo>
      <h2>Moodie</h2>

      <Greeting>
        <h1>안녕하세요! 오늘 하루는 어떠셨나요?</h1>
        <p>오늘의 감정을 솔직하게 기록해 보세요</p>
      </Greeting>

      <ChartBox>
        <ChartBoxText>
          <h2>최근 7일 감정 추이</h2>
          <p>전체보기</p>
        </ChartBoxText>
        {/* Bar Chart 들어갈 자리 */}
        <ChartBoxContent></ChartBoxContent>
      </ChartBox>

      <EmotionBox>
        <EmotionBoxTitle>이번 주 감정 분포</EmotionBoxTitle>
        <div className="emotions">
          {/* 예시 감정 아이콘들 */}
          <div>
            <img src="/emoji_happy.svg" alt="기쁨" />
            <span>기쁨</span>
          </div>
          <div>
            <img src="/emoji_calm.svg" alt="평온" />
            <span>평온</span>
          </div>
          <div>
            <img src="/emoji_anxious.svg" alt="불안" />
            <span>불안</span>
          </div>
          <div>
            <img src="/emoji_sad.svg" alt="슬픔" />
            <span>슬픔</span>
          </div>
          <div>
            <img src="/emoji_angry.svg" alt="분노" />
            <span>분노</span>
          </div>
        </div>
      </EmotionBox>

      <RecordButton>
        <Link to={"/add"}>기록하기</Link>
      </RecordButton>

      <BottomNav>
        <button>
          <Link to={"/"}>홈 화면</Link>
        </button>
        <button>
          <Link to={"/record"}>기록 보기</Link>
        </button>
        <button>
          <Link to={"/statistics"}>통계 보기</Link>
        </button>
      </BottomNav>
    </ContainerMain>
  );
}

export default Moodie;
