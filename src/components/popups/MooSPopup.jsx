import styled from "@emotion/styled";
import React from "react";

const SPopupontent = styled.div`
  background: linear-gradient(180deg, #58dbbd 0%, #83d266 100%);
  max-width: 440px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 30px;
  }
  P {
    font-size: 16px;
  }
  color: #fff;
  position: relative;
`;

const SPopupClose = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #fff;
`;

function MooSPopup() {
  return (
    <SPopupontent>
      <h2>
        오늘의 감정 기록을
        <br />
        이미 작성하셨습니다!
      </h2>
      <div>
        <p>
          감정을 기록하는 ‘무디’ 는 작성 후<br />
          수정이나 삭제가 불가능합니다.
        </p>
      </div>
      <SPopupClose>창 닫기</SPopupClose>{" "}
    </SPopupontent>
  );
}

export default MooSPopup;
