import styled from "@emotion/styled";
import React from "react";

function MoodieAdd() {
  const TodayWrap = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    margin-bottom: 57px;
    margin-top: 129px;
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
    margin-bottom: 28px;
  `;
  const QuestionTitle = styled.div`
    position: absolute;
    color: #374723;
    font-size: 16px;
    font-weight: 600;
    padding-top: 26px;
    left: 31px;
    img {
      margin-right: 8px;
      transform: translateY(2px);
    }
  `;

  const QuestionSubTitleWrap = styled.ul`
    position: absolute;
    left: 36px;
    padding-top: 56px;
    line-height: 2;
  `;
  const QuestionSubTitle = styled.li`
    text-align: left;
    font-size: 10px;
    color: #374723;
    font-weight: 400;
  `;
  const TodayDiaryWrap = styled.div`
    position: relative;
    background-color: #fff;
    width: 390px;
    height: 100;
    border-radius: 15px;
    margin: 0 auto;
  `;
  const TodayDiaryTitle = styled.div`
    position: absolute;
    left: 21px;
    padding-top: 43px;
    color: #4e741d;
    font-size: 16px;
    font-weight: 600;
  `;
  const TodayDiaryForm = styled.form``;
  const TodayDiaryBox = styled.textarea`
    position: absolute;
    margin-top: 74px;
    left: 20px;
    width: 350px;
    height: 172px;
    border-radius: 15px;
    border: 1px solid #8cca4130;
    padding: 15px 17px;
  `;

  const KeyWordBox = styled.div`
    margin: 0 auto;
    border-radius: 15px;
    padding: 0 20px;
  `;
  const KeyWordSelect = styled.div`
    /* text-align: left !important; */
    display: flex;
    color: #4e741d;
    font-size: 16px;
    font-weight: 600;
    padding-top: 267px;
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
  const CheckBox = styled.div``;
  const CheckBoxTitle = styled.div`
    display: flex;
    color: #4e741d;
    font-size: 16px;
    font-weight: 600;
    padding-top: 36px;
    padding-left: 21px;
    margin-bottom: 23px;
  `;
  const CheckBoxImojis = styled.div`
    display: flex;
    padding: 0 28px;
    gap: 27px;
  `;
  const CheckBoxImoji = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-bottom: 24px;
    .label {
      color: #374723;
      font-size: 14px;
      font-weight: 600;
    }
    transform: ${({ raise }) => (raise ? "translateY(-4px)" : "none")};
  `;
  const TodayDiaryBtn = styled.button`
    background: linear-gradient(
      90deg,
      rgba(188, 246, 117, 1) 0%,
      rgba(122, 184, 46, 1) 100%
    );
    padding: 18px 42px;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin-top: 28px;
    margin-bottom: 51px;
  `;
  return (
    <div>
      <TodayWrap>
        <TodayTitle>2025년 7월 15일 화요일</TodayTitle>
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
          ></TodayDiaryBox>
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
    </div>
  );
}

export default MoodieAdd;
