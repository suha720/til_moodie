import { ResponsiveLine } from "@nivo/line";
import React, { useEffect, useState } from "react";

function TestNivo() {
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
    </div>
  );
}

export default TestNivo;
