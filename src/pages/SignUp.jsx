import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppHeader from "../Components/AppHeader";
function SignUp() {
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={"회원가입"} />
        <TitleArea>
          <TopText>
            워니에 <br />
            오신걸 환영합니다.
          </TopText>
          <BottomText>
            워니에서 사용할 닉네임과 ID/Password를 <br />
            설정해 편하게 워니를 이용하세요.
          </BottomText>
        </TitleArea>
        <InputArea
          placeholder="사용할 닉네임을 설정해주세요."
          type="id"
        ></InputArea>
        <InputArea placeholder="ID를 입력해주세요." type="id"></InputArea>
        <InputArea
          placeholder="Password를 설정해주세요."
          type="password"
        ></InputArea>
        <InputArea
          placeholder="Password를 한번 더 입력하세요."
          type="password"
        ></InputArea>
        <SignUpButton to="/Login">회원가입</SignUpButton>
      </Container>
    </Fragment>
  );
}

export default SignUp;
const SignUpButton = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #666e78;
  font-weight: bold;
`;
const InputArea = styled.input`
  margin-bottom: 10px;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  padding: 20px 18px;
  border: 1px solid #d6dde7;
  box-sizing: border-box;
  &::placeholder {
    color: #d6dde7;
    font-size: 16px;
  }
`;
const BottomText = styled.div`
  margin-top: 10px;

  font-size: 14px;
  color: #666e78;
`;
const TopText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #666e78;
`;

const TitleArea = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
`;
const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
`;
