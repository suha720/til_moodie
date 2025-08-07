import React from "react";
import { Link } from "react-router-dom";
import { ContainerMain, Greeting, RecordButton } from "./Moodie.style";
import TmpForm from "../../components/forms/TmpForm";
import MainSummary from "../../components/forms/MainSummary";
import TmpLogo from "../../components/logo/TmpLogo";
import moment from "moment";
import { PulseLoader } from "react-spinners";
import useFakeLoading from "../../hooks/useFakeLoading";
import LoadingSpinner from "../../components/spinners/LoadingSpinner";

function Moodie({ moodList, isLoading }) {
  const today = moment().format("YYYY-MM-DD");
  const hasTodayRecord = moodList.some(mood => mood.date === today);
  const isFakeLoading = useFakeLoading(isLoading, 500);

  return (
    <>
      <TmpLogo></TmpLogo>

      {isFakeLoading ? (
        <ContainerMain style={{ textAlign: "center", paddingTop: "120px" }}>
          <LoadingSpinner />
        </ContainerMain>
      ) : (
        <ContainerMain>
          <Greeting>
            <h1>
              안녕하세요!
              <br />
              오늘 하루는 어떠셨나요?
            </h1>
            <p>무디와 함께 감정들을 기록하고 관리해 보아요.</p>
          </Greeting>

          <TmpForm moodList={moodList} isLoading={isLoading}></TmpForm>

          <MainSummary moodList={moodList} isLoading={isLoading}></MainSummary>

          <div style={{ width: "390px", margin: "32px auto" }}>
            <RecordButton>
              <Link to={hasTodayRecord ? "/today" : "/add"}>
                {hasTodayRecord
                  ? "오늘 일기를 확인하기"
                  : "오늘의 감정 기록하기"}
              </Link>
            </RecordButton>
          </div>
        </ContainerMain>
      )}
    </>
  );
}

export default Moodie;
