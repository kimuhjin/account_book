import React, { Fragment, useState } from "react";
import styled from "styled-components";
import AppLogo from "../IPhoneFrame/AppLogo.png";
import KakaoLogo from "../Icons/카카오.png";
import FacebookLogo from "../Icons/페이스북.png";
import GoogleLogo from "../Icons/구글.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserInfo } from "../_actions/user_actions";
function Login() {
  const [Id, setId] = useState("");
  const [PassWord, setPassWord] = useState("");
  const UserCheck = JSON.parse(window.localStorage.getItem("UserValue"));
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    if (Id === UserCheck.Id && PassWord === UserCheck.PassWord) {
      dispatch(UserInfo());
      const CheckGoalExist = JSON.parse(
        window.localStorage.getItem("GoalData")
      );
      if (CheckGoalExist === null) {
        // CheckGoalExist이 False라면 목표설정으로 이동
        history.push("/SettingGoal");
      } else if (CheckGoalExist !== null) {
        // CheckGoalExist이 True라면 메인페이지로 이동
        history.push("/MainPage");
      }
    } else {
      alert("아이디 혹은 비밀번호를 확인해주세요.");
    }
  };
  const KeyboardEvt = (e) => {
    if (e && e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <Fragment>
      <Container>
        <AppIcon></AppIcon>
        <InputArea
          placeholder="ID"
          type="id"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          onKeyUp={KeyboardEvt}
        ></InputArea>
        <InputArea
          placeholder="PASSWORD"
          type="password"
          value={PassWord}
          onChange={(e) => setPassWord(e.target.value)}
          onKeyUp={KeyboardEvt}
        ></InputArea>
        <LoginButton onClick={onSubmit}>로그인</LoginButton>
        <SignUpFind>
          <LinkButton to="/SignUp">회원가입</LinkButton>
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
          <LinkButton to="/FindId">ID / Password 찾기</LinkButton>
        </SignUpFind>
        <SnsLoginArea>
          <SnsButton IconSrc={KakaoLogo} />
          <SnsButton IconSrc={FacebookLogo} />
          <SnsButton IconSrc={GoogleLogo} />
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
  padding: 0px 30px;
  box-sizing: border-box;
`;
const SnsButton = styled.div`
  cursor: pointer;
  outline: none;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: #c3c9d1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.IconSrc});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const SignUpFind = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 14px;
  color: #fff;
`;
const LoginButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #06beb6;
  margin-top: 15px;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #fff;
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
  border: 1px solid transparent;
  box-sizing: border-box;
  &::placeholder {
    color: #a5aab2;
    font-size: 14px;
  }
`;

const AppIcon = styled.div`
  margin-bottom: 30px;
  width: 80px;
  height: 105.45px;
  background-image: url(${AppLogo});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  background-image: linear-gradient(0deg, rgb(72, 177, 191), rgb(6, 190, 182));
`;
