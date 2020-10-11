import React, { Fragment, useState } from "react";

import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AiOutlinePlusCircle, AiFillCheckCircle } from "react-icons/ai";
import AppHeader from "../Components/AppHeader";

function EditProfile() {
  const history = useHistory();
  const [NickName, setNickName] = useState("");
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  const UserName = getUserData.NickName;
  const UserId = getUserData.Id;
  const OnSubmit = (e) => {
    if (NickName !== "") {
      e.preventDefault();
      getUserData.NickName = NickName;
      window.localStorage.setItem("UserValue", JSON.stringify(getUserData));
      alert("수정되었습니다.");
      history.push("/MainPage");
    } else {
      alert("변경사항이 없습니다.");
    }
  };
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={""} />
        <UserIcon>
          <PlusIcon />
        </UserIcon>
        <InfoArea>
          <Title>닉네임</Title>
          <InputArea
            placeholder={UserName}
            value={NickName}
            onChange={(e) => setNickName(e.target.value)}
          />
          <CheckValue>
            <CheckIcon />
            <div className="title">사용할 수 있는 닉네임입니다.</div>
          </CheckValue>
          <Title>ID</Title>
          <IdValue>{UserId}</IdValue>
        </InfoArea>
        <EditButton onClick={OnSubmit}>수정</EditButton>
      </Container>
    </Fragment>
  );
}

export default EditProfile;
const EditButton = styled.div`
  text-decoration: none;
  margin-top: 50px;
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

const IdValue = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  padding: 0px 18px;
  background-color: #f1f4f9;
  box-sizing: border-box;
  color: #c2c9d4;
`;
const CheckIcon = styled(AiFillCheckCircle)`
  width: 16px;
  height: 16px;
  color: #666e78;
`;
const CheckValue = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 15px;
  .title {
    margin-left: 5px;
    margin-top: 2px;
    font-size: 10px;
    color: #666e78;
  }
`;
const InputArea = styled.input`
  margin-top: 8px;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  padding: 20px 18px;
  border: 1px solid #d6dde7;
  box-sizing: border-box;
  color: #666e78;
  font-weight: bold;
  &::placeholder {
    color: #666e78;
    font-weight: bold;
    font-size: 16px;
  }
`;
const InfoArea = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const Title = styled.div`
  color: #abb2bb;
  font-weight: bold;
  font-size: 10px;
`;
const PlusIcon = styled(AiOutlinePlusCircle)`
  cursor: pointer;
  position: absolute;
  background-color: #fff;
  bottom: -10px;
  right: 0px;
  width: 24px;
  height: 24px;
  color: #666e78;
  border-radius: 50%;
  margin-bottom: 10px;
`;
const UserIcon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f1f4f9;
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
