import moment from "moment";
import React from "react";
import { DetailDiaryDay } from "../../pages/moodie/MoodieDetail.style";
import { RecordWeeklyTitle } from "../../pages/moodie/MoodieRecord.style";

function TmpWeek() {
  const getWeekOfMonth = date => {
    const startOfMonth = moment(date).startOf("month"); // 7월 1일
    const startWeekDay = startOfMonth.day(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

    const offsetDate = date.date() + startWeekDay;
    return Math.ceil(offsetDate / 7);
  };

  const today = moment(); // 오늘 날짜
  const year = today.year();
  const month = today.month() + 1; // 월 (0부터 시작)
  const weekOfMonth = getWeekOfMonth(today);

  const result = `/D/${month}월 ${weekOfMonth}주차 기록`;
  return <RecordWeeklyTitle>{result}</RecordWeeklyTitle>;
}

export default TmpWeek;
