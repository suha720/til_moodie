import React from "react";
import { PulseLoader } from "react-spinners";
import styled from "@emotion/styled";

const SpinnerWrapper = styled.div`
  /* text-align: center;
  padding-top: 120px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const SpinnerMessage = styled.p`
  margin-top: 20px;
  color: #999;
`;

const LoadingSpinner = ({ message = "데이터를 불러오는 중..." }) => {
  return (
    <SpinnerWrapper>
      <PulseLoader color="#58dbbd" size={20} />
      <SpinnerMessage>{message}</SpinnerMessage>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
