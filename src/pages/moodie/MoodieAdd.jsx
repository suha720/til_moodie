import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  CheckBox,
  CheckBoxImoji,
  CheckBoxImojis,
  CheckBoxTitle,
  KeyWordBox,
  KeyWordItems,
  KeyWordItemsBtn,
  KeyWordItemsLi,
  KeyWordItemWrap,
  KeyWordSelect,
  QuestionSubTitle,
  QuestionSubTitleWrap,
  QuestionTitle,
  QuestionWrap,
  TodayDiaryBox,
  TodayDiaryBtn,
  TodayDiaryForm,
  TodayDiaryTitle,
  TodayDiaryWrap,
  TodaySubTitle,
  TodayTitle,
  TodayWrap,
} from "./MoodieAdd.style";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import MooPopup from "../../components/popups/MooPopup";
import TmpDate from "../../components/dates/TmpDate";

function MoodieAdd() {
  const ConatinerAdd = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #f7ffed;
  `;

  const Header = styled.div`
    height: 60px;
  `;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <ContainerMain>
      {isVisible && <MooPopup handleClick={handleClick} />}
      <TmpLogo></TmpLogo>
      <TodayWrap>
        <TmpDate />
        <TodaySubTitle>오늘 하루는 어떠셨나요?</TodaySubTitle>
      </TodayWrap>
      <QuestionWrap>
        <QuestionTitle>
          <img src="./questionicon.svg" alt="#" />
          생각해 볼 질문들
        </QuestionTitle>
        <QuestionSubTitleWrap>
          <QuestionSubTitle>
            · 오늘 가장 기억에 남는 순간은 무엇인가요?
          </QuestionSubTitle>
          <QuestionSubTitle>· 어떤 감정을 가장 많이 느꼈나요?</QuestionSubTitle>
          <QuestionSubTitle>
            · 무엇이 그런 기분을 느끼게 했나요?
          </QuestionSubTitle>
          <QuestionSubTitle>
            · 내일은 어떤 하루가 되었으면 좋겠나요?
          </QuestionSubTitle>
        </QuestionSubTitleWrap>
      </QuestionWrap>
      <TodayDiaryWrap>
        <TodayDiaryForm>
          <TodayDiaryTitle>오늘의 감정기록</TodayDiaryTitle>
          <TodayDiaryBox
            rows={4}
            placeholder="오늘 하루 있었던 일, 느낀 감정, 생각들을 자유롭게 적어보세요. 솔직한 마음이 가장 중요해요.."
          />
          <KeyWordBox>
            <KeyWordSelect>감정 키워드 선택</KeyWordSelect>
            <KeyWordItemWrap>
              <KeyWordItems>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>기쁨</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>슬픔</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>스트레스</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>만족</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>평온</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>불안</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>걱정</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>우울</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>화남</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>짜증</KeyWordItemsBtn>
                </KeyWordItemsLi>
                <KeyWordItemsLi>
                  <KeyWordItemsBtn>외로움</KeyWordItemsBtn>
                </KeyWordItemsLi>
              </KeyWordItems>
            </KeyWordItemWrap>
          </KeyWordBox>
          <CheckBox>
            <CheckBoxTitle>간단 감정 체크</CheckBoxTitle>
            <CheckBoxImojis>
              <CheckBoxImoji>
                <img src="./기쁨.svg" alt="기쁨" />
                <span className="label">기쁨</span>
              </CheckBoxImoji>
              <CheckBoxImoji>
                <img src="./슬픔.svg" alt="슬픔" />
                <span className="label">슬픔</span>
              </CheckBoxImoji>
              <CheckBoxImoji raise>
                <img src="./불안.svg" alt="슬픔" />
                <span className="label">불안</span>
              </CheckBoxImoji>
              <CheckBoxImoji>
                <img src="./분노.svg" alt="슬픔" />
                <span className="label">화남</span>
              </CheckBoxImoji>
              <CheckBoxImoji>
                <img src="./평온.svg" alt="슬픔" />
                <span className="label">평온</span>
              </CheckBoxImoji>
            </CheckBoxImojis>
          </CheckBox>
        </TodayDiaryForm>
      </TodayDiaryWrap>
      <TodayDiaryBtn>감정 기록 하기</TodayDiaryBtn>
    </ContainerMain>
  );
}

export default MoodieAdd;
