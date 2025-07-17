import React from "react";
import { useNavigate } from "react-router-dom";

function MoodieStatistics() {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleClickHome}>로고</button>
      <h2>MoodieStatistics</h2>
    </div>
  );
}

export default MoodieStatistics;
