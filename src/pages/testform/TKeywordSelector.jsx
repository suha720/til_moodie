import React from "react";

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

function TKeywordSelector({ formState, setFormState }) {
  const handleChange = e => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...formState.keywords, value]
      : formState.keywords.filter(k => k !== value);
    setFormState({ ...formState, keywords: updated });
  };

  return (
    <div>
      <h3>감정 키워드 선택</h3>
      {keywords.map(keyword => (
        <label key={keyword}>
          <input
            type="checkbox"
            value={keyword}
            checked={formState.keywords.includes(keyword)}
            onChange={handleChange}
          />
          {keyword}
        </label>
      ))}
    </div>
  );
}

export default TKeywordSelector;
