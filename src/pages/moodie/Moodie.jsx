import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HamCate,
  MoodieBtn,
  MoodiePTag,
  TmpSection,
} from "./Moodie.style";

function Moodie() {
  return (
    <Container>
      <h2>Moodie</h2>
      <h4>
        안녕하세요! <br />
        오늘 하루는 어떠셨나요?
      </h4>
      <MoodiePTag>오늘의 감정을 솔직하게 기록해 보세요</MoodiePTag>
      <TmpSection></TmpSection>
      <MoodieBtn>
        <Link to={"/add"}>기록하기</Link>
      </MoodieBtn>
      <HamCate>
        <button>
          <Link to={"/"}>홈 화면</Link>
        </button>
        <button>
          <Link to={"/record"}>기록 보기</Link>
        </button>
        <button>
          <Link to={"/statistics"}>통계 보기</Link>
        </button>
      </HamCate>
    </Container>
  );
}

export default Moodie;
