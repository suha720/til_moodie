import styled from "@emotion/styled";
import React from "react";

function MoodieAdd() {
  const ConatinerAdd = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #f7ffed;
    // min-height: 100vh;
  `;

  const Header = styled.div`
    height: 60px;
  `;
  const TodayWrap = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    margin: 90px 0;
  `;
  const TodayTitle = styled.h2`
    display: block;
    padding-bottom: 9px;
    color: #4e741d;
    font-size: 28px;
    font-weight: 800;
  `;
  const TodaySubTitle = styled.div`
    display: block;
    color: #374723;
    font-size: 15px;
    font-weight: 600;
  `;
  const QuestionWrap = styled.div`
    position: relative;
    background-color: #e7f9d0;
    width: 390px;
    height: 156px;
    margin: 0 auto;
    border-radius: 15px;
    margin-bottom: 17px;
  `;
  const QuestionTitle = styled.div`
    position: absolute;
    display: inline-block;
    color: #374723;
    font-size: 16px;
    font-weight: 600;
    padding-top: 26px;
    left: 56px;
  `;

  const QuestionSubTitleWrap = styled.ul`
    position: absolute;
    left: 36px;
    padding-top: 56px;
  `;
  const QuestionSubTitle = styled.li`
    text-align: left;
    font-size: 14px;
    color: #374723;
    font-weight: 400;
  `;
  const TodayDiaryWrap = styled.div`
    position: relative;
    background-color: #fff;
    width: 390px;
    height: 294px;
    border-radius: 15px;
    margin: 0 auto;
  `;
  const TodayDiaryTitle = styled.div`
    position: absolute;
    left: 20px;
    padding-top: 25px;
    color: #374723;
    font-size: 16px;
    font-weight: 600;
  `;
  const TodayDiaryForm = styled.form``;
  const TodayDiaryBox = styled.textarea`
    position: absolute;
    margin-top: 58px;
    left: 20px;
    width: 350px;
    height: 172px;
    border-radius: 15px;
    border: 1px solid #8dca41;
    padding: 15px 17px;
  `;
  const TodayDiaryBtn = styled.button`
    position: absolute;

    background: #bcf675;
    background: linear-gradient(
      90deg,
      rgba(188, 246, 117, 1) 0%,
      rgba(122, 184, 46, 1) 100%
    );
    padding: 10px 16px;
    border: none;
    border-radius: 40px;
    right: 20px;
    bottom: 15px;
  `;
  const KeyWordBox = styled.div`
    background-color: #fff;
    width: 390px;
    height: 132px;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 15px;
    padding: 0 20px;
  `;
  const KeyWordSelect = styled.div`
    /* text-align: left !important; */
    display: flex;
    color: #374723;
    font-size: 14px;
    font-weight: 600;
    padding-top: 21px;
    margin-bottom: 12px;
  `;

  const KeyWordItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const KeyWordItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
  `;
  const KeyWordItemsLi = styled.li`
    margin-right: 9px;
    margin-top: 4px;
    display: flex;
    /* gap: 5px; */
  `;

  const KeyWordItemsBtn = styled.button`
    border: none;
    padding: 5px 10px;
    background-color: #ebffd3;
    border-radius: 20px;
    /* margin-right: 9px; */
  `;

  return (
    <ConatinerAdd>
      <Header>헤더 로고</Header>
      <TodayWrap>
        <TodayTitle>2025년 7월 15일 화요일</TodayTitle>
        <TodaySubTitle>오늘 하루는 어떠셨나요?</TodaySubTitle>
      </TodayWrap>
      <QuestionWrap>
        <QuestionTitle>생각해 볼 질문들</QuestionTitle>
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
          <TodayDiaryTitle>오늘의 감정일기</TodayDiaryTitle>
          <TodayDiaryBox
            rows={4}
            placeholder="오늘 하루 있었던 일, 느낀 감정, 생각들을 자유롭게 적어보세요. 솔직한 마음이 가장 중요해요.."
          ></TodayDiaryBox>
          <TodayDiaryBtn>감정분석하기</TodayDiaryBtn>
        </TodayDiaryForm>
      </TodayDiaryWrap>
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
      <div>
        체크박스
        <div>간단 감정 체크</div>
        <div>
          체크 박스 이모지s
          <div>체크박스 이모지</div>
        </div>
      </div>
    </ConatinerAdd>
  );
}

export default MoodieAdd;
