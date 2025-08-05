import styled from "@emotion/styled";

export const TodayWrap = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin-bottom: 57px;
  margin-top: 80px;
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
  background-color: #e7f9d0;
  width: 390px;
  height: 100%;
  margin: 0 auto;
  border-radius: 15px;
  margin-bottom: 28px;
  text-align: left;
  padding: 25px 30px;
`;
export const QuestionTitle = styled.div`
  color: #374723;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 12px;
  left: 31px;
  img {
    margin-right: 8px;
    transform: translateY(2px);
  }
`;

export const QuestionSubTitleWrap = styled.ul`
  line-height: 1.6;
`;
export const QuestionSubTitle = styled.li`
  text-align: left;
  font-size: 12px;
  color: #374723;
  font-weight: 400;
`;
export const TodayDiaryWrap = styled.div`
  background-color: #fff;
  width: 390px;
  height: 100%;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding-top: 43px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TodayDiaryTitle = styled.div`
  text-align: left;
  color: #4e741d;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 12px;
`;
export const TodayDiaryForm = styled.form``;
export const TodayDiaryBox = styled.textarea`
  width: 350px;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #8cca4130;
  padding: 15px 17px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;
export const EmotionKeywordPreview = styled.div`
  text-align: left;
  padding: 5px 15px;
  background-color: #fff;
  border: 1px solid #8cca4130;
  border-top: none;
  transform: translateY(-22px);
  font-size: 12px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.05);
`;

export const KeyWordBox = styled.div`
  margin: 0 auto;
  border-radius: 15px;
`;
export const KeyWordSelect = styled.div`
  display: flex;
  color: #4e741d;
  font-size: 16px;
  font-weight: 600;
  padding-top: 12px;
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
  padding-top: 32px;
  margin-bottom: 18px;
`;
export const CheckBoxImojis = styled.div`
  display: flex;
  gap: 31px;
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

export const KeywordLabel = styled.label`
  // display: inline-block;
  // margin: 4px;
  cursor: pointer;

  // margin-right: 9px;
  // margin-top: 4px;
  // display: flex;

  font-size: 13px;
  .keyword {
    border: none;
    padding: 5px 10px;
    background-color: #ebffd3;
    border-radius: 20px;
    cursor: pointer;
  }

  .keyword.active {
    background-color: #58dbbd;
    color: white;
    border-color: #58dbbd;
  }
`;

export const KeywordLabelWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 12px;
`;

export const CheckBoxImojiRadio = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 24px;
  background-color: #fff;
  border: none;
  color: #374723;
  font-size: 14px;
  font-weight: 600;
  transform: ${({ raise }) => (raise ? "translateY(-4px)" : "none")};
  cursor: pointer;
`;
