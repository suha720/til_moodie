import React, { useEffect, useState } from "react";

import TmpLogo from "../../components/logo/TmpLogo";
import { ContainerMain } from "./Moodie.style";
import {
  EmotionPatternBox,
  EmotionPatternLBox,
  EmotionPatternLText,
  EmotionPatternRBox,
  EmotionPatternRText,
  EmotionPatternTextBox,
  EmotionPatternTitle,
  RecordAllScore,
  RecordBox,
  RecordImgBox,
  RecordImgBoxImg,
  RecordScore,
  RecordScoreBox,
  RecordScoreText,
  RecordTextBox,
  RecordTextBoxBottom,
  RecordTextBoxBottomSubTitle,
  RecordTextBoxBottomTitle,
  RecordTextBoxTop,
  RecordTextBoxTopDate,
  RecordTextBoxTopEmotion,
  RecordWeeklySubText,
  RecordWeeklyText,
  RecordWeeklyTextBox,
  RecordWeeklyTitle,
  RecordWeeklyWrap,
  WeeklyInsightBox,
  WeeklyInsightSubTitle,
  WeeklyInsightTitle,
  WeeklyRecordBox,
  WeeklyRecordBoxWrap,
  WeeklyScoreBox,
  WeeklyScoreLBox,
  WeeklyScoreLNumber,
  WeeklyScoreLText,
  WeeklyScoreRBox,
  WeeklyScoreRNumber,
  WeeklyScoreRText,
  WeeklyScoreTitle,
  WeeklyScoreWrap,
} from "./MoodieRecord.style";
import WeekCalendar from "../../components/weekcalendar/WeekCalendar";
import MoodieCategoryBt from "../../components/moodiecategorybutton/MoodieCategoryBt";
import moment from "moment";
import useFakeLoading from "../../hooks/useFakeLoading";
import { PulseLoader } from "react-spinners";
import { generateWeeklyInsights } from "../../services/openai";
import LoadingSpinner from "../../components/spinners/LoadingSpinner";
import { Navigate, useNavigate } from "react-router-dom";

function MoodieRecord({ moodList, isLoading }) {
  //js

  const navigate = useNavigate();
  const isFakeLoading = useFakeLoading(isLoading, 500);

  const getWeekInfo = () => {
    const today = moment();
    const month = today.month() + 1; // 0부터 시작하므로 +1

    // 이번 달의 1일을 기준으로
    const firstDayOfMonth = moment().startOf("month");

    // 첫 주의 첫 일요일까지 며칠 차이 나는지
    const offset = firstDayOfMonth.day(); // 0(Sun) ~ 6(Sat)

    // 오늘까지 총 몇 일이 지났는지 (1일부터 오늘까지)
    const passedDays = today.date() + offset - 1;

    // 주차 계산
    const week = Math.floor(passedDays / 7) + 1;

    return { month, week };
  };

  const { month, week } = getWeekInfo();

  const todayInfo = getWeekInfo(moment().format("YYYY-MM-DD"));

  const weeklyRecords = [
    {
      emotion: "기쁨",
      date: "2025년 7월 22일",
      title: "/D/기분좋은 하루였네요!",
      subTitle: "/D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다",
      score: 85,
      imgSrc: "./기쁨.svg",
    },
    {
      emotion: "슬픔",
      date: "2025년 7월 23일",
      title: "/D/조금 우울한 하루였어요",
      subTitle: "/D/비가 와서 기분이 가라앉았어요",
      score: 62,
      imgSrc: "./슬픔.svg",
    },
    {
      emotion: "화남",
      date: "2025년 7월 24일",
      title: "/D/짜증나는 일이 있었어요",
      subTitle: "/D/버스 놓치고 중요한 회의도 늦었어요",
      score: 50,
      imgSrc: "./분노.svg",
    },
  ];
  const emotionBorderColors = {
    기쁨: "#FFE24A",
    슬픔: "#507DB2",
    불안: "#9E54B7",
    화남: "#FB4C36",
    평온: "#8CC942",
  };

  // 일기 수에 따른 코멘트
  const getWeeklyComment = count => {
    if (count === 0) {
      return "이번 주는 좀 바빴나 봐요! 다음 주엔 감정 한 줄씩만 남겨보는 건 어때요? 😊";
    } else if (count <= 2) {
      return "한 번이라도 써준 거 정말 좋아요! 시작이 반이니까, 다음엔 좀 더 자주 써봐요 💪";
    } else if (count <= 4) {
      return "감정을 하나씩 잘 챙기고 있네요 🙌 조금씩 기록하다 보면 어느새 익숙해질 거예요!";
    } else if (count <= 6) {
      return "오! 거의 매일 썼네요 😲 진짜 잘하고 있어요. 자신을 돌보는 힘, 이미 갖고 있는 듯!";
    } else {
      return "완.벽. 그 자체✨ 매일매일 감정 챙긴 당신, 너무 멋져요! 스스로도 느껴지죠? 😎";
    }
  };

  const calculateOverallScore = item => {
    const { joy, sadness, anger, anxiety, calmness } = item;
    return (
      (2 * joy -
        2 * sadness -
        1.5 * anger -
        1.5 * anxiety +
        1.5 * calmness +
        50) /
      8.5
    );
  };

  const getWeekRange = date => {
    // US 기준 주 시작일 (일요일)
    const startOfWeek = moment(date).startOf("week"); // Sunday 기준
    const endOfWeek = moment(date).endOf("week"); // Saturday
    return { startOfWeek, endOfWeek };
  };

  const calculateThisWeekAverageScore = moodList => {
    if (!Array.isArray(moodList) || moodList.length === 0) return 0;

    const { startOfWeek, endOfWeek } = getWeekRange(new Date());

    // 이번 주에 해당하는 데이터 필터링
    const thisWeekList = moodList.filter(item => {
      const itemDate = moment(item.date, "YYYY-MM-DD"); // date가 문자열이라고 가정
      return itemDate.isBetween(startOfWeek, endOfWeek, null, "[]"); // inclusive 포함
    });

    if (thisWeekList.length === 0) return 0;

    // 점수 배열 생성
    const scores = thisWeekList.map(item => calculateOverallScore(item));

    // 평균 계산
    const averageScore =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;

    return averageScore;
  };

  const getThisWeekRecords = moodList => {
    const today = moment();
    const { startOfWeek, endOfWeek } = {
      startOfWeek: today.clone().startOf("week"),
      endOfWeek: today.clone().endOf("week"),
    };

    return moodList.filter(item => {
      const itemDate = moment(item.date, "YYYY-MM-DD");
      return itemDate.isBetween(startOfWeek, endOfWeek, null, "[]");
    });
  };

  // const countThisWeek = moodList.filter(item => {
  //   const { month, week } = getWeekInfo(item.date);
  //   return month === todayInfo.month && week === todayInfo.week;
  // }).length;

  const countThisWeek = getThisWeekRecords(moodList).length;

  const [avgScore, setAvgScore] = useState(0);

  useEffect(() => {
    setAvgScore(calculateThisWeekAverageScore(moodList));
  }, [moodList]);

  const [weeklyInsight, setWeeklyInsight] = useState(null);

  useEffect(() => {
    const fetchWeeklyInsight = async () => {
      const thisWeekList = getThisWeekRecords(moodList);
      if (thisWeekList.length === 0) return;

      const emotionCount = {};
      thisWeekList.forEach(item => {
        emotionCount[item.imoji] = (emotionCount[item.imoji] || 0) + 1;
      });
      const topEmotion =
        Object.entries(emotionCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
      const topEmotionRatio = `${Math.round((emotionCount[topEmotion] / thisWeekList.length) * 100)}%`;

      const bestDayData = thisWeekList
        .map(item => ({
          date: item.date,
          score: calculateOverallScore(item),
        }))
        .sort((a, b) => b.score - a.score)[0];

      const summaryData = {
        week: `${month}월 ${week}주차`,
        totalCount: thisWeekList.length,
        averageScore: calculateThisWeekAverageScore(thisWeekList).toFixed(1),
        topEmotion,
        topEmotionRatio,
        bestDay: bestDayData?.date,
        bestDayScore: Math.floor(bestDayData?.score || 0),
        stability: "다소 안정적", // 추후 분석 가능
      };

      const result = await generateWeeklyInsights(summaryData);
      if (result) {
        setWeeklyInsight(result);
      }
    };

    fetchWeeklyInsight();
  }, [moodList]);

  return (
    <>
      <TmpLogo></TmpLogo>
      {isFakeLoading ? (
        <ContainerMain style={{ textAlign: "center", paddingTop: "120px" }}>
          <LoadingSpinner />
        </ContainerMain>
      ) : (
        <ContainerMain>
          {/* <TmpLogo /> */}
          <MoodieCategoryBt />

          <RecordWeeklyWrap>
            <RecordWeeklyTitle>{`${month}월 ${week}주차 기록`}</RecordWeeklyTitle>
            <WeekCalendar moodList={moodList} />
            <RecordWeeklyTextBox>
              <RecordWeeklyText>
                7개 중{" "}
                <span className="label">
                  {countThisWeek}개의 기록을 작성완료 했어요.
                </span>
              </RecordWeeklyText>
              <RecordWeeklySubText>
                {getWeeklyComment(countThisWeek)}
              </RecordWeeklySubText>
            </RecordWeeklyTextBox>
          </RecordWeeklyWrap>

          <WeeklyRecordBoxWrap>
            {getThisWeekRecords(moodList)
              .sort((a, b) => moment(b.date).diff(moment(a.date)))
              .map((record, index) => (
                <WeeklyRecordBox
                  key={index}
                  onClick={() => navigate(`/detail/${record.date}`)}
                >
                  <RecordBox>
                    <RecordImgBox
                      borderColor={emotionBorderColors[record.imoji]}
                    >
                      <RecordImgBoxImg
                        src={`/${record.imoji}.svg`}
                        alt={record.imoji}
                      />
                    </RecordImgBox>
                    <RecordTextBox>
                      <RecordTextBoxTop>
                        <RecordTextBoxTopEmotion
                          bgColor={emotionBorderColors[record.imoji]}
                        >
                          {record.imoji}
                        </RecordTextBoxTopEmotion>
                        <RecordTextBoxTopDate>
                          {record.date}
                        </RecordTextBoxTopDate>
                      </RecordTextBoxTop>
                      <RecordTextBoxBottom>
                        <RecordTextBoxBottomTitle>
                          {record.title[0]}
                        </RecordTextBoxBottomTitle>
                        <RecordTextBoxBottomSubTitle>
                          {record.message[0]}
                        </RecordTextBoxBottomSubTitle>
                      </RecordTextBoxBottom>
                      <RecordScoreBox>
                        <RecordAllScore>
                          <RecordScore
                            percentage={Math.min(
                              calculateOverallScore(record) * 10,
                              100,
                            )}
                          />
                        </RecordAllScore>
                        <RecordScoreText>
                          {Math.floor(calculateOverallScore(record))}점
                        </RecordScoreText>
                      </RecordScoreBox>
                    </RecordTextBox>
                  </RecordBox>
                </WeeklyRecordBox>
              ))}
          </WeeklyRecordBoxWrap>

          <WeeklyScoreWrap>
            <WeeklyScoreTitle>{`${month}월 ${week}주차 기록 요약`}</WeeklyScoreTitle>
            <WeeklyScoreBox>
              <WeeklyScoreLBox>
                <WeeklyScoreLNumber>{countThisWeek}</WeeklyScoreLNumber>
                <WeeklyScoreLText>총 감정 기록 수</WeeklyScoreLText>
              </WeeklyScoreLBox>
              <WeeklyScoreRBox>
                <WeeklyScoreRNumber>{avgScore.toFixed(1)}</WeeklyScoreRNumber>
                <WeeklyScoreRText>평균 감정 점수</WeeklyScoreRText>
              </WeeklyScoreRBox>
            </WeeklyScoreBox>

            <WeeklyInsightBox>
              <WeeklyInsightTitle>🎈 이번 주 인사이트</WeeklyInsightTitle>
              <WeeklyInsightSubTitle>
                {weeklyInsight
                  ? weeklyInsight.insight
                  : "오늘 작성된 일기가 없습니다."}
              </WeeklyInsightSubTitle>
            </WeeklyInsightBox>
          </WeeklyScoreWrap>
          <EmotionPatternBox>
            <EmotionPatternTitle>감정 패턴</EmotionPatternTitle>
            <EmotionPatternTextBox>
              <EmotionPatternLBox>
                <EmotionPatternLText>가장 많이 느낀 감정</EmotionPatternLText>
                <EmotionPatternLText>가장 좋았던 날</EmotionPatternLText>
                <EmotionPatternLText>감정 기복</EmotionPatternLText>
              </EmotionPatternLBox>
              <EmotionPatternRBox>
                <EmotionPatternRText>
                  {weeklyInsight
                    ? weeklyInsight.topEmotionText
                    : "오늘 작성된 일기가 없습니다."}
                </EmotionPatternRText>
                <EmotionPatternRText>
                  {weeklyInsight
                    ? weeklyInsight.bestDayText
                    : "오늘 작성된 일기가 없습니다."}
                </EmotionPatternRText>
                <EmotionPatternRText>
                  <span className="point">
                    {weeklyInsight
                      ? weeklyInsight.stabilityText
                      : "오늘 작성된 일기가 없습니다."}
                  </span>
                </EmotionPatternRText>
              </EmotionPatternRBox>
            </EmotionPatternTextBox>
          </EmotionPatternBox>
        </ContainerMain>
      )}
    </>
  );
}

export default MoodieRecord;
