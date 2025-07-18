import styled from "@emotion/styled";
import React from "react";

function MoodieAdd() {
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

  return (
    <div>
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
          <QuestionSubTitle>· 퀘스쳔 서브 타이틀</QuestionSubTitle>
          <QuestionSubTitle>· 퀘스쳔 서브 타이틀</QuestionSubTitle>
          <QuestionSubTitle>· 퀘스쳔 서브 타이틀</QuestionSubTitle>
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
      <div>
        키워드 박스
        <div>감정 키워드 선택</div>
        <div>키워드 아이템</div>
      </div>
      <div>
        체크박스
        <div>간단 감정 체크</div>
        <div>
          체크 박스 이모지s
          <div>체크박스 이모지</div>
        </div>
      </div>
    </div>
  );
}

export default MoodieAdd;
