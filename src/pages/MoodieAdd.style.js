import styled from "@emotion/styled";
export const ConatinerAdd = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #f7ffed;
  // min-height: 100vh;
`;

export const Header = styled.div`
  height: 60px;
`;
export const TodayWrap = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 90px 0;
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
  margin-bottom: 17px;
`;
export const QuestionTitle = styled.div`
  position: absolute;
  display: inline-block;
  color: #374723;
  font-size: 16px;
  font-weight: 600;
  padding-top: 26px;
  left: 56px;
`;

export const QuestionSubTitleWrap = styled.ul`
  position: absolute;
  left: 36px;
  padding-top: 56px;
`;
export const QuestionSubTitle = styled.li`
  text-align: left;
  font-size: 14px;
  color: #374723;
  font-weight: 400;
`;
export const TodayDiaryWrap = styled.div`
  position: relative;
  background-color: #fff;
  width: 390px;
  height: 294px;
  border-radius: 15px;
  margin: 0 auto;
`;
export const TodayDiaryTitle = styled.div`
  position: absolute;
  left: 20px;
  padding-top: 25px;
  color: #374723;
  font-size: 16px;
  font-weight: 600;
`;
export const TodayDiaryForm = styled.form``;
export const TodayDiaryBox = styled.textarea`
  position: absolute;
  margin-top: 58px;
  left: 20px;
  width: 350px;
  height: 172px;
  border-radius: 15px;
  border: 1px solid #8dca41;
  padding: 15px 17px;
`;
export const TodayDiaryBtn = styled.button`
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
export const KeyWordBox = styled.div`
  background-color: #fff;
  width: 390px;
  height: 132px;
  margin: 0 auto;
  border-radius: 15px;
  margin-top: 15px;
  padding: 0 20px;
`;
export const KeyWordSelect = styled.div`
  /* text-align: left !important; */
  display: flex;
  color: #374723;
  font-size: 14px;
  font-weight: 600;
  padding-top: 21px;
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
  /* gap: 5px; */
`;

export const KeyWordItemsBtn = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: #ebffd3;
  border-radius: 20px;
  /* margin-right: 9px; */
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
export const CheckBoxImoji = styled.div`
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
