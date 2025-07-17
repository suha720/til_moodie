import React from "react";
import { useNavigate } from "react-router-dom";

function MoodieRecord() {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleClickHome}>로고</button>
      <h2>MoodieRecord</h2>
    </div>
  );
}

export default MoodieRecord;
