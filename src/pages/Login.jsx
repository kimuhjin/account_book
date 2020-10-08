import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Fragment>
      <Container>
        <UserIcon></UserIcon>
        <InputArea placeholder="ID" type="id"></InputArea>
        <InputArea placeholder="PASSWORD" type="password"></InputArea>
        <LoginButton to="/SettingGoal">로그인</LoginButton>
        <SignUpFind>
          <LinkButton to="/SignUp">회원가입</LinkButton>
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
          <LinkButton to="/FindId">ID / Password 찾기</LinkButton>
        </SignUpFind>
        <SnsLoginArea>
          <SnsButton>카카오</SnsButton>
          <SnsButton>구글</SnsButton>
          <SnsButton>페북</SnsButton>
        </SnsLoginArea>
      </Container>
    </Fragment>
  );
}

export default Login;

const SnsLoginArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 5px;
  box-sizing: border-box;
`;
const SnsButton = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c3c9d1;
  width: 72px;
  height: 72px;
  background-color: #f1f4f9;
  border-radius: 50%;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: #c3c9d1;
`;

const SignUpFind = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
  font-size: 14px;
  color: #c3c9d1;
`;
const LoginButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  margin-top: 15px;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #666e78;
  font-weight: bold;
  font-size: 20px;
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

const UserIcon = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 120px;
  height: 120px;
  background-color: #f1f4f9;
  border-radius: 8px;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
`;
