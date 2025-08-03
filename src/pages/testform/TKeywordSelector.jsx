import React from "react";
import { KeyWordBox, KeyWordItemWrap } from "../moodie/MoodieAdd.style";
import styled from "@emotion/styled";

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

function TKeywordSelector({ formState, setFormState }) {
  const handleChange = e => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...formState.keywords, value]
      : formState.keywords.filter(k => k !== value);
    setFormState({ ...formState, keywords: updated });
  };

  return (
    <KeyWordBox>
      <h3>감정 키워드 선택</h3>
      <KeyWordItemWrap>
        {keywords.map(keyword => (
          <KeywordLabel key={keyword}>
            <input
              type="checkbox"
              value={keyword}
              checked={formState.keywords.includes(keyword)}
              onChange={handleChange}
              hidden
            />
            <span
              className={`keyword ${formState.keywords.includes(keyword) ? "active" : ""}`}
            >
              {keyword}
            </span>{" "}
          </KeywordLabel>
        ))}
      </KeyWordItemWrap>
    </KeyWordBox>
  );
}

export default TKeywordSelector;
