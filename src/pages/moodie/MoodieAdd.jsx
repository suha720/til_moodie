import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  CheckBox,
  CheckBoxImoji,
  CheckBoxImojiRadio,
  CheckBoxImojis,
  CheckBoxTitle,
  EmotionKeywordPreview,
  KeyWordBox,
  KeyWordItems,
  KeyWordItemsBtn,
  KeyWordItemsLi,
  KeyWordItemWrap,
  KeywordLabel,
  KeywordLabelWrap,
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
import { useNavigate } from "react-router-dom";

function MoodieAdd({ mood, handleAddChange, handleSubmitTest }) {
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
    setEmotionKeyWord(
      prev =>
        prev.includes(Keyword)
          ? prev.filter(k => k !== Keyword) // 제거
          : [...prev, Keyword], // 추가
    );
  };

  const [imojiBt, setImojiBt] = useState(null);
  const imojis = [
    { label: "기쁨", src: "./기쁨.svg" },
    { label: "슬픔", src: "./슬픔.svg" },
    { label: "불안", src: "./불안.svg" },
    { label: "화남", src: "./분노.svg" },
    { label: "평온", src: "./평온.svg" },
  ];

  // start 체크박스용 체크용
  // 일기 작성하면 친절하게 메인 페이지로 이동시키기
  const navigate = useNavigate();

  // OpenAI 에서 분석한 내용 출력 state
  const [analysis, setAnalysis] = useState("");

  // 분석하는 비동기로 진행이 됨. 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    // 폼의 버튼 눌렀을때, 새로고침 방지하기
    e.preventDefault();
    // 일기 전체 목록 갱신하기
    handleSubmitTest();
    // 메인 페이지로 이동하기
    navigate("/");
  };
  // end
  const questions = [
    "· 오늘 가장 기억에 남는 순간은 무엇인가요?",
    "· 어떤 감정을 가장 많이 느꼈나요?",
    "· 무엇이 그런 기분을 느끼게 했나요?",
    "· 내일은 어떤 하루가 되었으면 좋겠나요?",
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
          {questions.map((question, index) => (
            <QuestionSubTitle key={index}>{question}</QuestionSubTitle>
          ))}
        </QuestionSubTitleWrap>
      </QuestionWrap>
      <TodayDiaryWrap>
        <TodayDiaryForm onSubmit={handleSubmit}>
          <TodayDiaryTitle>오늘의 감정기록</TodayDiaryTitle>
          <TodayDiaryBox
            name="content"
            value={mood.content}
            onChange={handleAddChange}
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
              {/* 임시 체크 아닌 버튼 시작 */}
              {/* <KeyWordItems>
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
              </KeyWordItems> */}
              {/* 임시 체크 아닌 버튼 끝 */}
              <KeywordLabelWrap>
                {keywords.map(keyword => (
                  <KeywordLabel key={keyword}>
                    <input
                      name="checkboxs"
                      type="checkbox"
                      value={keyword}
                      checked={mood.checkboxs.includes(keyword)}
                      onChange={handleAddChange}
                      hidden
                      onClick={() => handleEmotionKeyWordClick(keyword)}
                    />
                    <span
                      className={`keyword ${mood.checkboxs.includes(keyword) ? "active" : ""}`}
                    >
                      {keyword}
                    </span>{" "}
                  </KeywordLabel>
                ))}
              </KeywordLabelWrap>
            </KeyWordItemWrap>
          </KeyWordBox>
          <CheckBox>
            <CheckBoxTitle>간단 감정 체크</CheckBoxTitle>
            {/* <CheckBoxImojis>
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
            </CheckBoxImojis> */}
            <CheckBoxImojis style={{ justifyContent: "space-between" }}>
              {imojis.map((imoji, index) => (
                <div key={index}>
                  <CheckBoxImojiRadio raise={mood.imoji === imoji.label}>
                    <input
                      type="radio"
                      name="imoji"
                      value={imoji.label}
                      checked={mood.imoji === imoji.label}
                      onChange={handleAddChange}
                      hidden // 눈에 안 보이게 숨김 처리
                    />
                    <img
                      src={imoji.src}
                      alt={imoji.label}
                      style={{
                        width: imoji.label === "불안" ? "54px" : "40px",
                        height: imoji.label === "불안" ? "40px" : "40px",
                        opacity: mood.imoji === imoji.label ? 1 : 0.4,
                        transition: "opacity 0.2s",
                        cursor: "pointer", // 클릭 가능하다는 시각적 피드백
                      }}
                    />
                    <p>{imoji.label}</p>
                  </CheckBoxImojiRadio>
                </div>
              ))}
            </CheckBoxImojis>
          </CheckBox>
          <TodayDiaryBtn type="submit">감정 기록 하기</TodayDiaryBtn>
        </TodayDiaryForm>
      </TodayDiaryWrap>
      {/* <TodayDiaryBtn>감정 기록 하기</TodayDiaryBtn> */}
    </ContainerMain>
  );
}

export default MoodieAdd;
