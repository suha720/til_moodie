import styled from "@emotion/styled";
import React, { useState } from "react";

const MPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MPopupContent = styled.div`
  text-align: center;
  max-width: 800px;
  min-width: 400px;
  min-height: 400px;
  /* background-color: #fff; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MPopupClose = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #343434;
  border-radius: 8px;
  margin-top: 16px;
  padding: 8px;
`;

function MooPopup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* 팝업창 테스트용 */}
      {isVisible && (
        <MPopup>
          <MPopupContent>
            <h2>
              ✍ <br /> 기록을 시작하기전에 <br /> 잠시 읽어주세요.
            </h2>
            <div>
              <div>
                {" "}
                감정을 기록하는 ‘무디’ 는 작성 후<br /> 수정이나 삭제가
                불가능합니다.
              </div>
              <div>
                {" "}
                감정을 있는 그대로 남기고, 나중에 되돌아봤을 때<br /> 진짜 나를
                마주할수 있도록 하기 위함입니다.
              </div>
              <div>
                {" "}
                좋은 기록만 남기기보단, <br />
                모든 감정을 소중히 여겨보세요.
              </div>
              <div> 그럼, 기록하러 가볼까요?</div>
            </div>
            <MPopupClose onClick={handleClick}>기록 시작하기</MPopupClose>
          </MPopupContent>
        </MPopup>
      )}
    </>
  );
}

export default MooPopup;
