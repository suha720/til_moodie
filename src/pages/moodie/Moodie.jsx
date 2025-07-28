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
import TmpForm from "../../components/forms/TmpForm";
import MainSummary from "../../components/forms/MainSummary";

function Moodie() {
  return (
    <>
      <Logo>
        <Link to={"/"}>
          {" "}
          <img src="/logo2.svg" alt="Moodie Logo" width={80} />
        </Link>
      </Logo>

      <ContainerMain>
        <Greeting>
          <h1>
            안녕하세요!
            <br />
            오늘 하루는 어떠셨나요?
          </h1>
          <p>무디와 함께 감정들을 기록하고 관리해 보아요.</p>
        </Greeting>

        <TmpForm></TmpForm>

        <MainSummary></MainSummary>

        <div style={{ width: "420px", margin: "32px auto" }}>
          <RecordButton>
            <Link to={"/add"}>오늘의 감정 기록하기</Link>
          </RecordButton>
        </div>
      </ContainerMain>
    </>
  );
}

export default Moodie;
