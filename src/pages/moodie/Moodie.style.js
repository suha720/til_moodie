import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

export const TmpSection = styled.div`
  max-width: 600px;
  margin: 40px auto;
  height: 600px;
  background-color: #f7ffed;
`;

export const MoodieBtn = styled.button`
  max-width: 600px;
  padding: 0 20px;
  background-color: #b3ed6a;
`;

export const HamCate = styled.div``;

export const MoodiePTag = styled.p`
  font-size: 24px;
`;

// 여기서부터 추가된 것

export const ContainerMain = styled.div`
  max-width: 440px;
  margin: 0 auto;
  padding: 24px 0;
  background-color: #f7ffed;
  min-height: 100vh;
  box-sizing: border-box;
  margin-top: 72px;
`;

export const Logo = styled.div`
  padding: 24px 0;
  padding-left: 24px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Greeting = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #2b5906;
  }

  p {
    font-size: 16px;
    color: #4b7045;
  }
`;

export const ChartBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const ChartBoxText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  margin-bottom: 16px;
`;

export const ChartBoxContent = styled.div`
  height: 200px;
  border: 1px solid #f0f9e8;
  border-radius: 16px;
`;

export const EmotionBox = styled(ChartBox)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .emotions {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    width: 100%;
    gap: 8px;

    img {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 12px;
      color: #4b7045;
    }
  }

  height: 240px;
`;

export const EmotionBoxTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const RecordButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(90deg, #c6ff7f, #6ead20);
  border: none;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0;
  cursor: pointer;

  a {
    color: white;
  }
`;

export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  background: #eaf8d8;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-top: 1px solid #c8e6b1;

  button {
    background: #ffffff;
    border: 1px solid #b4dca0;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 12px;
    color: #4b7045;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #dff3c6;
      font-weight: bold;
    }
  }
`;
