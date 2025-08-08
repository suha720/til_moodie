import styled from "@emotion/styled";

export const AllRecordCalendarWrap = styled.div`
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
export const AllRecordCalendarTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  margin-top: 90px;
  margin-bottom: 12px;
`;

export const AllRecordCalendarTextWrap = styled.div`
  margin-top: 42px;
`;
export const AllRecordCalendarText = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #314813;
  .text {
    font-weight: 600;
  }
`;
export const AllRecordCalendarSubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 11px 50px 20px 50px;
  color: #314813;
  word-break: keep-all;
  overflow-wrap: break-word;
  padding: 0 20px;
`;

export const MonthlyEmotionReport = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 390px;
  height: 100%;
  margin: 0 auto 20px auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 32px 15px 18px 15px;
`;
export const MonthlyEmotionReportTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #577c2a;
  padding-bottom: 20px;
`;
export const EmotionStatsInfowrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
`;

export const EmotionStatsLInfo = styled.div`
  transform: translateY(-16px);
`;
export const EmotionStatsLInfoScore = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: #31a0b9;
`;
export const EmotionStatsLInfoText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #577c2a;
`;
export const EmotionStatsRInfo = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
`;

export const EmotionStatsLSubInfo = styled.div`
  line-height: 2.5;
  text-align: right;
  margin-right: 10px;
`;
export const EmotionStatsEmotionScore = styled.div`
  display: flex;
  .img {
    width: 15px;
    margin-right: 8px;
  }
  .imgp {
    width: 18px;
    margin-right: 5px;
  }
  .scoretext {
    font-size: 12px;
    font-weight: 600;
    color: #577c2a;
  }
`;
export const EmotionStatsRSubInfo = styled.div`
  line-height: 2.5;
  text-align: right;
`;

export const MonthlyInsightWrap = styled.div`
  background-color: #e6ffc7;
  width: 360px;
  height: 100%;
  border-radius: 15px;
  padding: 20px;
  text-align: left;
`;
export const MonthlyInsightTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #314813;
`;
export const MonthlyInsightSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 7px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
