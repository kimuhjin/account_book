import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppHeader from "../Components/AppHeader";
import { useHistory } from "react-router-dom";
function SignUp() {
  const [NickName, setNickName] = useState("");
  const [Id, setId] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [CheckPassWord, setCheckPassWord] = useState("");
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    if (PassWord === CheckPassWord) {
      let IdValue = { Id: Id, NickName: NickName, PassWord: PassWord };
      window.localStorage.setItem("UserValue", JSON.stringify(IdValue));
      history.push("/Login");
    } else {
      alert("패스워드를 확인해 주세요.");
    }
  };
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
          value={NickName}
          onChange={(e) => setNickName(e.target.value)}
        ></InputArea>
        <InputArea
          placeholder="ID를 입력해주세요."
          type="id"
          value={Id}
          onChange={(e) => setId(e.target.value)}
        ></InputArea>
        <InputArea
          placeholder="Password를 설정해주세요."
          type="password"
          value={PassWord}
          onChange={(e) => setPassWord(e.target.value)}
        ></InputArea>
        <InputArea
          placeholder="Password를 한번 더 입력하세요."
          type="password"
          value={CheckPassWord}
          onChange={(e) => setCheckPassWord(e.target.value)}
        ></InputArea>
        <SignUpButton onClick={onSubmit}>회원가입</SignUpButton>
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
  background-color: #06beb6;
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
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
`;
