import React from "react";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import {
  AiAdviceBox,
  AiAdviceSubText,
  AiAdviceText,
  AiAdviceTitle,
  AiAdviceWrap,
  AiMessageBox,
  AiMessageImg,
  AiMessageSubTitle,
  AiMessageTitle,
  MoodieWeeklyChartWrap,
  WeeklyAiInsightBox,
  WeeklyAiInsightSubText,
  WeeklyAiInsightText,
  WeeklyAiInsightTitle,
  WeeklyAiInsightWrap,
  WeeklyEmotion,
  WeeklyEmotionBox,
  WeeklyEmotionTitle,
  WeeklyEmotionWrap,
} from "./MoodieWeeklyChart.style";

function MoodieWeeklyChart() {
  //js
  //jsx
  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieWeeklyChartWrap>
        <AiMessageBox>
          <AiMessageImg src="./messageimg.svg" alt="잘하고있어요" />
          <AiMessageTitle>차근차근 잘 하고 있어요!</AiMessageTitle>
          <AiMessageSubTitle>
            꾸준히 감정을 기록하며 한 걸음씩 나아가고 있어요🎉 눈에 띄는 변화가
            없더라도, 매일 감정을 돌아보고 기록한다는 건 스스로를 돌보는 큰
            용기예요!
          </AiMessageSubTitle>
        </AiMessageBox>
        <WeeklyEmotionWrap>
          <WeeklyEmotionTitle>이번 주 감정 분포</WeeklyEmotionTitle>
          <WeeklyEmotionBox>
            <WeeklyEmotion>
              <img src="./기쁨.svg" alt="기쁨" style={{ width: "50px" }} />
              <span className="emotionnumber">1</span>
              <div className="text">기쁨</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img src="./슬픔.svg" alt="슬픔" style={{ width: "50px" }} />
              <span className="emotionnumber">2</span>
              <div className="text">슬픔</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img
                className="emoji"
                src="./불안.svg"
                alt="불안"
                style={{ width: "60px", height: "56px" }}
              />
              <span className="emotionnumber">3</span>
              <div className="settext">불안</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img src="./분노.svg" alt="분노" style={{ width: "50px" }} />
              <span className="emotionnumber">1</span>
              <div className="text">분노</div>
            </WeeklyEmotion>
            <WeeklyEmotion>
              <img src="./평온.svg" alt="평온" style={{ width: "50px" }} />
              <span className="emotionnumber">5</span>
              <div className="text">평온</div>
            </WeeklyEmotion>
          </WeeklyEmotionBox>
        </WeeklyEmotionWrap>
        <WeeklyAiInsightWrap>
          <WeeklyAiInsightTitle>주간 AI 인사이트</WeeklyAiInsightTitle>
          <WeeklyAiInsightBox>
            <WeeklyAiInsightText>/D/이번주 감정 흐름</WeeklyAiInsightText>
            <WeeklyAiInsightSubText>
              /D/이번 주는 기쁨도, 슬픔도, 분노도 모두 느낀 한 주였어요. 다양한
              감정이 스쳐간 만큼 마음이 열심히 살고있다는 증거예요. 모든 감정은
              지나가고, 그 안에서 나를 더 깊이 이해하게 됩니다. 잘 버텨낸 당신이
              참 대단해요.
            </WeeklyAiInsightSubText>
          </WeeklyAiInsightBox>
          <WeeklyAiInsightBox>
            <WeeklyAiInsightText>/D/저녁 패턴</WeeklyAiInsightText>
            <WeeklyAiInsightSubText>
              /D/당신은 저녁에 일기를 자주 기록했네요. 하루를 마무리하며 감정을
              돌아보는 이 시간은 마음의 온도를 가라앉히고 스스로를 정리하는 데
              참 좋아요. 생각이 가장 솔직해지는 순간에 남긴 기록은 더 깊고
              진실하답니다.
            </WeeklyAiInsightSubText>
          </WeeklyAiInsightBox>
        </WeeklyAiInsightWrap>
        <AiAdviceWrap>
          <AiAdviceTitle>AI 맞춤 조언</AiAdviceTitle>
          <AiAdviceBox>
            <AiAdviceText>/D/기록 시간 최적화</AiAdviceText>
            <AiAdviceSubText>
              /D/감정 기록이 늦은 저녁(22:00~24:00) 에 이루어졌어요.이 시간은
              하루의 감정을 정리하기에 가장 적절해요! 잠들기 전 10분, 조용한
              음악을 틀고 일기를 쓰는 습관을 들여보세요. 마음을 정돈하는 데 큰
              도움이 됩니다✔
            </AiAdviceSubText>
          </AiAdviceBox>
          <AiAdviceBox>
            <AiAdviceText>/D/감정 밸런스 되돌아보기</AiAdviceText>
            <AiAdviceSubText>
              /D/이번 주에는 ‘기쁨’, ‘슬픔’, ‘화남’ 감정이 두드러졌어요.감정의
              폭이 넓다는 건 당신이 삶을 온전히 느끼고 있다는 증거예요. 하지만
              슬픔과 화남이 반복될 땐, 감정이 쌓이지 않도록 짧은 산책이나 감정
              해소 루틴을 가져보는 걸 추천해요.☺
            </AiAdviceSubText>
          </AiAdviceBox>
          <AiAdviceBox>
            <AiAdviceText>/D/감정을 건강하게 다루는 습관 만들기</AiAdviceText>
            <AiAdviceSubText>
              /D/😊 기쁨이 있었던 날: 그날 있었던 작은 기쁨을 사진이나 메모로
              함께 기록해보세요. 기분이 가라앉을 때 꺼내보는 용기가 됩니다.
              <br />
              <br />
              😢 슬픈 날: 감정을 억누르기보단 5분간 조용히 눈을 감고 호흡에
              집중하는 명상을 해보세요. 마음이 가벼워질 거예요.
              <br />
              <br />
              😠 화가 났던 날: 감정이 반복될 경우, 패턴을 메모해 보는 습관을
              들여보세요. 어떤 상황에서 화가 나는지 파악하면 감정을 덜 휘둘리게
              돼요.
            </AiAdviceSubText>
          </AiAdviceBox>
        </AiAdviceWrap>
      </MoodieWeeklyChartWrap>
    </ContainerMain>
  );
}

export default MoodieWeeklyChart;
