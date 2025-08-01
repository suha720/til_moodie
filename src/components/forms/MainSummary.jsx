import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListWrapper = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  //   gap: 16px;
  //   width: 360px;
  //   margin: 16px auto;
  //   padding: 16px;
  max-width: 390px;
  margin: 0px auto;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #4e741d;
`;

const SeeAll = styled.span`
  a {
    font-size: 12px;
    font-weight: 600;
    color: #4e741d;
  }

  cursor: pointer;
  /* &:hover {
    text-decoration: underline;
  } */
`;

const EntryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #8dca4250;
  /* border-radius: 12px; */
  padding: 6px 10px;
  background-color: #fff;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */
`;

const DayStyle = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #4e741d;
`;

const EmotionStyle = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  flex-shrink: 0;
  /* background-color: #ffdc49; */
  padding: 1px 8px;
  border-radius: 10px;
  transform: translateY(1px);
`;

const TextStyle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #4e741d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px; /* 고정 너비 */
  flex-shrink: 0;
`;

const SubTextStyle = styled.div`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

const emotionColors = {
  기쁨: "#FFD43B",
  슬픔: "#527FB3",
  분노: "#EF5350",
  불안: "#A29BFE",
  차분: "#A5D6A7",
  none: "#E0E0E0", // 감정 데이터가 없을 경우
};

function MainSummary() {
  // js
  const [data, setData] = useState([]);

  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0(일) ~ 6(토)
  const diffToMonday = (dayOfWeek + 6) % 7; // 월요일까지 며칠 전인지

  const monday = new Date(today);
  monday.setDate(today.getDate() - diffToMonday); // 이번주 월요일
  monday.setHours(0, 0, 0, 0); // 시간 초기화

  // 이번 주 일요일 (끝)
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999); // 하루의 끝

  const getData = async () => {
    try {
      const res = await fetch("/EmotionMock.json");
      const result = await res.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getDominantEmotion = entry => {
    const { joy, sadness, anger, anxiety, calmness } = entry;
    const emotions = {
      기쁨: joy,
      슬픔: sadness,
      분노: anger,
      불안: anxiety,
      차분: calmness,
    };
    return Object.entries(emotions).sort((a, b) => b[1] - a[1])[0][0];
  };

  // 이번 주 요일만 필터링 + 요일 중복 제거
  const filteredData = data.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= monday && entryDate <= today;
  });

  const renderedDays = new Set();

  // 감정 기록이 이번 주 안에 있는 것만 필터링
  const weeklyData = data.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= monday && entryDate <= sunday;
  });

  // jsx
  return (
    <ListWrapper>
      <CardHeader>
        <CardTitle>나의 감정 기록</CardTitle>
        <SeeAll>
          <Link to={"/record"}>더보기</Link>
        </SeeAll>
      </CardHeader>

      {weeklyData.map((entry, index) => {
        const date = new Date(entry.date);
        const dayIndex = (date.getDay() + 6) % 7; // 월요일을 기준으로 0
        const day = weekDays[dayIndex];
        const dominant = getDominantEmotion(entry);
        return (
          <EntryBox key={entry.date}>
            <DayStyle>{day}</DayStyle>
            <EmotionStyle style={{ backgroundColor: emotionColors[dominant] }}>
              {dominant}
            </EmotionStyle>
            <TextStyle>{entry.message}</TextStyle>
            <SubTextStyle>{entry.content}</SubTextStyle>
          </EntryBox>
        );
      })}
    </ListWrapper>
  );
}

export default MainSummary;
