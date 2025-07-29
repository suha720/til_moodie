import styled from "@emotion/styled";

// start 무디 카테고리 스타일 //

export const MoodieCategoryBtnWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;
export const MoodieCategoryMainBtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
`;
export const MoodieCategoryMainBtn = styled.button`
  white-space: nowrap;
  font-size: 20px;
  font-weight: 600;
  color: #6b9931;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 58px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
export const MoodieCategorySubBtnWrap = styled.div`
  display: flex;
  gap: 5px;
  margin: 0 auto;
  background-color: #8dca41;
  border-radius: 10px;
  padding: 5px;
  margin-top: 14px;
`;
export const MoodieCategorySubBtn = styled.button`
  color: #6b9931;
  font-size: 18px;
  font-weight: 600;
  width: 190px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
// end 무디 카테고리 스타일 //

export const RecordWeeklyWrap = styled.div`
  background: #f7ffed;
  background: linear-gradient(
    180deg,
    rgba(247, 255, 237, 1) 40%,
    rgba(208, 249, 157, 1) 100%
  );
  height: 100%;
  padding-bottom: 30px;
  margin-bottom: 38px;
`;
export const RecordWeeklyTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 28px;
  font-size: 28px;
  font-weight: 600;
  color: #314813;
`;

export const RecordWeeklyTextBox = styled.div`
  margin-top: 40px;
`;
export const RecordWeeklyText = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #314813;
  .label {
    font-weight: 600;
  }
`;
export const RecordWeeklySubText = styled.div`
  margin-top: 11px;
  font-size: 14px;
  font-weight: 400;
  color: #314813;
`;

export const WeeklyRecordBoxWrap = styled.div``;

export const WeeklyRecordBox = styled.div`
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  width: 390px;
  height: 100%;
  margin-top: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const RecordBox = styled.div`
  display: flex;
`;
export const RecordImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ffdb48;
  border-radius: 35px;
  width: 65px;
  height: 65px;
  padding: 11px;
  margin: 21px 15px;
`;

export const RecordImgBoxImg = styled.img`
  width: 43px;
`;

export const RecordTextBox = styled.div`
  width: 270px;
  margin-top: 16px;
  margin-bottom: 20px;
  margin-right: 20px;
`;
export const RecordTextBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RecordTextBoxTopEmotion = styled.div`
  font-size: 10px;
  color: #fff;
  background-color: #ffdc49;
  padding: 1px 8px;
  border-radius: 13px;
`;

export const RecordTextBoxTopDate = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #4e741d;
`;
export const RecordTextBoxBottom = styled.div`
  margin-top: 5px;
`;
export const RecordTextBoxBottomTitle = styled.div`
  font-size: 12px;
  text-align: left;
  font-weight: 600;
  color: #4e741d;
`;
export const RecordTextBoxBottomSubTitle = styled.div`
  margin-top: 3px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RecordScoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9.5px;
`;
export const RecordAllScore = styled.div`
  background-color: #e6ffc7;
  width: 237px;
  height: 7px;
  border-radius: 10px;
`;
export const RecordScore = styled.div`
  background-color: #95e333;
  width: 200px;
  height: 7px;
  border-radius: 10px;
`;
export const RecordScoreText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #4e741d;
`;
export const WeeklyScoreWrap = styled.div`
  margin: 30px auto;
  background-color: #fff;
  width: 390px;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding-bottom: 18px;
`;

export const WeeklyScoreTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #577c2a;
  padding-top: 34px;
  padding-bottom: 10px;
`;

export const WeeklyScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
  margin-bottom: 30px;
`;
export const WeeklyScoreLBox = styled.div``;
export const WeeklyScoreLNumber = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #0da183;
`;
export const WeeklyScoreLText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #577c2a;
`;

export const WeeklyScoreRBox = styled.div``;
export const WeeklyScoreRNumber = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #31a0b9;
`;
export const WeeklyScoreRText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #577c2a;
`;
export const WeeklyInsightBox = styled.div`
  margin: 0 auto;
  text-align: left;
  background-color: #e6ffc7;
  width: 360px;
  height: 100%;
  border-radius: 15px;
  padding: 20px;
`;
export const WeeklyInsightTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
export const WeeklyInsightSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const EmotionPatternBox = styled.div`
  margin: 0 auto 37px auto;
  background-color: #e6ffc7;
  width: 390px;
  height: 100%;
  border-radius: 15px;
  padding: 25px;
`;
export const EmotionPatternTitle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 18px;
`;
export const EmotionPatternTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.1;
`;
export const EmotionPatternLBox = styled.div`
  text-align: left;
`;
export const EmotionPatternLText = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
export const EmotionPatternRBox = styled.div`
  text-align: right;
`;
export const EmotionPatternRText = styled.div`
  font-size: 12px;
  font-weight: 400;
  .point {
    color: #720d0e;
    font-weight: 700;
  }
`;
