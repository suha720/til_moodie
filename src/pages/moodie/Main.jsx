import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moodie from "./Moodie";
import MoodieToday from "./MoodieToday";
import MoodieRecord from "./MoodieRecord";
import MoodieStatistics from "./MoodieStatistics";
import MoodieDetail from "./MoodieDetail";
import MoodieAdd from "./MoodieAdd";
import MoodieEdit from "./MoodieEdit";
import MoodieWeeklyChart from "./MoodieWeeklyChart";
import MoodieAllRecord from "./MoodieAllRecord";
import TestNivo from "./TestNivo";
import ScrollToTop from "../../scrolls/ScrollToTop";
import useMoodList from "../../hooks/useMoodList";
import { analyzeMood } from "../../services/openai";
import moment from "moment";
import useInsights from "../../hooks/useInsights";

function Main() {
  const [moodList, setMoodList] = useMoodList();
  const [mood, setMood] = useState({
    date: "",
    content: "",
    checkboxs: [],
    imoji: "",
    keywords: [],
    joy: 0,
    sadness: 0,
    anxiety: 0,
    calmness: 0,
    title: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // 테스트용 삭제예정
  const { insights, isInsightLoading } = useInsights(moodList);
  // 내부 테스트용

  const handleAddChange = e => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox" && name === "checkboxs") {
      const updated = checked
        ? [...mood.checkboxs, value]
        : mood.checkboxs.filter(k => k !== value);
      setMood(prev => ({ ...prev, checkboxs: updated }));
    } else {
      setMood(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitTest = async () => {
    setIsLoading(true);
    const result = await analyzeMood(mood.content);
    if (!result) {
      alert("분석 실패. 다시 시도해주세요.");
      setIsLoading(false);
      return;
    }
    const newMood = { ...mood, ...result, date: moment().format("YYYY-MM-DD") };
    setMoodList([...moodList, newMood]);
    setMood({
      date: "",
      content: "",
      checkboxs: [],
      imoji: "",
      keywords: [],
      joy: 0,
      sadness: 0,
      anxiety: 0,
      calmness: 0,
      title: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <div className="wrap">
      <BrowserRouter>
        <ScrollToTop />
        {isLoading && <p>분석 중... 잠시만 기다려주세요 😊</p>}
        <Routes>
          <Route
            path="/"
            element={<Moodie moodList={moodList} isLoading={isLoading} />}
          />
          <Route
            path="/today"
            element={<MoodieToday moodList={moodList} isLoading={isLoading} />}
          />
          <Route
            path="/record"
            element={<MoodieRecord moodList={moodList} isLoading={isLoading} />}
          />
          <Route path="/statistics" element={<MoodieStatistics />} />
          <Route
            path="/detail"
            element={<MoodieDetail moodList={moodList} />}
          />
          <Route
            path="/add"
            element={
              <MoodieAdd
                mood={mood}
                moodList={moodList}
                handleAddChange={handleAddChange}
                handleSubmitTest={handleSubmitTest}
              />
            }
          />
          <Route path="/edit" element={<MoodieEdit />} />
          <Route
            path="/weekly"
            element={
              <MoodieWeeklyChart
                moodList={moodList}
                monthlyInsights={insights.monthly}
              />
            }
          />
          <Route
            path="/allrecord"
            element={
              <MoodieAllRecord moodList={moodList} isLoading={isLoading} />
            }
          />
          <Route path="/chart" element={<TestNivo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
