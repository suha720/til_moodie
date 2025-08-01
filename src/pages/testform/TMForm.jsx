import React from "react";
import TKeywordSelector from "./TKeywordSelector";
import TMoodSelector from "./TMoodSelector";

function TMForm({ formState, setFormState }) {
  const handleContentChange = e => {
    setFormState({ ...formState, content: e.target.value });
  };

  return (
    <form>
      <h2>오늘의 감정 기록</h2>
      <textarea
        placeholder="오늘 하루 있었던 일, 느낀 감정, 생각들을 자유롭게 적어보세요..."
        value={formState.content}
        onChange={handleContentChange}
        maxLength={1000}
      />
      <p>{formState.content.length}/1000자</p>

      <TKeywordSelector formState={formState} setFormState={setFormState} />
      <TMoodSelector formState={formState} setFormState={setFormState} />
    </form>
  );
}

export default TMForm;
