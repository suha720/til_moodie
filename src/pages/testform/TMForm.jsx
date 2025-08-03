import React from "react";
import TKeywordSelector from "./TKeywordSelector";
import TMoodSelector from "./TMoodSelector";
import {
  TodayDiaryBox,
  TodayDiaryForm,
  TodayDiaryTitle,
} from "../moodie/MoodieAdd.style";
import { ContainerMain } from "../moodie/Moodie.style";

function TMForm({ formState, setFormState }) {
  const handleContentChange = e => {
    setFormState({ ...formState, content: e.target.value });
  };

  return (
    <ContainerMain>
      <TodayDiaryForm>
        <TodayDiaryTitle>오늘의 감정 기록</TodayDiaryTitle>
        <TodayDiaryBox
          placeholder="오늘 하루 있었던 일, 느낀 감정, 생각들을 자유롭게 적어보세요..."
          value={formState.content}
          onChange={handleContentChange}
          maxLength={1000}
          rows={10}
        />
        <p>{formState.content.length}/1000자</p>

        <TKeywordSelector formState={formState} setFormState={setFormState} />
        <TMoodSelector formState={formState} setFormState={setFormState} />
      </TodayDiaryForm>
    </ContainerMain>
  );
}

export default TMForm;
