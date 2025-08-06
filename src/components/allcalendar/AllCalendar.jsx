import React from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "./AllCalendar.css";
import { Navigate, useNavigate } from "react-router-dom";

const AllCalendar = ({
  currentDate,
  onActiveStartDateChange,
  moodList,
  emotionToImage,
}) => {
  const navigate = useNavigate();

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
  // 해당날짜 기분(imoji)찾기
  const getDayMood = date => {
    const targetDate = moment(date).format("YYYY-MM-DD");
    return moodList.find(item => item.date === targetDate);
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
        //무디리스트에서 해댱날짜 이모지 가져오기
        tileContent={({ date, view }) => {
          if (view !== "month") return null;

          const dayMood = getDayMood(date);

          return dayMood?.imoji ? (
            <div style={{ position: "relative" }}>
              <img
                src={emotionToImage[dayMood.imoji]}
                alt={dayMood.imoji}
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-70%)",
                  width: "40px",
                  height: "40px",
                  zIndex: 2,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/detail")}
              />
            </div>
          ) : null;
        }}
      />
    </div>
  );
};

export default AllCalendar;
