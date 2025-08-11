import React, { useEffect } from "react";
import {
  AiMoodieBox,
  AiMoodieImage,
  AiMoodieSubTitle,
  AiMoodieTitle,
  DetailDiaryBntData,
  DetailDiaryBntWrap,
  DetailDiaryData,
  DetailDiaryDataWrap,
  DetailDiaryDay,
  DetailDiaryInsightBox,
  DetailDiaryInsightSubTitle,
  DetailDiaryInsightSubTitleText,
  DetailDiaryInsightTitle,
  DetailDiaryInsightWrap,
  DetailDiaryScoreBox,
  DetailDiaryScoreText,
  DetailDiaryScoreTitle,
  DetailDiaryScoreWrap,
  WeeklyBtn,
} from "./MoodieDetail.style";
import { ContainerMain } from "./Moodie.style";
import TmpLogo from "../../components/logo/TmpLogo";
import moment from "moment";
import "moment/locale/ko";
import EmotionMessages from "./../../apis/EmotionMessages.json";
import { Link, useNavigate, useParams } from "react-router-dom";

function MoodieDetail({ moodList }) {
  moment.locale("ko");
  const today = moment().format("YYYY-MM-DD");
  const todayDiary = moodList.find(item => item.date === today);
  const todayImoji = todayDiary?.imoji;

  // URL에서 날짜 파라미터 읽기
  const { date } = useParams();
  const navigate = useNavigate();

  // date가 없으면 오늘 날짜로 리다이렉트
  useEffect(() => {
    if (!date) {
      const today = moment().format("YYYY-MM-DD");
      navigate(`/detail/${today}`, { replace: true });
    }
  }, [date, navigate]);
  const targetDate = date || moment().format("YYYY-MM-DD");

  // moodList 안전 처리
  const safeList = Array.isArray(moodList)
    ? moodList
    : (() => {
        try {
          const raw = localStorage.getItem("mind-mood");
          const parsed = JSON.parse(raw || "[]");
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      })();

  // ✅ 해당 날짜의 일기 찾기
  const diary = safeList.find(item => item?.date === targetDate);
  const imoji = diary?.imoji;

  // 종합 감정 점수
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
  // 랜덤 메시지 선택
  const messages = EmotionMessages[todayImoji] || [];
  const randomMessage = messages[
    Math.floor(Math.random() * messages.length)
  ] || {
    title: "오늘 하루는 어땠나요?",
    subTitle: "당신의 감정을 기록해보세요.",
  };

  return (
    <ContainerMain>
      <TmpLogo></TmpLogo>
      <AiMoodieBox>
        <AiMoodieImage src={`/${imoji}.svg`} alt="기쁨" />
        <AiMoodieTitle>
          {diary?.title[1] || "오늘 작성된 일기가 없습니다."}
        </AiMoodieTitle>
        <AiMoodieSubTitle>
          {diary?.message[1] || "오늘 작성된 일기가 없습니다."}
        </AiMoodieSubTitle>
      </AiMoodieBox>
      <DetailDiaryDataWrap>
        <DetailDiaryDay>
          {moment(targetDate, "YYYY-MM-DD").format("YYYY년 MM월 DD일 dddd")}
        </DetailDiaryDay>
        <hr
          style={{
            border: "none",
            height: "0.5px",
            backgroundColor: "rgba(78, 116, 29, 0.5)",
            margin: "0px 23px",
          }}
        />
        <DetailDiaryData>
          {diary?.content || "오늘 작성된 일기가 없습니다."}
        </DetailDiaryData>
        <DetailDiaryBntWrap>
          {diary?.checkboxs?.map((item, index) => (
            <DetailDiaryBntData key={index}>{item}</DetailDiaryBntData>
          ))}
        </DetailDiaryBntWrap>
      </DetailDiaryDataWrap>
      <DetailDiaryInsightWrap>
        <DetailDiaryInsightTitle>AI 인사이트</DetailDiaryInsightTitle>
        <DetailDiaryInsightBox>
          <DetailDiaryInsightSubTitle>
            {diary?.title[0] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitle>
          <DetailDiaryInsightSubTitleText>
            {diary?.message[0] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryInsightSubTitleText>
        </DetailDiaryInsightBox>
      </DetailDiaryInsightWrap>
      <DetailDiaryScoreWrap>
        <DetailDiaryScoreTitle>
          감정점수
          <span className="label">
            {" "}
            {diary
              ? `${calculateOverallScore(diary).toFixed(1)} / 10 `
              : "? / 10 "}
          </span>
          점
        </DetailDiaryScoreTitle>
        <DetailDiaryScoreBox>
          <DetailDiaryScoreText>
            {diary?.message[2] || "오늘 작성된 일기가 없습니다."}
          </DetailDiaryScoreText>
        </DetailDiaryScoreBox>
      </DetailDiaryScoreWrap>
      <WeeklyBtn>
        <Link to={"/record"}>주간 기록 화면으로</Link>
      </WeeklyBtn>
    </ContainerMain>
  );
}

export default MoodieDetail;
