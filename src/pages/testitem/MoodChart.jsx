import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { Link } from "react-router-dom";

function MoodChart({ moodList }) {
  if (!Array.isArray(moodList) || moodList.length === 0) {
    return <div>차트에 표시할 데이터가 없습니다.</div>;
  }
  const data = moodList;
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

  const prepareOverallScoreData = data => {
    if (!Array.isArray(data) || data.length === 0) return [];

    return [
      {
        id: "종합 감정 점수",
        data: data
          .filter(item => item.date) // 날짜가 있는 것만 필터링
          .map(item => ({
            x: item.date,
            y: parseFloat(calculateOverallScore(item).toFixed(2)),
          })),
      },
    ];
  };

  const prepareEmotionDetailsData = data => {
    if (!Array.isArray(data) || data.length === 0) return [];

    const emotions = ["joy", "sadness", "anger", "anxiety", "calmness"];
    return emotions.map(emotion => ({
      id: emotion,
      data: data
        .filter(
          item =>
            item.date &&
            typeof item[emotion] === "number" &&
            !isNaN(item[emotion]),
        )
        .map(item => ({
          x: item.date,
          y: item[emotion],
        })),
    }));
  };

  const chartData = prepareOverallScoreData(data);
  const chartData2 = prepareEmotionDetailsData(data);

  // 가장 최근의 일기 한 개 가져오기
  const latestMood = moodList[moodList.length - 1];

  // 감정 항목별로 x축 구성
  const emotions = ["joy", "sadness", "anger", "anxiety", "calmness"];

  const chartData3 = [
    {
      id: "최근 감정 분석",
      data: emotions.map(emotion => ({
        x: emotion,
        y: latestMood[emotion] ?? 0,
      })),
    },
  ];

  if (chartData2.length === 0) {
    return <div>차트에 표시할 데이터가 없습니다.</div>;
  }

  return (
    <div>
      <h1>Line 차트 예제</h1>
      <div style={{ width: "100%", height: "600px" }}>
        <ResponsiveLine
          data={chartData2}
          margin={{ top: 40, right: 80, bottom: 60, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: 0, max: 10, stacked: false }}
          axisBottom={{
            orient: "bottom",
            legend: "날짜",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            legend: "점수",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "category10" }}
          pointSize={8}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          enableArea={false}
          useMesh={true}
        />
      </div>
      <button>
        <Link to={"/"}>이전</Link>
      </button>
    </div>
  );
}

export default MoodChart;
