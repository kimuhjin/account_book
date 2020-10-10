import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AppHeader from "../Components/AppHeader";

function EditProfile() {
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={""} />
        <UserIcon>
          <PlusIcon />
        </UserIcon>
        <InfoArea>
          <Title>닉네임</Title>
          <InputArea placeholder="김워니" />
          <CheckValue></CheckValue>
        </InfoArea>
      </Container>
    </Fragment>
  );
}

export default EditProfile;
const CheckValue = styled.div``;
const InputArea = styled.input`
  margin-top: 10px;
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
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
`;
