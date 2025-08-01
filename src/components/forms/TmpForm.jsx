import styled from "@emotion/styled";
import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = styled.form`
  margin: 16px auto;
  width: 360px;
  border: 1px solid #d1d1d1;
  padding: 16px;
`;

const LoginLabel = styled.label`
  color: #2c2c2c;
  display: block;
  margin: 16px 0 8px;
`;

const LoginInput = styled.input`
  border: 1px solid #d1d1d1;
  color: #ababab;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
  padding: 16px 24px;
  width: 100%;
`;

const LoginBtn = styled.button`
  background: #2c2c2c;
  border: none;
  color: #ffffff;
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin: 24px 0;
  padding: 16px;
  width: 100%;
`;

// 종합 감정 차트
const Card = styled.div`
  max-width: 390px;
  margin: 32px auto;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

// 헤더 라인
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #4e741d;
`;

const SeeAll = styled.span`
  cursor: pointer;
  /* &:hover {
    text-decoration: underline;
  } */
  a {
    font-size: 12px;
    font-weight: 600;
    color: #4e741d;
  }
`;

const ChartWrapper = styled.div`
  height: 170px;
`;

// 요일별 컬러 지정
const dayColors = {
  월: "#4E741D",
  화: "#4E741D",
  수: "#4E741D",
  목: "#4E741D",
  금: "#4E741D",
  토: "#4985B7",
  일: "#ED7777",
};

const CustomTick = ({ x, y, value, textAnchor, fontSize }) => (
  <g transform={`translate(${x},${18})`}>
    <text
      textAnchor={textAnchor}
      dominantBaseline="middle"
      style={{
        fill: dayColors[value] || "#000", // 요일별 색상 지정
        fontSize: fontSize || 12,
        fontWeight: 700,
      }}
    >
      {value}
    </text>
  </g>
);

const emotionColors = {
  joy: "#FFD43B",
  sadness: "#527FB3",
  anger: "#EF5350",
  anxiety: "#A29BFE",
  calmness: "#A5D6A7",
  none: "#E0E0E0", // 감정 데이터가 없을 경우
};

function getCurrentWeekRangeText() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (일) ~ 6 (토)
  const diffToMonday = (dayOfWeek + 6) % 7;

  const monday = new Date(today);
  monday.setDate(today.getDate() - diffToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const formatDate = date => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}.${mm}.${dd}`;
  };

  return `${formatDate(monday)} ~ ${formatDate(sunday)}`;
}

function TmpForm() {
  // js 자리
  const [data, setData] = useState([]);

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

  const calculateOverallScore = item => {
    const { joy, sadness, anger, anxiety, calmness } = item;
    return (
      (2 * joy -
        2 * sadness -
        1.5 * anger -
        1.5 * anxiety +
        1.5 * calmness +
        50) /
      8.5
    );
  };

  // const prepareOverallScoreData = data => {
  //   const days = ["일", "월", "화", "수", "목", "금", "토"];
  //   const scoresByDay = {
  //     일: 0,
  //     월: 0,
  //     화: 0,
  //     수: 0,
  //     목: 0,
  //     금: 0,
  //     토: 0,
  //   };

  //   data.forEach(item => {
  //     if (!item.date) return;
  //     const dateObj = new Date(item.date);
  //     const dayName = days[dateObj.getDay()];
  //     scoresByDay[dayName] = parseFloat(calculateOverallScore(item).toFixed(2));
  //   });

  //   return ["월", "화", "수", "목", "금", "토", "일"].map(day => ({
  //     day,
  //     score: scoresByDay[day] || 0,
  //   }));
  // };

  // 감정으로 bar 색 주기
  const prepareOverallScoreData = data => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const scoresByDay = {
      일: null,
      월: null,
      화: null,
      수: null,
      목: null,
      금: null,
      토: null,
    };

    // 오늘 날짜 기준
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (일) ~ 6 (토)
    const diffToMonday = (dayOfWeek + 6) % 7; // 월요일까지 며칠 전인지
    const monday = new Date(today);
    monday.setDate(today.getDate() - diffToMonday);
    monday.setHours(0, 0, 0, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    data.forEach(item => {
      if (!item.date) return;

      const dateObj = new Date(item.date);
      if (dateObj < monday || dateObj > sunday) return;

      const dayName = days[dateObj.getDay()];
      const emotions = {
        joy: item.joy,
        sadness: item.sadness,
        anger: item.anger,
        anxiety: item.anxiety,
        calmness: item.calmness,
      };

      const topEmotion = Object.keys(emotions).reduce((a, b) =>
        emotions[a] > emotions[b] ? a : b,
      );

      scoresByDay[dayName] = {
        score: parseFloat(calculateOverallScore(item).toFixed(2)),
        topEmotion: topEmotion,
      };
    });

    return ["일", "월", "화", "수", "목", "금", "토"].map(day => {
      const entry = scoresByDay[day];
      return {
        day,
        score: entry ? entry.score : 0,
        topEmotion: entry ? entry.topEmotion : "none",
      };
    });
  };
  const chartData = prepareOverallScoreData(data);
  // jsx 자리
  return (
    <div>
      {/* <LoginForm action="">
        <LoginLabel htmlFor="username">아이디</LoginLabel>
        <LoginInput id="username" name="username" />
        <LoginLabel htmlFor="password">비밀번호</LoginLabel>
        <LoginInput id="password" name="password" type="password" />
        <LoginBtn>클릭</LoginBtn>
        <LoginBtn type="reset">취소</LoginBtn>
      </LoginForm>
      <hr /> */}
      <Card>
        <CardHeader>
          <CardTitle>
            주간 감정 차트{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#999", // 중간 회색 톤 (예: tailwind의 text-gray-500)
              }}
            >
              ({getCurrentWeekRangeText()})
            </span>{" "}
          </CardTitle>
          <SeeAll>
            <Link to={"/weekly"}>전체보기</Link>
          </SeeAll>
        </CardHeader>

        <ChartWrapper>
          <ResponsiveBar
            data={chartData}
            keys={["score"]}
            indexBy="day"
            margin={{ top: 10, right: 10, bottom: 30, left: 10 }}
            padding={0.1}
            colors={({ data }) => emotionColors[data.topEmotion]}
            enableLabel={false}
            axisBottom={{
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
              renderTick: CustomTick,
            }}
            axisLeft={null}
            gridYValues={[]}
            borderRadius={5}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fontSize: 12,
                  },
                },
              },
            }}
          />
        </ChartWrapper>
      </Card>
    </div>
  );
}

export default TmpForm;
