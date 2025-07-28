import styled from "@emotion/styled";
import React, { useState } from "react";

const FormWrapper = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eee;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #d0e7c6;
  font-size: 14px;
  resize: none;
  outline-color: #b8de99;
  background-color: #f8fff4;
  box-sizing: border-box;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const CharCount = styled.span`
  font-size: 12px;
  color: #888;
`;

const SubmitButton = styled.button`
  background-color: #a1d769;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
`;

function TestForm({ onAddDiary }) {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === "") return;

    const newDiary = {
      id: Date.now(),
      content: text,
      date: new Date().toLocaleDateString(),
      emotion: "😊",
      score: 85,
    };

    onAddDiary(newDiary);
    setText("");
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>오늘의 감정일기</Label>
      <TextArea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="오늘 하루 있었던 일, 느낀 감정, 생각들을 자유롭게 적어보세요. 솔직한 마음이 가장 중요해요.."
        maxLength={500}
      />
      <Footer>
        <CharCount>{text.length}/500자</CharCount>
        <SubmitButton type="submit">감정분석하기</SubmitButton>
      </Footer>
    </FormWrapper>
  );
}

export default TestForm;
