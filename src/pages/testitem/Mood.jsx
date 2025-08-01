import React from "react";
import { Link } from "react-router-dom";

function Mood({ moodList }) {
  return (
    <div>
      <h2>나만의 감성 다이어리</h2>
      <p>일기 전체 목록</p>
      <div>
        {moodList.length === 0 ? (
          <p>작성한 일기가 없습니다.</p>
        ) : (
          moodList.map((item, index) => (
            <div key={index}>
              {item.date}:{item.content}
            </div>
          ))
        )}
      </div>
      <div>
        <button>
          <Link to={"/add"}>작성하기</Link>
        </button>
        <button>
          <Link to={"/chart"}>차트보기</Link>
        </button>
      </div>
    </div>
  );
}

export default Mood;
