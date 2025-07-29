import React from "react";
import styled from "styled-components";

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
  MoodieCategoryBtnWrap,
  MoodieCategoryMainBtn,
  MoodieCategoryMainBtnWrap,
  MoodieCategorySubBtn,
  MoodieCategorySubBtnWrap,
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
  RecordWeeklyDate,
  RecordWeeklyDateWrap,
  RecordWeeklyImg,
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

function MoodieRecord() {
  return (
    <ContainerMain>
      <TmpLogo />
      <MoodieCategoryBtnWrap>
        <MoodieCategoryMainBtnWrap>
          <MoodieCategoryMainBtn>작성하기</MoodieCategoryMainBtn>
          <MoodieCategoryMainBtn>기록 보기</MoodieCategoryMainBtn>
        </MoodieCategoryMainBtnWrap>
        <MoodieCategorySubBtnWrap>
          <MoodieCategorySubBtn>주간 기록</MoodieCategorySubBtn>
          <MoodieCategorySubBtn>전체 기록</MoodieCategorySubBtn>
        </MoodieCategorySubBtnWrap>
      </MoodieCategoryBtnWrap>
      <RecordWeeklyWrap>
        <RecordWeeklyTitle>/D/7월 4주차 기록</RecordWeeklyTitle>
        <WeekCalendar />
        <RecordWeeklyTextBox>
          <RecordWeeklyText>
            /D/7개 중{" "}
            <span className="label">3개의 기록을 작성완료 했어요.</span>
          </RecordWeeklyText>
          <RecordWeeklySubText>
            /D/차근차근 감정을 기록하며 자신을 돌보고 있어요!
            <br />
            꾸준히 작성하여 큰 변화를 만들어 보아요😊
          </RecordWeeklySubText>
        </RecordWeeklyTextBox>
      </RecordWeeklyWrap>
      <WeeklyRecordBoxWrap>
        <WeeklyRecordBox>
          <RecordBox>
            <RecordImgBox>
              <RecordImgBoxImg src="./기쁨.svg" alt="기쁨" />
            </RecordImgBox>
            <RecordTextBox>
              <RecordTextBoxTop>
                <RecordTextBoxTopEmotion>기쁨</RecordTextBoxTopEmotion>
                <RecordTextBoxTopDate>2025년 7월 22일</RecordTextBoxTopDate>
              </RecordTextBoxTop>
              <RecordTextBoxBottom>
                <RecordTextBoxBottomTitle>
                  /D/기분좋은 하루였네요!
                </RecordTextBoxBottomTitle>
                <RecordTextBoxBottomSubTitle>
                  /D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다
                </RecordTextBoxBottomSubTitle>
              </RecordTextBoxBottom>
              <RecordScoreBox>
                <RecordAllScore>
                  <RecordScore />
                </RecordAllScore>
                <RecordScoreText>85점</RecordScoreText>
              </RecordScoreBox>
            </RecordTextBox>
          </RecordBox>
        </WeeklyRecordBox>
        <WeeklyRecordBox>
          <RecordBox>
            <RecordImgBox>
              <RecordImgBoxImg src="./기쁨.svg" alt="기쁨" />
            </RecordImgBox>
            <RecordTextBox>
              <RecordTextBoxTop>
                <RecordTextBoxTopEmotion>기쁨</RecordTextBoxTopEmotion>
                <RecordTextBoxTopDate>2025년 7월 22일</RecordTextBoxTopDate>
              </RecordTextBoxTop>
              <RecordTextBoxBottom>
                <RecordTextBoxBottomTitle>
                  /D/기분좋은 하루였네요!
                </RecordTextBoxBottomTitle>
                <RecordTextBoxBottomSubTitle>
                  /D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다
                </RecordTextBoxBottomSubTitle>
              </RecordTextBoxBottom>
              <RecordScoreBox>
                <RecordAllScore>
                  <RecordScore />
                </RecordAllScore>
                <RecordScoreText>85점</RecordScoreText>
              </RecordScoreBox>
            </RecordTextBox>
          </RecordBox>
        </WeeklyRecordBox>
        <WeeklyRecordBox>
          <RecordBox>
            <RecordImgBox>
              <RecordImgBoxImg src="./기쁨.svg" alt="기쁨" />
            </RecordImgBox>
            <RecordTextBox>
              <RecordTextBoxTop>
                <RecordTextBoxTopEmotion>기쁨</RecordTextBoxTopEmotion>
                <RecordTextBoxTopDate>2025년 7월 22일</RecordTextBoxTopDate>
              </RecordTextBoxTop>
              <RecordTextBoxBottom>
                <RecordTextBoxBottomTitle>
                  /D/기분좋은 하루였네요!
                </RecordTextBoxBottomTitle>
                <RecordTextBoxBottomSubTitle>
                  /D/오늘 운동을 했는데 온몸이 뻐근했지만 너무 뿌듯했다
                </RecordTextBoxBottomSubTitle>
              </RecordTextBoxBottom>
              <RecordScoreBox>
                <RecordAllScore>
                  <RecordScore />
                </RecordAllScore>
                <RecordScoreText>85점</RecordScoreText>
              </RecordScoreBox>
            </RecordTextBox>
          </RecordBox>
        </WeeklyRecordBox>
      </WeeklyRecordBoxWrap>
      <WeeklyScoreWrap>
        <WeeklyScoreTitle>/D/7월 4주차 기록 요약</WeeklyScoreTitle>
        <WeeklyScoreBox>
          <WeeklyScoreLBox>
            <WeeklyScoreLNumber>/D/3</WeeklyScoreLNumber>
            <WeeklyScoreLText>총 감정 기록 수</WeeklyScoreLText>
          </WeeklyScoreLBox>
          <WeeklyScoreRBox>
            <WeeklyScoreRNumber>/D/55</WeeklyScoreRNumber>
            <WeeklyScoreRText>평균 감정 점수</WeeklyScoreRText>
          </WeeklyScoreRBox>
        </WeeklyScoreBox>
        <WeeklyInsightBox>
          <WeeklyInsightTitle>🎈 이번 주 인사이트</WeeklyInsightTitle>
          <WeeklyInsightSubTitle>
            /D/차근차근 기록하고 있어요! 감정을 돌아보며 점수를 관리해보세요.
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
            <EmotionPatternRText>/D/😊기쁨(43%)</EmotionPatternRText>
            <EmotionPatternRText>/D/2025년 7월 22일(85점)</EmotionPatternRText>
            <EmotionPatternRText>
              <span className="point">/D/다소 안정적</span>
            </EmotionPatternRText>
          </EmotionPatternRBox>
        </EmotionPatternTextBox>
      </EmotionPatternBox>
    </ContainerMain>
  );
}

export default MoodieRecord;
