import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyWordItemWrap } from "../moodie/MoodieAdd.style";

const keywords = [
  "기쁨",
  "슬픔",
  "스트레스",
  "만족",
  "평온",
  "피곤",
  "불안",
  "걱정",
  "우울",
  "화남",
  "짜증",
  "실망",
  "외로움",
];

const KeywordLabel = styled.label`
  // display: inline-block;
  margin: 4px;
  cursor: pointer;

  // margin-right: 9px;
  // margin-top: 4px;
  // display: flex;

  .keyword {
    border: none;
    padding: 5px 10px;
    background-color: #ebffd3;
    border-radius: 20px;
    cursor: pointer;
  }

  .keyword.active {
    background-color: #58dbbd;
    color: white;
    border-color: #58dbbd;
  }
`;

function MoodAdd({ mood, handleAddChange, handleSubmitTest }) {
  // 일기 작성하면 친절하게 메인 페이지로 이동시키기
  const navigate = useNavigate();

  // OpenAI 에서 분석한 내용 출력 state
  const [analysis, setAnalysis] = useState("");

  // 분석하는 비동기로 진행이 됨. 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    // 폼의 버튼 눌렀을때, 새로고침 방지하기
    e.preventDefault();
    // 일기 전체 목록 갱신하기
    handleSubmitTest();
    // 메인 페이지로 이동하기
    navigate("/");
  };

  const handleChange = e => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...mood.keywords, value]
      : mood.keywords.filter(k => k !== value);

    // 키워드 배열을 업데이트
    handleAddChange("keywords", updated);
  };
  return (
    <div>
      <h2>일기 작성하기</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>
          일기
          <textarea
            name="content"
            value={mood.content}
            rows={4}
            onChange={handleAddChange}
          />
        </label>

        <KeyWordItemWrap>
          {keywords.map(keyword => (
            <KeywordLabel key={keyword}>
              <input
                name="checkboxs"
                type="checkbox"
                value={keyword}
                checked={mood.checkboxs.includes(keyword)}
                onChange={handleAddChange}
                hidden
              />
              <span
                className={`keyword ${mood.checkboxs.includes(keyword) ? "active" : ""}`}
              >
                {keyword}
              </span>{" "}
            </KeywordLabel>
          ))}
        </KeyWordItemWrap>

        <button type="submit">등록하기</button>
      </form>
      <button>
        <Link to={"/"}>이전</Link>
      </button>
    </div>
  );
}

export default MoodAdd;
