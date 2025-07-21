import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moodie from "./Moodie";
import MoodieToday from "./MoodieToday";
import MoodieRecord from "./MoodieRecord";
import MoodieStatistics from "./MoodieStatistics";
import MoodieDetail from "./MoodieDetail";
import MoodieAdd from "./MoodieAdd";
import MoodieEdit from "./MoodieEdit";
import TestForm from "./TestForm";
import TestFormList from "./TestFormList";
import TestNivo from "./TestNivo";

function Main() {
  const [diaries, setDiaries] = useState([]);

  const STORAGE_KEY = "mind-todo";

  // ✅ mount 시 localStorage 데이터 불러오기
  useEffect(() => {
    const key = "mind-todo";
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setDiaries([]);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setDiaries(parsed);
      } else {
        console.warn("Stored data is not an array:", parsed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        setDiaries([]);
      }
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setDiaries([]);
    }
  }, []);

  // ✅ diaries가 바뀔 때마다 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(diaries));
  }, [diaries]);

  // ✅ 일기 추가
  const addDiary = newDiary => {
    setDiaries(prev => [newDiary, ...prev]);
  };

  // ✅ 일기 삭제
  const deleteDiary = id => {
    setDiaries(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Moodie />}></Route>
          <Route path="/today" element={<MoodieToday />}></Route>
          <Route path="/record" element={<MoodieRecord />}></Route>
          <Route path="/statistics" element={<MoodieStatistics />}></Route>
          <Route path="/detail" element={<MoodieDetail />}></Route>
          <Route path="add" element={<MoodieAdd />}></Route>
          <Route path="edit" element={<MoodieEdit />}></Route>
          <Route
            path="test"
            element={<TestForm onAddDiary={addDiary} />}
          ></Route>
          <Route
            path="testlist"
            element={<TestFormList diaries={diaries} onDelete={deleteDiary} />}
          ></Route>
          <Route path="chart" element={<TestNivo></TestNivo>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
