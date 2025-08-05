import Calendar from "react-calendar";
import "./customCalendar.css";
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
        <Calendar // US 방식으로 변경하는 옵션임, US 방식은 `일요일부터 토요일` 이 형식임
          calendarType="gregory"
        ></Calendar>
      </div>
    </div>
  );
}

export default Schedule;
