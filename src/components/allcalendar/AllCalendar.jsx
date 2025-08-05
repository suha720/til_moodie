import React from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "./AllCalendar.css";

const AllCalendar = ({ currentDate, onActiveStartDateChange }) => {
  const weekName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const formatShortWeekday = (locale, date) => {
    return weekName[date.getDay()];
  };
  const formatDay = (locale, date) => {
    return moment(date).format("D");
  };

  // 전달 라벨 텍스트 생성 함수
  const getPrevMonthLabel = () => {
    const prev = new Date(currentDate);
    prev.setMonth(prev.getMonth() - 1);
    return `${prev.getMonth() + 1}월`;
  };

  // 다음달 라벨 텍스트 생성 함수
  const getNextMonthLabel = () => {
    const next = new Date(currentDate);
    next.setMonth(next.getMonth() + 1);
    return `${next.getMonth() + 1}월`;
  };

  return (
    <div>
      <Calendar
        value={currentDate}
        onActiveStartDateChange={onActiveStartDateChange}
        navigationLabel={({ date, locale }) =>
          date.toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
          }) + " 기록"
        }
        prevLabel={<span className="custom-button">{getPrevMonthLabel()}</span>}
        nextLabel={<span className="custom-button">{getNextMonthLabel()}</span>}
        calendarType="gregory"
        formatShortWeekday={formatShortWeekday}
        formatDay={formatDay}
      />
    </div>
  );
};

export default AllCalendar;
