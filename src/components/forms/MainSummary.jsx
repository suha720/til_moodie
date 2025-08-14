import styled from "@emotion/styled";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListWrapper = styled.div`
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
`;

const EntryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #8dca4250;
  padding: 6px 10px;
  background-color: #fff;
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
  width: 100px;
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
  평온: "#A5D6A7",
  none: "#E0E0E0",
};

function MainSummary({ moodList }) {
  const [data, setData] = useState([]);

  // 미국식 요일 (일요일 시작)
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();

  // 이번 주 일요일 (시작)
  const dayOfWeek = today.getDay(); // 0(일) ~ 6(토)
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  sunday.setHours(0, 0, 0, 0);

  // 이번 주 토요일 (끝)
  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);
  saturday.setHours(23, 59, 59, 999);

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
    // getData();
  }, [moodList]);

  const getDominantEmotion = entry => {
    const { joy, sadness, anger, anxiety, calmness } = entry;
    const emotions = {
      기쁨: joy,
      슬픔: sadness,
      분노: anger,
      불안: anxiety,
      평온: calmness,
    };
    return Object.entries(emotions).sort((a, b) => b[1] - a[1])[0][0];
  };

  const weeklyData = moodList.filter(entry => {
    const d = moment(entry.date, "YYYY-MM-DD", true);
    return d.isValid() && d.toDate() >= sunday && d.toDate() <= saturday;
  });
  return (
    <ListWrapper>
      <CardHeader>
        <CardTitle>나의 감정 기록</CardTitle>
        <SeeAll>
          <Link to={"/record"}>더보기</Link>
        </SeeAll>
      </CardHeader>

      {weeklyData
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(entry => {
          const date = new Date(entry.date);
          const day = weekDays[date.getDay()];
          const dominant = getDominantEmotion(entry);
          return (
            <EntryBox key={entry.date}>
              <DayStyle>{day}</DayStyle>
              <EmotionStyle
                style={{ backgroundColor: emotionColors[dominant] }}
              >
                {dominant}
              </EmotionStyle>
              {/* <TextStyle>{entry.message}</TextStyle> */}
              <TextStyle>
                {Array.isArray(entry.title) ? entry.title[0] : entry.title}
              </TextStyle>{" "}
              {/* <SubTextStyle>{entry.content}</SubTextStyle> */}
              <SubTextStyle>
                {Array.isArray(entry.message)
                  ? entry.message[0]
                  : entry.message}
              </SubTextStyle>
            </EntryBox>
          );
        })}
    </ListWrapper>
  );
}

export default MainSummary;
