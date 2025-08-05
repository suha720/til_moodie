const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// 감정 점수 분석
export const analyzeMood = async content => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature: 0.2, // 정확한 분석
      messages: [
        {
          role: "system",
          content: `
                      당신은 일기 애플리케이션의 감정 분석 AI입니다.  
                      작성된 일기를 바탕으로 아래 데이터를 생성하고, 반드시 JSON 형식으로만 응답하세요.
  
                      - 일기에서 추출한 핵심 키워드 5개 (\`keywords\`: 단어 배열)
                      - 감정 점수 (0~10점 정수)
                      - 기쁨 (\`joy\`)
                      - 슬픔 (\`sadness\`)
                      - 분노 (\`anger\`)
                      - 불안 (\`anxiety\`)
                      - 평온 (\`calmness\`)
  
                      다음은 답변 JSON 형식의 예시입니다.
                      ---
                      {
                        "keywords": ["카페", "책", "혼자", "조용", "차분"],
                        "joy": 5,
                        "sadness": 1,
                        "anger": 0,
                        "anxiety": 1,
                        "calmness": 7,
                      }
  
                      주의: 설명 없이 이와 동일한 구조의 JSON만 출력해주세요.
                  `,
        },
        {
          role: "user",
          content,
        },
      ],
    }),
  });

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
};

// 조언 메시지 생성
export const generateMessage = async scoreObj => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature: 0.8, // 창의적인 조언
      messages: [
        {
          role: "system",
          content: `
                당신은 일기 애플리케이션의 감정 분석 AI입니다.
                당신은 이미 일기에서 데이터를 분석했습니다.
                분석한 데이터의 형태는 다음과 같습니다.
                ---
                {{
                "date": "2025-02-02"
                "keywords": ["축구", "슛", "친구", "즐거웠다", "신난다"]
                "joy": 8,
                "sadness": 0,
                "anger": 0,
                "anxiety": 0,
                "camness": 1,
                }}
                ---
                데이터는 다음과 같은 의미입니다.
                - 날짜 (date)
                - 일기에서 추출한 핵심 키워드 5개 (keywords)
                - 감정 점수 (0~10점)
                - 기쁨 (joy)
                - 슬픔 (sadness)
                - 분노 (anger)
                - 불안 (anxiety)
                - 평온 (calmness)

                다음은 오늘 일기 본문에서 당신이 분석한 데이터입니다.
                ---
                {today_data}
                ---
                다음은 최근 7개의 일기에서 당신이 분석한 데이터입니다.
                ---
                {recent_data}
                ---
                
                위 데이터를 활용해 다음과 같은 내용을 포함한 메시지를 생성해 JSON으로 답변하세요.
                - 최근 감정 상태의 변화를 알려 주는 내용 (만약 최근 데이터가 없다면 생략합니다)
                - 오늘의 일기에 대해 위로와 공감하는 내용
                - 계속 일기를 쓸 수 있도록 응원하는 내용
                메시지의 스타일은 다음과 같이 해주세요.
                - 적당한 이모지를 섞어 친근한 느낌
                
                다음은 답변 JSON형식의 예시입니다.
                ---
                {{ "message": "최근 많이 슬펐던 것 같은데 오늘은 기분이 나아져서 다행이에요, 친구들과 함께 즐거운 시간 보내셨나요?😄 내일 숙제가 걱정이지만 잘 해낼 거에요. 어떤 하루를 보내고 돌아 오실지 벌써부터 궁금해지는 걸요?" }}
          `,
        },
        {
          role: "user",
          content: JSON.stringify(scoreObj),
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
};
