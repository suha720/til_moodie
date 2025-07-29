import React from "react";
import Calendar from "react-calendar";

function MiniSchedule() {
  // js
  const scWrap = {
    width: "80%",
    margin: " 0 auto",
    background: "yellowgreen",
    minHeight: 400,
  };

  const getWeekDates = (baseDate = new Date()) => {
    const start = new Date(baseDate);
    const day = start.getDay(); // 0: 일요일
    start.setDate(start.getDate() - day);

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  // jsx
  return (
    <div>
      {getWeekDates().map(date => (
        <div key={date.toDateString()}>
          {date.toLocaleDateString("ko-KR", {
            weekday: "short",
            month: "numeric",
            day: "numeric",
          })}
        </div>
      ))}
    </div>
  );
}

export default MiniSchedule;
