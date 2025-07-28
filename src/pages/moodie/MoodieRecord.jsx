import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";

function MoodieRecord() {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  const MoodieCategoryBtnWrap = styled.div`
    width: 390px;
    margin: 0 auto;
  `;
  const MoodieCategoryMainBtnWrap = styled.div`
    display: flex;
    gap: 10px;
    margin: 0 auto;
  `;
  const MoodieCategoryMainBtn = styled.button`
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
  const MoodieCategorySubBtnWrap = styled.div`
    display: flex;
    gap: 5px;
    margin: 0 auto;
    background-color: #8dca41;
    border-radius: 10px;
    padding: 5px;
    margin-top: 14px;
  `;
  const MoodieCategorySubBtn = styled.button`
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

  const RecordWeeklyWrap = styled.div`
    background: #f7ffed;
    background: linear-gradient(
      180deg,
      rgba(247, 255, 237, 1) 40%,
      rgba(208, 249, 157, 1) 100%
    );
    height: 100%;
    padding-bottom: 44px;
    margin-bottom: 38px;
  `;
  const RecordWeeklyTitle = styled.h2`
    margin-top: 70px;
    margin-bottom: 28px;
    font-size: 28px;
    font-weight: 600;
    color: #314813;
  `;
  const RecordWeeklyImg = styled.img`
    width: 390px;
    margin: 0 auto;
  `;
  const RecordWeeklyDateWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 18px;
  `;
  const RecordWeeklyDate = styled.div`
    transform: translateY(-78px);
    text-align: center;
    color: rgba(78, 116, 29, 0.1);
    font-size: 30px;
    font-weight: 700;
  `;
  const RecordWeeklyTextBox = styled.div``;
  const RecordWeeklyText = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #314813;
    .label {
      font-weight: 600;
    }
  `;
  const RecordWeeklySubText = styled.div`
    margin-top: 11px;
    font-size: 14px;
    font-weight: 400;
    color: #314813;
  `;

  const WeeklyRecordBoxWrap = styled.div``;

  const WeeklyRecordBox = styled.div`
    margin: 0 auto;
    background-color: #fff;
    border-radius: 15px;
    width: 390px;
    height: 100%;
    margin-top: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `;

  const RecordBox = styled.div`
    display: flex;
  `;
  const RecordImgBox = styled.div`
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

  const RecordImgBoxImg = styled.img`
    width: 43px;
  `;

  const RecordTextBox = styled.div`
    width: 270px;
    margin-top: 16px;
    margin-bottom: 20px;
    margin-right: 20px;
  `;
  const RecordTextBoxTop = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const RecordTextBoxTopEmotion = styled.div`
    font-size: 10px;
    color: #fff;
    background-color: #ffdc49;
    padding: 1px 8px;
    border-radius: 13px;
  `;

  const RecordTextBoxTopDate = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: #4e741d;
  `;
  const RecordTextBoxBottom = styled.div`
    margin-top: 5px;
  `;
  const RecordTextBoxBottomTitle = styled.div`
    font-size: 12px;
    text-align: left;
    font-weight: 600;
    color: #4e741d;
  `;
  const RecordTextBoxBottomSubTitle = styled.div`
    margin-top: 3px;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
  const RecordScoreBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 9.5px;
  `;
  const RecordAllScore = styled.div`
    background-color: #e6ffc7;
    width: 237px;
    height: 7px;
    border-radius: 10px;
  `;
  const RecordScore = styled.div`
    background-color: #95e333;
    width: 200px;
    height: 7px;
    border-radius: 10px;
  `;
  const RecordScoreText = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #4e741d;
  `;
  const WeeklyScoreWrap = styled.div`
    margin: 30px auto;
    background-color: #fff;
    width: 390px;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `;

  const WeeklyScoreTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #577c2a;
    padding-top: 34px;
    padding-bottom: 24px;
  `;

  const WeeklyScoreBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  `;
  const WeeklyScoreLBox = styled.div``;
  const WeeklyScoreRBox = styled.div``;

  return (
    <ContainerMain>
      <TmpLogo></TmpLogo>
      <MoodieCategoryBtnWrap>
        <MoodieCategoryMainBtnWrap>
          <MoodieCategoryMainBtn>작성하기</MoodieCategoryMainBtn>
          <MoodieCategoryMainBtn>기록 보기</MoodieCategoryMainBtn>
        </MoodieCategoryMainBtnWrap>
        <MoodieCategorySubBtnWrap>
          <MoodieCategorySubBtn>주간 기록</MoodieCategorySubBtn>
          <MoodieCategorySubBtn>전체 기록</MoodieCategorySubBtn>
        </MoodieCategorySubBtnWrap>
      </MoodieCategoryBtnWrap>
      <RecordWeeklyWrap>
        <RecordWeeklyTitle>7월 4주차 기록</RecordWeeklyTitle>
        <RecordWeeklyImg src="./weeklychart.svg" alt="주간 캘린더" />
        <RecordWeeklyDateWrap>
          <RecordWeeklyDate>21</RecordWeeklyDate>
          <RecordWeeklyDate>22</RecordWeeklyDate>
          <RecordWeeklyDate>23</RecordWeeklyDate>
          <RecordWeeklyDate>24</RecordWeeklyDate>
          <RecordWeeklyDate>25</RecordWeeklyDate>
          <RecordWeeklyDate>26</RecordWeeklyDate>
          <RecordWeeklyDate>27</RecordWeeklyDate>
        </RecordWeeklyDateWrap>
        <RecordWeeklyTextBox>
          <RecordWeeklyText>
            /D/7개 중{" "}
            <span className="label">3개의 기록을 작성완료 했어요.</span>
          </RecordWeeklyText>
          <RecordWeeklySubText>
            /D/차근차근 감정을 기록하며 자신을 돌보고 있어요!
            <br />
            꾸준히 작성하여 큰 변화를 만들어 보아요😊
          </RecordWeeklySubText>
        </RecordWeeklyTextBox>
      </RecordWeeklyWrap>
      <WeeklyRecordBoxWrap>
        <WeeklyRecordBox>
          <RecordBox>
            <RecordImgBox>
              <RecordImgBoxImg src="./기쁨.svg" alt="기쁨" />
            </RecordImgBox>
            <RecordTextBox>
              <RecordTextBoxTop>
                <RecordTextBoxTopEmotion>기쁨</RecordTextBoxTopEmotion>
                <RecordTextBoxTopDate>2025년 7월 22일</RecordTextBoxTopDate>
              </RecordTextBoxTop>
              <RecordTextBoxBottom>
                <RecordTextBoxBottomTitle>
                  /D/기분좋은 하루였네요!
                </RecordTextBoxBottomTitle>
                <RecordTextBoxBottomSubTitle>
                  /D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다
                </RecordTextBoxBottomSubTitle>
              </RecordTextBoxBottom>
              <RecordScoreBox>
                <RecordAllScore>
                  <RecordScore />
                </RecordAllScore>
                <RecordScoreText>85점</RecordScoreText>
              </RecordScoreBox>
            </RecordTextBox>
          </RecordBox>
        </WeeklyRecordBox>
        <WeeklyRecordBox>
          <RecordBox>
            <RecordImgBox>
              <RecordImgBoxImg src="./기쁨.svg" alt="기쁨" />
            </RecordImgBox>
            <RecordTextBox>
              <RecordTextBoxTop>
                <RecordTextBoxTopEmotion>기쁨</RecordTextBoxTopEmotion>
                <RecordTextBoxTopDate>2025년 7월 22일</RecordTextBoxTopDate>
              </RecordTextBoxTop>
              <RecordTextBoxBottom>
                <RecordTextBoxBottomTitle>
                  /D/기분좋은 하루였네요!
                </RecordTextBoxBottomTitle>
                <RecordTextBoxBottomSubTitle>
                  /D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다
                </RecordTextBoxBottomSubTitle>
              </RecordTextBoxBottom>
              <RecordScoreBox>
                <RecordAllScore>
                  <RecordScore />
                </RecordAllScore>
                <RecordScoreText>85점</RecordScoreText>
              </RecordScoreBox>
            </RecordTextBox>
          </RecordBox>
        </WeeklyRecordBox>
        <WeeklyRecordBox>
          <RecordBox>
            <RecordImgBox>
              <RecordImgBoxImg src="./기쁨.svg" alt="기쁨" />
            </RecordImgBox>
            <RecordTextBox>
              <RecordTextBoxTop>
                <RecordTextBoxTopEmotion>기쁨</RecordTextBoxTopEmotion>
                <RecordTextBoxTopDate>2025년 7월 22일</RecordTextBoxTopDate>
              </RecordTextBoxTop>
              <RecordTextBoxBottom>
                <RecordTextBoxBottomTitle>
                  /D/기분좋은 하루였네요!
                </RecordTextBoxBottomTitle>
                <RecordTextBoxBottomSubTitle>
                  /D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다
                </RecordTextBoxBottomSubTitle>
              </RecordTextBoxBottom>
              <RecordScoreBox>
                <RecordAllScore>
                  <RecordScore />
                </RecordAllScore>
                <RecordScoreText>85점</RecordScoreText>
              </RecordScoreBox>
            </RecordTextBox>
          </RecordBox>
        </WeeklyRecordBox>
      </WeeklyRecordBoxWrap>
      <WeeklyScoreWrap>
        <WeeklyScoreTitle>7월 4주차 기록 요약</WeeklyScoreTitle>
        <WeeklyScoreBox>
          <WeeklyScoreLBox>
            <div>3</div>
            <div>총 감정 기록 수</div>
          </WeeklyScoreLBox>
          <WeeklyScoreRBox>
            <div>55</div>
            <div>평균 감정 점수</div>
          </WeeklyScoreRBox>
        </WeeklyScoreBox>
        <div>
          이번주 인사이트 박스
          <div>인사이트 타이틀</div>
          <div>인사이트 서브</div>
        </div>
      </WeeklyScoreWrap>
    </ContainerMain>
  );
}

export default MoodieRecord;
