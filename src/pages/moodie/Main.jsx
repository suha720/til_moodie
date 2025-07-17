import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moodie from "./Moodie";
import MoodieToday from "./MoodieToday";
import MoodieRecord from "./MoodieRecord";
import MoodieStatistics from "./MoodieStatistics";
import MoodieDetail from "./MoodieDetail";
import MoodieAdd from "./MoodieAdd";
import MoodieEdit from "./MoodieEdit";

function Main() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
