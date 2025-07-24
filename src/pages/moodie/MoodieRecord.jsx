import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

function MoodieRecord() {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  const MoodiLogoBtn = styled.a`
    display: flex;
    left: 0;
    width: 390px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 32px;
  `;

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

  return (
    <div>
      <MoodiLogoBtn onClick={handleClickHome}>로고자리</MoodiLogoBtn>
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
    </div>
  );
}

export default MoodieRecord;
