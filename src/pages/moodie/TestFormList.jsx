import styled from "@emotion/styled";
import React from "react";

function TestFormList({ diaries, onDelete }) {
  const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 600px;
    margin: 0 auto;
  `;

  const DiaryCard = styled.div`
    position: relative;
    display: flex;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 16px;
    padding: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    align-items: flex-start;
  `;

  const EmptyBox = styled.div`
    padding: 40px 20px;
    text-align: center;
    border: 2px dashed #ccc;
    border-radius: 16px;
    color: #888;
    background: #f9f9f9;
    font-size: 16px;
  `;

  const LeftCircle = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid #d6f2b6;
    border-radius: 50%;
    margin-top: 8px;
    flex-shrink: 0;
  `;

  const CardContent = styled.div`
    flex: 1;
    margin-left: 12px;
  `;

  const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const EmotionTag = styled.span`
    background: #b4e38e;
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
  `;

  const DateText = styled.span`
    font-size: 12px;
    color: #888;
  `;

  const DiaryText = styled.p`
    font-size: 14px;
    margin: 6px 0 8px 0;
    color: #333;
  `;

  const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const ProgressBar = styled.progress`
    width: 80%;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;

    &::-webkit-progress-bar {
      background-color: #f0f0f0;
      border-radius: 4px;
    }

    &::-webkit-progress-value {
      background-color: #a4e569;
    }
  `;

  const ScoreText = styled.span`
    font-size: 12px;
    color: #5b9c3e;
  `;

  const DeleteButton = styled.button`
    position: absolute;
    top: 40px;
    right: 12px;
    background: #b4e38e;
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #e74c3c;
    }
  `;

  return (
    <ListWrapper>
      {diaries.length === 0 ? (
        <EmptyBox>📭 등록된 일기가 없어요</EmptyBox>
      ) : (
        diaries.map(item => (
          <DiaryCard key={item.id}>
            <LeftCircle />
            <CardContent>
              <TopRow>
                <EmotionTag>{item.emotion}</EmotionTag>
                <DateText>{item.date}</DateText>
              </TopRow>
              <DiaryText>{item.content}</DiaryText>
              <BottomRow>
                <ProgressBar value={item.score} max={100} />
                <ScoreText>{item.score}점</ScoreText>
              </BottomRow>
            </CardContent>
            <DeleteButton onClick={() => onDelete(item.id)}>×삭제</DeleteButton>
          </DiaryCard>
        ))
      )}
    </ListWrapper>
  );
}

export default TestFormList;
