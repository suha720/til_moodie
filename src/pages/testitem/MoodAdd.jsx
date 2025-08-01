import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <button type="submit">등록하기</button>
      </form>
      <button>
        <Link to={"/"}>이전</Link>
      </button>
    </div>
  );
}

export default MoodAdd;
