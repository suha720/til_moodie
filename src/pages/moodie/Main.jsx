import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moodie from "./Moodie";
import MoodieToday from "./MoodieToday";
import MoodieRecord from "./MoodieRecord";
import MoodieStatistics from "./MoodieStatistics";
import MoodieDetail from "./MoodieDetail";
import MoodieAdd from "./MoodieAdd";
import MoodieEdit from "./MoodieEdit";

import TestNivo from "./TestNivo";
import MoodieWeeklyChart from "./MoodieWeeklyChart";
import MoodieAllRecord from "./MoodieAllRecord";
import moment from "moment";

function Main() {
  const initMoodList = [
    {
      date: "2025-08-03",
      content:
        "오늘은 친구들과 축구를 했다. 시원한 바람 속에서 땀 흘리며 놀았더니 기분이 좋았다.",
      checkboxs: ["기쁨"],
      imoji: "슬픔",
      keywords: ["친구", "축구", "땀", "바람", "기분"],
      joy: 7,
      sadness: 1,
      anger: 0,
      anxiety: 2,
      calmness: 4,
      title: ["즐거운 축구", "기쁨 땀", "땀, 바람, 친구"],
      message: [
        "오늘은 친구들과 축구를 하며 즐거운 시간을 보냈군요! ⚽️ 시원한 바람 속에서 땀 흘리는 순간들이 활력을 준 것 같아요 😊 최근에 비해 기쁨이 확 올라간 하루였어요. 이런 좋은 날이 자주 오기를 바랄게요! 내일도 소중한 감정을 일기장에 담아주세요 ✨",
        "더미 데이터입니다.",
        "더미 데이터입니다.",
      ],
    },
    {
      date: "2025-08-07",
      content:
        "회사에서 실수를 해서 팀장님께 혼났다. 하루 종일 마음이 불편하고 우울했다.",
      checkboxs: ["슬픔", "블안"],
      imoji: "기쁨",
      keywords: ["회사", "실수", "혼남", "우울", "불편"],
      joy: 2,
      sadness: 6,
      anger: 2,
      anxiety: 5,
      calmness: 2,
      title: ["모멸찬 시간", "더미 데이터입니다.", "더미 데이터입니다."],
      message: [
        "오늘은 회사에서 실수로 혼이 나 마음이 많이 무거웠겠어요 😔 최근에 비해 슬픔과 불안이 높아진 하루였네요. 하지만 그런 날도 있어요. 실수는 누구나 하니까 너무 자책하지 마세요. 당신은 충분히 잘하고 있어요 💪 내일은 조금 더 가벼운 마음으로 하루를 마무리하길 응원할게요 🌿",
        "더미 데이터입니다.",
        "더미 데이터입니다.",
      ],
    },
    {
      date: "2025-08-08",
      content:
        "혼자 카페에 가서 조용히 책을 읽었다. 마음이 차분해지는 하루였다.",
      checkboxs: ["기쁨", "평온"],
      imoji: "기쁨",
      keywords: ["카페", "책", "혼자", "조용", "차분"],
      joy: 5,
      sadness: 1,
      anger: 0,
      anxiety: 1,
      calmness: 7,
      title: [
        "조용한 카페에서 찾은 나만의 평온한 시간",
        "더미 데이터입니다.",
        "더미 데이터입니다.",
      ],
      message: [
        "조용한 카페에서 혼자 책을 읽으며 차분한 시간을 보냈다니 멋진 하루였어요 ☕📚 최근 불안했던 감정이 조금씩 가라앉고 있는 것 같아 다행이에요. 스스로를 돌보는 시간을 가져주는 모습이 참 인상적이에요. 오늘처럼 평온한 순간을 자주 마주하길 바랄게요 🌼",
        "더미 데이터입니다.",
        "더미 데이터입니다.",
      ],
    },
  ];

  // 일기 전체 목록
  // const [moodList, setMoodList] = useState([]);
  const [moodList, setMoodList] = useState(initMoodList);

  // 현재 작성중인 목록
  const initMood = {
    date: "",
    content: "",
    checkboxs: [],
    imoji: "",
    keywords: [],

    joy: 0,
    sadness: 0,
    anxiety: 0,
    calmness: 0,
    title: "",
    message: "",
  };

  const [mood, setMood] = useState(initMood);

  // 새로운 일기 등록하기
  const handleAddChange = e => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox" && name === "checkboxs") {
      const updatedCheckboxs = checked
        ? [...mood.checkboxs, value]
        : mood.checkboxs.filter(k => k !== value);

      setMood(prev => ({ ...prev, checkboxs: updatedCheckboxs }));
    } else {
      setMood(prev => ({ ...prev, [name]: value }));
    }
  };

  // Start - OpenAI 에서 일기 분석하기
  const [analysis, setAnalysis] = useState("");

  // 분석이 오래 걸리므로. 로딩창 만들기 + suspense 생각해보기
  const [isLoading, setIsLoading] = useState(false);

  // 일기 전체 목록 갱신하기
  const handleAddSubmit = () => {
    // 입력 날짜 자동 저장하기
    // 이 어플은 하루에 한번만 작성가능하지만 테스트를 위해서 무제한으로 변경함
    // 추후 수정 필요함
    const newMood = {
      ...mood,
      date: moment().format("YYYY-MM-DD"),
    };

    // setMoodList([...moodList, { ...mood }]);

    // 다음 코드 수정 가능성 높음
    setMoodList([...moodList, { ...newMood }]);

    setMood(initMood);
  };

  // OpenAI API 분석 함수
  const analyzeMood = async e => {
    try {
      // fetch 로 데이터를 전달 즉, request 하고, response 대기
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST", // 글을 보냈다.
          // 옵션들

          // 아래 항목은 어떠한 형태로 내용을 보냈다.
          headers: {
            "Content-Type": "application/json", // JSON 형태이다.
            // 나의 자격 증명으로서 허가된 키로 요청한다.
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          // 아래는 실제로 보낼 내용
          // JSON.stringify: JSON 글자로 변환한다.
          body: JSON.stringify({
            // ChatGPT 의 엔진 종류
            // : gpt-3.5-turbo(빠르고 저렴)
            // : gpt-4(더 똑똑하고 이해력 높음 - 복잡한 문제 해결)
            // : gpt-o(텍스트, 이미지, 음성까지 처리 - 사진으로 설명)
            model: "gpt-3.5-turbo",
            // 답변의 길이를 제한함. 500 이상이면 긴 답변
            max_tokens: 500,
            // 창의적인 답변
            temperature: 0.6,
            // 필요로 한 프롬프트를 전달함
            messages: [
              {
                role: "system", // ChatGPT 역할 부여
                content: `
                  당신은 일기 애플리케이션의 감정 분석 AI입니다.
                  사용자의 기분을 분석하고 따뜻하고 건설적인 조언을 제공해주세요.

                  작성된 일기를 바탕으로 아래 데이터를 생성하고, 반드시 JSON 형식으로만 응답하세요.

                  - 일기에서 추출한 핵심 키워드 5개 ("keywords": 단어 배열)
                  - 감정 점수 (0~10점 정수)
                    - 기쁨 ("joy")
                    - 슬픔 ("sadness")
                    - 분노 ("anger")
                    - 불안 ("anxiety")
                    - 평온 ("calmness")
                  - 오늘 일기를 한 문장으로 요약한 제목 3개 ("title": 문자열 배열)
                    → 첫 번째는 감성적이고 인상적인 문장, 두 번째는 간결한 회고 문장, 세 번째는 반드시 긍정적이고 따뜻한 회고 문장으로 마무리해 주세요.
                  - 조언 메시지 3개 ("message": 문자열 배열)
                    → 첫 번째는 따뜻하고 친절한 문장, 두 번째는 간결한 조언 문장, 세 번째는 반드시 자기돌봄을 제안하는 문장으로 마무리해 주세요.

                  다음은 답변 JSON 형식의 예시입니다.
                  ---
                  {
                    "keywords": ["카페", "책", "혼자", "조용", "차분"],
                    "joy": 5,
                    "sadness": 1,
                    "anger": 0,
                    "anxiety": 1,
                    "calmness": 7,
                    "title": [
                      "조용한 카페에서 찾은 나만의 평온한 시간",
                      "차분했던 하루의 기록",
                      "기분 좋은 하루였네요."
                    ],
                    "message": [
                      "조용한 카페에서 혼자 책을 읽으며 차분한 시간을 보냈다니 멋진 하루였어요 ☕📚 오늘처럼 평온한 순간을 자주 마주하길 바랄게요 🌼",
                      "스스로를 돌보는 시간을 자주 가져보세요.",
                      "이런 날은 나에게 작은 선물을 주는 것도 좋아요!"
                    ]
                  }

                  주의: 설명 없이 이와 동일한 구조의 JSON만 출력해주세요.                        `,
              },
              {
                role: "user", // 사용자 입력내용을 작성해줌.
                content: `한글로 답변을 주는 분석으로 해줘. 다음과 같은 기분을 분석해주세요: "${mood.content}"`,
              },
            ],
          }),
        },
      );

      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      const data = await response.json();
      setAnalysis(data.choices[0].message.content);
      // JSON 파싱
      const parsed = JSON.parse(data.choices[0].message.content);
      return parsed; // ✅ 결과 리턴해야 handleSubmitTest에서 받아서 쓸 수 있음
    } catch (error) {
      console.error("Error:", error);
      setAnalysis(
        "죄송합니다. 분석 중 오류가 발생했습니다. 다시 시도해주세요.",
      );
    } finally {
      setIsLoading(false);
    }
  };
  // End - OpenAI 에서 일기 분석하기

  const handleSubmitTest = async e => {
    setIsLoading(true);

    const result = await analyzeMood(mood.content);
    if (!result) {
      alert("분석 실패. 다시 시도해주세요.");
      setIsLoading(false);
      return;
    }
    const newMood = {
      ...mood,
      ...result,
      date: moment().format("YYYY-MM-DD"),
    };

    setMoodList([...moodList, newMood]);
    setMood(initMood);
    setIsLoading(false);
  };

  // 최초 한번만 실행
  // 로컬스토리지가 없다면 생성, 있다면 읽어오기
  useEffect(() => {
    const result = localStorage.getItem("mind-mood");
    if (!result) {
      localStorage.setItem("mind-mood", JSON.stringify([]));
    } else {
      try {
        const json = JSON.parse(result);
        const check = Array.isArray(json);
        if (check) {
          setMoodList(json);
        } else {
          setMoodList([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  // 일기 전체 목록에 변경점(추가)이 생길 경우
  useEffect(() => {
    localStorage.setItem("mind-mood", JSON.stringify(moodList));
  }, [moodList]);

  return (
    <div className="wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Moodie moodList={moodList} />}></Route>
          <Route
            path="/today"
            element={<MoodieToday moodList={moodList} />}
          ></Route>
          <Route
            path="/record"
            element={<MoodieRecord moodList={moodList} />}
          ></Route>
          <Route path="/statistics" element={<MoodieStatistics />}></Route>
          <Route
            path="/detail"
            element={<MoodieDetail moodList={moodList} />}
          ></Route>
          <Route
            path="add"
            element={
              <MoodieAdd
                mood={mood}
                handleAddChange={handleAddChange}
                handleSubmitTest={handleSubmitTest}
              />
            }
          ></Route>
          <Route path="edit" element={<MoodieEdit />}></Route>
          <Route path="/weekly" element={<MoodieWeeklyChart />}></Route>
          <Route path="/allrecord" element={<MoodieAllRecord />}></Route>
          {/* <Route
            path="test"
            element={<TestForm onAddDiary={addDiary} />}
          ></Route>
          <Route
            path="testlist"
            element={<TestFormList diaries={diaries} onDelete={deleteDiary} />}
          ></Route> */}
          <Route path="chart" element={<TestNivo></TestNivo>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
