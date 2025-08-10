// src/services/openai.js
export async function analyzeMood(content) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        max_tokens: 500,
        temperature: 0.6,
        messages: [
          {
            role: "system",
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

                    주의: 설명 없이 이와 동일한 구조의 JSON만 출력해주세요.
            `,
          },
          { role: "user", content: `분석할 내용: "${content}"` },
        ],
      }),
    });

    if (!response.ok) throw new Error("API 요청 실패");

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI 분석 오류:", error);
    return null;
  }
}

export async function generateWeeklyInsights(data) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content: `
당신은 감정 기록 앱의 요약 AI입니다.
다음 데이터 기반으로 아래 내용을 요약해서 JSON 형식으로 반환하세요.

- 주차: ${data.week}
- 총 감정 기록 수: ${data.totalCount}
- 평균 감정 점수: ${data.averageScore}
- 가장 많이 느낀 감정: ${data.topEmotion} (${data.topEmotionRatio})
- 가장 좋았던 날: ${data.bestDay} (${data.bestDayScore}점)
- 감정 기복: ${data.stability}

반환 형식 예시:
{
  "insight": "이번 주 감정을 잘 챙기셨네요! 스스로를 돌보는 힘이 느껴져요. 😊",
  "topEmotionText": "😊 기쁨 (43%)를 가장 많이 느꼈어요.",
  "bestDayText": "2025년 7월 22일이 가장 좋은 하루였어요 (85점)",
  "stabilityText": "감정 기복은 비교적 안정적이에요."
}

설명 없이 반드시 JSON만 반환하세요.
            `,
          },
          {
            role: "user",
            content: `요약 데이터: ${JSON.stringify(data)}`,
          },
        ],
      }),
    });

    if (!response.ok) throw new Error("OpenAI 요약 API 요청 실패");

    const result = await response.json();
    return JSON.parse(result.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI 인사이트 생성 오류:", error);
    return null;
  }
}

export async function generateMonthlyInsight({ monthlyAvg }) {
  try {
    const { joy, sadness, anger, anxiety, calmness } = monthlyAvg;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 150,
        messages: [
          {
            role: "system",
            content: `
              당신은 일기 애플리케이션의 감정 분석 AI입니다.
              아래 제공되는 5가지 감정 점수(0~10) 데이터를 바탕으로 이번 달 감정 경향 인사이트를 작성하세요.
              조건:
              - 정확히 1문장
              - 첫 단어에 "이번 달은"으로 시작
              - 점수가 높은 순서 상위 3개의 감정을 순서대로 언급
              - 한국어로 작성, 긍정적이고 따뜻한 톤 유지
              - 이모지 1~2개 포함
              - 불필요한 설명, 접두어 없이 바로 문장 출력
            `,
          },
          {
            role: "user",
            content: `
              기쁨: ${Math.round(joy)}점, 슬픔: ${Math.round(sadness)}점, 분노: ${Math.round(anger)}점, 불안: ${Math.round(anxiety)}점, 평온: ${Math.round(calmness)}점
            `,
          },
        ],
      }),
    });

    if (!response.ok) throw new Error("OpenAI 요청 실패");

    const data = await response.json();
    return data?.choices?.[0]?.message?.content?.trim() || "";
  } catch (err) {
    console.error("generateMonthlyInsight 오류:", err);
    return "이번 달은 기쁨이 높고 평온이 뒤를 잇는 안정적인 한 달이었어요 🙂";
  }
}

// src/apis/openaiApi.js
export async function generateMonthlyMessage({ count, avgScore }) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 120,
        messages: [
          {
            role: "system",
            content: `
              당신은 일기 애플리케이션의 감정 분석 AI입니다.
              정확히 두 문장으로만 응답하세요.
              첫 번째 문장은 상황 정보를 요약합니다(이번 달 기록 개수).
              두 번째 문장은 사용자가 일기를 꾸준히 쓸 수 있도록 부드럽게 이끌어주는 문장입니다.
              톤은 따뜻하고 긍정적이며, 과장되거나 명령조는 피하세요.
              한국어로 작성하고, 전체 응답에 이모지는 1~2개만 포함하세요.
              줄바꿈이나 머리말 없이 한 줄로만 출력하세요.            `,
          },
          {
            role: "user",
            content: `
              - 이번 달에는 ${count}개 기록하셨군요!
              - 이번 달 평균 감정 점수: ${avgScore}점

              요구사항:
              - 문장 수: 정확히 2문장
              - 1문장차: 위 상황 정보를 자연스럽게 요약(숫자 포함)
              - 2문장차: 오늘도 가볍게 기록을 이어가도록 부드럽게 이끄는 문장
              - 이모지 1~2개 사용(전체 기준), 과도한 칭찬·명령조 금지
              - 줄바꿈 금지, 불필요한 설명/접두어 금지              `,
          },
        ],
      }),
    });

    if (!response.ok) throw new Error("OpenAI 요청 실패");

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content?.trim() || "";
    return text;
  } catch (err) {
    console.error("generateMonthlyMessage 오류:", err);
    // 실패 시 기본 문구 fallback
    return "오늘도 스스로를 살피며 한 걸음 나아가고 있어요, 작은 기록이 큰 변화를 만듭니다 🙂";
  }
}

// 테스트용입니다 삭제 예정
export async function analyzePeriodInsight({
  periodLabel,
  items,
  averages,
  topKeywords,
}) {
  const payload = {
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `
당신은 일기 애플리케이션의 기간 인사이트 분석 AI입니다.
반드시 JSON만 출력하세요.

[필수 출력 스키마]
- "summary":
    - "title": 문자열 (15자 이내)
    - "description": 문자열 (2~3문장)
- "tips": 배열 (정확히 3개)
    - 각 요소: { "title": 문자열(10자 이내), "description": 문자열(2문장 이상, 구체적 실행 방법 포함) }
- "highlights": 문자열 배열 (정확히 3개)

[데이터 입력]
- period: 사용자가 제공
- averages: joy/sadness/anger/anxiety/calmness 평균(0~10)
- topKeywords: 상위 키워드 배열
- entries: 기간 내 기록 샘플

[다음은 답변 JSON 형식의 예시입니다.]
1) summary.title:
   "이번주 감정 흐름"

2) summary.description(줄바꿈/띄어쓰기 유지):
   "이번 주는 기쁨도, 슬픔도, 분노도 모두 느낀 한 주였어요. 
   다양한 감정이 스쳐간 만큼 마음이 열심히 살고있다는 증거예요. 
   모든 감정은 지나가고, 그 안에서 나를 더 깊이 이해하게 됩니다. 잘 버텨낸 당신이 참 대단해요."

3) tips(줄바꿈/띄어쓰기 유지):
   {
     "title": "감정을 건강하게 다루는 습관 만들기",
     "description": 
     "😊 기쁨이 있었던 날: 그날 있었던 작은 기쁨을 사진이나 메모로 함께 기록해보세요. 기분이 가라앉을 때 꺼내보는 용기가 됩니다.\\n\\n
     😢 슬픈 날: 감정을 억누르기보단 5분간 조용히 눈을 감고 호흡에 집중하는 명상을 해보세요. 마음이 가벼워질 거예요.\\n\\n
     😠 화가 났던 날: 감정이 반복될 경우, 패턴을 메모해 보는 습관을 들여보세요. 어떤 상황에서 화가 나는지 파악하면 감정을 덜 휘둘리게 돼요."
   }

[나머지 2개 tips와 3개 highlights 생성 규칙]
- averages와 topKeywords, entries를 근거로 구체적인 실행 조언/하이라이트를 작성
- 과한 칭찬·명령조는 피하고 따뜻한 톤 유지
- 불필요한 접두어나 설명 없이 스키마에 맞게만 출력    
`.trim(),
      },
      {
        role: "user",
        content: JSON.stringify({
          period: periodLabel,
          averages,
          topKeywords,
          entries: items, // [{date,title,content(앞부분)}...]
        }),
      },
    ],
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("OpenAI period insight error");
  const data = await res.json();
  return JSON.parse(data?.choices?.[0]?.message?.content || "{}");
}
