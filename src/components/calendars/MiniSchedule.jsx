import Calendar from "react-calendar";
import React from "react";

function Schedule() {
  // js
  const scWrap = {
    width: "80%",
    margin: " 0 auto",
    background: "yellowgreen",
    minHeight: 400,
  };

  // jsx
  return (
    <div>
      <h1>캘린더 출력</h1>
      <div style={scWrap}>
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default Schedule;
