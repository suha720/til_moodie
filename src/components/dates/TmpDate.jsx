import moment from "moment";
import React from "react";
import "moment/locale/ko"; // 한국어 로케일 import
import { TodayTitle } from "../../pages/moodie/MoodieAdd.style";

function TmpDate() {
  moment.locale("ko"); // 로케일을 한국어로 설정
  const today = moment().format("YYYY년 M월 D일 dddd");
  return <TodayTitle>{today}</TodayTitle>;
}

export default TmpDate;
