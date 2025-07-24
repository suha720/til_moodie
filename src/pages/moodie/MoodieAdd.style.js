import styled from "@emotion/styled";

export const TodayWrap = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin-bottom: 57px;
  margin-top: 129px;
`;
export const TodayTitle = styled.h2`
  display: block;
  padding-bottom: 9px;
  color: #4e741d;
  font-size: 28px;
  font-weight: 800;
`;
export const TodaySubTitle = styled.div`
  display: block;
  color: #374723;
  font-size: 15px;
  font-weight: 600;
`;
export const QuestionWrap = styled.div`
  position: relative;
  background-color: #e7f9d0;
  width: 390px;
  height: 156px;
  margin: 0 auto;
  border-radius: 15px;
  margin-bottom: 28px;
`;
export const QuestionTitle = styled.div`
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

export const QuestionSubTitleWrap = styled.ul`
  position: absolute;
  left: 36px;
  padding-top: 56px;
  line-height: 2;
`;
export const QuestionSubTitle = styled.li`
  text-align: left;
  font-size: 10px;
  color: #374723;
  font-weight: 400;
`;
export const TodayDiaryWrap = styled.div`
  position: relative;
  background-color: #fff;
  width: 390px;
  height: 100;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;
export const TodayDiaryTitle = styled.div`
  position: absolute;
  left: 21px;
  padding-top: 43px;
  color: #4e741d;
  font-size: 16px;
  font-weight: 600;
`;
export const TodayDiaryForm = styled.form``;
export const TodayDiaryBox = styled.textarea`
  position: absolute;
  margin-top: 74px;
  left: 20px;
  width: 350px;
  height: 172px;
  border-radius: 15px;
  border: 1px solid #8cca4130;
  padding: 15px 17px;
`;

export const KeyWordBox = styled.div`
  margin: 0 auto;
  border-radius: 15px;
  padding: 0 20px;
`;
export const KeyWordSelect = styled.div`
  display: flex;
  color: #4e741d;
  font-size: 16px;
  font-weight: 600;
  padding-top: 267px;
  margin-bottom: 12px;
`;

export const KeyWordItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const KeyWordItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;
export const KeyWordItemsLi = styled.li`
  margin-right: 9px;
  margin-top: 4px;
  display: flex;
`;

export const KeyWordItemsBtn = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: #ebffd3;
  border-radius: 20px;
  cursor: pointer;
`;
export const CheckBox = styled.div``;
export const CheckBoxTitle = styled.div`
  display: flex;
  color: #4e741d;
  font-size: 16px;
  font-weight: 600;
  padding-top: 36px;
  padding-left: 21px;
  margin-bottom: 23px;
`;
export const CheckBoxImojis = styled.div`
  display: flex;
  padding: 0 28px;
  gap: 27px;
`;
export const CheckBoxImoji = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 24px;
  background-color: #fff;
  border: none;
  .label {
    color: #374723;
    font-size: 14px;
    font-weight: 600;
  }
  transform: ${({ raise }) => (raise ? "translateY(-4px)" : "none")};
  cursor: pointer;
`;
export const TodayDiaryBtn = styled.button`
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
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;
