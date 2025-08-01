import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  CheckBox,
  CheckBoxImoji,
  CheckBoxImojis,
  CheckBoxTitle,
  EmotionKeywordPreview,
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

  const [diaryText, setDiaryText] = useState("");
  const [emotionKeyWord, setEmotionKeyWord] = useState([]);
  const keywords = [
    "기쁨",
    "슬픔",
    "스트레스",
    "만족",
    "평온",
    "불안",
    "걱정",
    "우울",
    "화남",
    "짜증",
    "외로움",
  ];
  const handleEmotionKeyWordClick = Keyword => {
    if (!emotionKeyWord.includes(Keyword)) {
      setEmotionKeyWord(Prev => [...Prev, Keyword]);
    }
  };

  const [imojiBt, setImojiBt] = useState(null);
  const imojis = [
    { label: "기쁨", src: "./기쁨.svg" },
    { label: "슬픔", src: "./슬픔.svg" },
    { label: "불안", src: "./불안.svg" },
    { label: "화남", src: "./분노.svg" },
    { label: "평온", src: "./평온.svg" },
  ];

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
            value={diaryText}
            onChange={e => setDiaryText(e.target.value)}
            rows={10}
            placeholder="오늘 하루 있었던 일, 느낀 감정, 생각들을 자유롭게 적어보세요. 솔직한 마음이 가장 중요해요.."
          />
          {emotionKeyWord.length > 0 && (
            <EmotionKeywordPreview>
              [감정 키워드] {emotionKeyWord.map(k => `#${k}`).join(" ")}
            </EmotionKeywordPreview>
          )}
          <KeyWordBox>
            <KeyWordSelect>감정 키워드 선택</KeyWordSelect>
            <KeyWordItemWrap>
              <KeyWordItems>
                {keywords.map(word => (
                  <KeyWordItemsLi key={word}>
                    <KeyWordItemsBtn
                      type="button"
                      onClick={() => handleEmotionKeyWordClick(word)}
                    >
                      {word}
                    </KeyWordItemsBtn>
                  </KeyWordItemsLi>
                ))}
              </KeyWordItems>
            </KeyWordItemWrap>
          </KeyWordBox>
          <CheckBox>
            <CheckBoxTitle>간단 감정 체크</CheckBoxTitle>
            <CheckBoxImojis>
              {imojis.map(imoji => (
                <CheckBoxImoji
                  type="button"
                  key={imoji.label}
                  onClick={() => setImojiBt(imoji.label)}
                  raise={setImojiBt === imoji.label}
                >
                  <img
                    src={imoji.src}
                    alt={imoji.label}
                    style={{ opacity: imojiBt === imoji.label ? 1 : 0.2 }}
                  />
                  <span className="label">{imoji.label}</span>
                </CheckBoxImoji>
              ))}
            </CheckBoxImojis>
          </CheckBox>
        </TodayDiaryForm>
      </TodayDiaryWrap>
      <TodayDiaryBtn>감정 기록 하기</TodayDiaryBtn>
    </ContainerMain>
  );
}

export default MoodieAdd;
