import { useState, useEffect } from "react";
import initMoodList from "../data/initMoods";

export default function useMoodList() {
  const [moodList, setMoodList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("mind-mood");

    try {
      if (!saved) {
        // 로컬스토리지에 아무 것도 없을 때
        localStorage.setItem("mind-mood", JSON.stringify(initMoodList));
        setMoodList(initMoodList);
      } else {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed) && parsed.length > 0) {
          // 유효한 데이터가 있으면 사용
          setMoodList(parsed);
        } else {
          // 배열이지만 비어있거나 형식이 이상하면 초기값 사용
          localStorage.setItem("mind-mood", JSON.stringify(initMoodList));
          setMoodList(initMoodList);
        }
      }
    } catch (error) {
      console.error("로컬스토리지 파싱 오류:", error);
      // 오류 발생 시 초기값 사용
      localStorage.setItem("mind-mood", JSON.stringify(initMoodList));
      setMoodList(initMoodList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mind-mood", JSON.stringify(moodList));
  }, [moodList]);

  return [moodList, setMoodList];
}
