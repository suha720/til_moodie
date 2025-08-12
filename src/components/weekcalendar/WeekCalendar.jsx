import moment from "moment";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarWrapper = styled.div`
  margin: 0 auto;
  border-radius: 15px;
  background: #fff;
  width: 390px;
  padding: 15px 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const Row = styled.div`
  display: flex;
`;

const RowLineY = styled.div`
  border-bottom: 1px solid rgba(78, 116, 29, 0.5);
`;

const DayCell = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 800;
  padding: 3px auto;
  color: ${props => props.color || "#4e741d"};
  // 마지막 요소 제외한 셀에만 적용
  &:not(:last-child) {
    border-right: 1px solid rgba(78, 116, 29, 0.5);
  }
`;

const DateCell = styled.button`
  flex: 1;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  color: rgba(78, 116, 29, 0.1);
  padding: 8px auto;

  /* 버튼용 */
  background: transparent;
  border: none;
  cursor: pointer;
  // 마지막 요소 제외한 셀에만 적용
  &:not(:last-child) {
    border-right: 1px solid rgba(78, 116, 29, 0.5);
  }
`;

const WeekCalendar = ({ moodList = [] }) => {
  const today = new Date();

  // 오늘 포함된 주의 일요일~토요일 구하기
  const getWeekDates = baseDate => {
    const sunday = new Date(baseDate);
    sunday.setDate(baseDate.getDate() - baseDate.getDay());

    return [...Array(7)].map((_, i) => {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      return date;
    });
  };

  const weekDates = getWeekDates(today);

  const emotionToImage = {
    기쁨: "/기쁨.svg",
    슬픔: "/슬픔.svg",
    분노: "/분노.svg",
    불안: "/불안.svg",
    평온: "/평온.svg",
  };

  const navigate = useNavigate();

  return (
    <CalendarWrapper>
      <Row>
        {weekDays.map((day, i) => (
          <DayCell
            key={day}
            color={i === 0 ? "#ed7777" : i === 6 ? "#4985b7" : "#4e741d"}
          >
            {day}
          </DayCell>
        ))}
      </Row>
      <RowLineY />
      <Row>
        {weekDates.map(date => {
          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

          // 해당 날짜 문자열로 변환 (YYYY-MM-DD)
          const dateStr = moment(date).format("YYYY-MM-DD");

          // moodList에서 해당 날짜의 일기 찾기
          const dayMood = moodList.find(item => item.date === dateStr);

          return (
            <DateCell
              key={date.toISOString()}
              isToday={isToday}
              type="button"
              onClick={() => navigate(`/detail/${dateStr}`)}
            >
              {date.getDate()}

              {/* test */}
              <div style={{ position: "relative", display: "inline-block" }}>
                {dayMood?.imoji && (
                  <img
                    src={emotionToImage[dayMood.imoji]}
                    alt={dayMood.imoji}
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "-20px",
                      transform: "translateX(-50%)",
                      width: "40px",
                      height: "40px",
                      zIndex: 1,
                    }}
                  />
                )}
              </div>
            </DateCell>
          );
        })}
      </Row>
    </CalendarWrapper>
  );
};

export default WeekCalendar;
