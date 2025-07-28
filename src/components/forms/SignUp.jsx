import styled from "@emotion/styled";
import React from "react";

const SignForm = styled.form`
  margin: 16px auto;
  width: 360px;
`;

const SignLabel = styled.label`
  color: #2c2c2c;
  display: block;
  margin: 16px 0 8px;
`;

const SignInput = styled.input`
  border: 1px solid #d1d1d1;
  color: #ababab;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
  padding: 16px 24px;
  width: 100%;
`;

const StyledInput = styled(SignInput)`
  ${props =>
    (props.type === "radio" || props.type === "checkbox") &&
    `
    display: inline-block;
    width: initial;
  `}
`;

const SignTextarea = styled.textarea`
  border: 1px solid #d1d1d1;
  color: #ababab;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
  padding: 16px 24px;
  width: 100%;
`;

const SignSelect = styled.select`
  border: 1px solid #d1d1d1;
  color: #ababab;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
  padding: 16px 24px;
  width: 100%;
`;

const SignButton = styled.button`
  background: #2c2c2c;
  border: none;
  color: #ffffff;
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin: 24px 0;
  padding: 16px;
  width: 100%;
`;

const SignLoginTitle = styled.h1`
  color: #4e4e4e;
  font-size: 36px;
  font-weight: 700;
  margin: 24px 0;
  text-align: center;
`;

function SignUp() {
  return (
    <div>
      <SignForm action="">
        <SignLoginTitle>회원가입</SignLoginTitle>
        <SignLabel htmlFor="username">아이디</SignLabel>
        <SignInput id="username" name="username" />
        <SignLabel htmlFor="password">비밀번호</SignLabel>
        <SignInput id="password" name="password" type="password" />
        <SignLabel htmlFor="password-repeat">비밀번호 확인</SignLabel>
        <SignInput
          id="password-repeat"
          name="password-repeat"
          type="password"
        />
        <SignLabel htmlFor="email">이메일</SignLabel>
        <SignInput id="email" name="email" type="email" />
        <SignLabel>성별</SignLabel>
        <SignLabel>
          <StyledInput name="sex" value="male" type="radio" />
          남성
        </SignLabel>
        <SignLabel>
          <StyledInput name="sex" value="female" type="radio" />
          여성
        </SignLabel>
        <SignLabel>
          <StyledInput name="sex" value="none" type="radio" />
          밝히고 싶지 않음
        </SignLabel>
        <SignLabel htmlFor="birthdate">생년월일</SignLabel>
        <SignInput id="birthdate" name="birthdate" type="date" />
        <SignLabel htmlFor="interest">관심사</SignLabel>
        <SignLabel>
          <StyledInput name="interest" value="programming" type="checkbox" />
          프로그래밍
        </SignLabel>
        <SignLabel>
          <StyledInput name="interest" value="sport" type="checkbox" />
          스포츠
        </SignLabel>
        <SignLabel>
          <StyledInput name="interest" value="film" type="checkbox" />
          영화
        </SignLabel>
        <SignLabel>
          <StyledInput name="interest" value="economy" type="checkbox" />
          경제
        </SignLabel>
        <SignLabel htmlFor="profession">직업</SignLabel>
        <SignSelect id="profession" name="profession">
          <option value="student">학생</option>
          <option value="office_worker">회사원</option>
          <option value="self_employed">자영업</option>
          <option value="educator">교사</option>
          <option value="athlete">운동 선수</option>
          <option value="musicien">음악가</option>
          <option value="painter">화가</option>
        </SignSelect>
        <SignLabel htmlFor="duration">프로그래밍 공부한 기간(년)</SignLabel>
        <SignInput id="duration" name="duration" min="0" type="number" />
        <SignLabel htmlFor="profile">프로필 사진</SignLabel>
        <SignInput id="profile" name="profile" type="file" />
        <SignLabel htmlFor="introduce">소개</SignLabel>
        <SignTextarea id="introduce" name="introduce"></SignTextarea>
        <SignButton>가입하기</SignButton>
      </SignForm>
    </div>
  );
}

export default SignUp;
