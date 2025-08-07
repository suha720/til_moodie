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

export async function generateMonthlyInsight(emotionScores) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.6,
        max_tokens: 300,
        messages: [
          {
            role: "system",
            content: `
당신은 감정 기록 앱의 감성 요약 AI입니다.
사용자의 한 달간 감정 기록 평균 점수를 바탕으로 요약 메시지를 생성해주세요.

다음 데이터를 기반으로, 감정 순위를 정리하고 자연스럽게 설명해주세요:

- joy: ${emotionScores.joy}
- sadness: ${emotionScores.sadness}
- anger: ${emotionScores.anger}
- anxiety: ${emotionScores.anxiety}
- calmness: ${emotionScores.calmness}

조건:
1. 가장 높은 감정을 먼저 언급하세요.
2. 감정 순위를 부드럽게 이어서 설명하세요.
3. 따뜻하고 동기부여 되는 문장으로 마무리해주세요.
4. 결과는 한 문장만 작성하세요.
5. JSON 형식으로 응답하세요. 형식: { "insight": "..." }
            `,
          },
        ],
      }),
    });

    if (!response.ok) throw new Error("OpenAI 인사이트 생성 실패");

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI 월간 인사이트 오류:", error);
    return null;
  }
}
