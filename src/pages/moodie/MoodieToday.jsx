import React, { useEffect, useState } from "react";
import {
  DetailDiaryBntData,
  DetailDiaryBntWrap,
  DetailDiaryData,
  DetailDiaryDataWrap,
  DetailDiaryDay,
  DetailDiaryInsightBox,
  DetailDiaryInsightSubTitle,
  DetailDiaryInsightSubTitleText,
  DetailDiaryInsightTitle,
  DetailDiaryInsightWrap,
  WeeklyBtn,
} from "./MoodieDetail.style";
import {
  AiTipSubTitle,
  AiTipTitle,
  AiTipWrap,
  TodaySaveEmotionImg,
  TodaySaveEmotionSubTitle,
  TodaySaveEmotionTextBox,
  TodaySaveEmotionTitle,
  TodaySaveEmotionWrap,
  TodaySaveSubTitle,
  TodaySaveTitle,
  TodaySaveWrap,
} from "./MoodieToday.style";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import { Link } from "react-router-dom";
import moment from "moment";
import { ResponsivePie } from "@nivo/pie";

function MoodieToday({ moodList }) {
  const [hasTodayDiary, setHasTodayDiary] = useState(false);
  const today = moment().format("YYYY-MM-DD");
  const todayDiary = moodList.find(item => item.date === today);
  const todayImoji = todayDiary?.imoji;

  useEffect(() => {
    const today = moment().format("YYYY-MM-DD");
    const found = moodList.find(item => item.date === today);
    setHasTodayDiary(!!found);
  }, [moodList]);

  const getWeekInfo = () => {
    const today = moment();

    const year = today.year();
    const month = today.month() + 1; // moment는 0부터 시작하므로 +1 필요
    const date = today.date();
    const week = Math.ceil(date / 7);
    const day = today.day();
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const dayName = dayNames[day];

    return { year, month, date, dayName };
  };
  const { year, month, date, dayName } = getWeekInfo();

  const data = [
    { id: "기쁨", label: "기쁨", value: todayDiary?.joy, color: "#FFD43B" },
    { id: "슬픔", label: "슬픔", value: todayDiary?.sadness, color: "#527FB3" },
    { id: "분노", label: "분노", value: todayDiary?.anger, color: "#EF5350" },
    { id: "불안", label: "불안", value: todayDiary?.anxiety, color: "#A29BFE" },
    {
      id: "평온",
      label: "평온",
      value: todayDiary?.calmness,
      color: "#A5D6A7",
    },
  ];

  return (
    <ContainerMain>
      <TmpLogo />
      <TodaySaveWrap>
        <TodaySaveTitle>
          {hasTodayDiary
            ? "오늘의 감정기록을 저장 했어요!"
            : "오늘 작성된 일기가 없습니다."}
        </TodaySaveTitle>
        <TodaySaveSubTitle>
          앞으로도 꾸준히 감정 기록을 해보아요.
        </TodaySaveSubTitle>
      </TodaySaveWrap>
      <TodaySaveEmotionWrap>
        <TodaySaveEmotionImg src={`/${todayImoji}.svg`} />
        <TodaySaveEmotionTextBox>
          <TodaySaveEmotionTitle>
            {todayDiary?.title[2] || "오늘 작성된 일기가 없습니다."}
          </TodaySaveEmotionTitle>
          <TodaySaveEmotionSubTitle>
            {todayDiary?.message[2] || "오늘 작성된 일기가 없습니다."}
          </TodaySaveEmotionSubTitle>
        </TodaySaveEmotionTextBox>
      </TodaySaveEmotionWrap>
      <DetailDiaryDataWrap>
        <DetailDiaryDay>
          {moment().format("YYYY년 MM월 DD일 dd요일")}
        </DetailDiaryDay>
        <hr
          style={{
            border: "none",
            height: "0.5px",
            backgroundColor: "rgba(78, 116, 29, 0.5)",
            margin: "0px 23px",
          }}
        />
        <DetailDiaryData>
          {todayDiary?.content || "오늘 작성된 일기가 없습니다."}
        </DetailDiaryData>
        <DetailDiaryBntWrap>
          {todayDiary?.checkboxs?.map((item, index) => (
            <DetailDiaryBntData key={index}>{item}</DetailDiaryBntData>
          ))}
        </DetailDiaryBntWrap>
      </DetailDiaryDataWrap>
      <DetailDiaryInsightWrap>
        <DetailDiaryInsightTitle>
          AI 인사이트 한 줄 요약
        </DetailDiaryInsightTitle>
        <DetailDiaryInsightBox>
          <DetailDiaryInsightSubTitle>
            {todayDiary?.title[0] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitle>
          <DetailDiaryInsightSubTitleText>
            {todayDiary?.message[0] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitleText>
        </DetailDiaryInsightBox>
      </DetailDiaryInsightWrap>
      {/* <AiTipWrap>
        <AiTipTitle>
          <img className="img" src="./tipicon.svg" alt="팁" />
          당신에게 딱 맞는 팁
        </AiTipTitle>
        <AiTipSubTitle>
          /D/몸이 뻐근하다면 스트레칭이나 폼롤러로 풀어보세요. 개운한 기분은
          좋은 신호니까 그 감각을 기억해두면 운동 습관에 도움이 돼요. 꾸준히
          하고 싶다면 작게 루틴을 정해보는 것도 좋아요. 운동 후엔 단백질 식사 꼭
          챙기고요. 이번 주 쉬고 싶다면 가볍게 걷기나 요가처럼 부담 없는 활동도
          괜찮아요.
        </AiTipSubTitle>
      </AiTipWrap> */}
      <div
        style={{
          width: 390,
          height: 390,
          margin: "32px auto",
          padding: 20,
          background: "white",
          borderRadius: 15,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        <AiTipTitle>오늘의 감정분포</AiTipTitle>
        <ResponsivePie
          data={data}
          colors={{ datum: "data.color" }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 60,
              itemHeight: 18,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
      <WeeklyBtn>
        <Link to={"/record"}>작성 기록 보러가기</Link>
      </WeeklyBtn>
    </ContainerMain>
  );
}

export default MoodieToday;
