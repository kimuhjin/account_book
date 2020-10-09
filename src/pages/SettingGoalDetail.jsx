import React, { Fragment } from "react";
import styled from "styled-components";

import AppHeader from "../Components/AppHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
function SettingGoalDetail() {
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={"목표설정"} />
        <SetImageArea>
          <PlusIcon></PlusIcon>
          <ImageText>이미지 추가</ImageText>
        </SetImageArea>
        <GoalInput placeholder="아티스트 앨범" />
        <GoalPriceInput>
          <div className="price">금액은</div>
          <div className="wrapper">
            <div className="won">₩</div>
            <input className="input" placeholder="50,000" />
          </div>
        </GoalPriceInput>
        <SelectDday>1 week</SelectDday>
        <SelectDday>1 month</SelectDday>
        <SelectDday>3 month</SelectDday>
        <SelectDdayInput placeholder="직접입력" />
        <AccountSettingArea>
          <div className="title">해당 연동계좌로 저축할까요?</div>
          <AccountSelector />
        </AccountSettingArea>
        <FinishButton to="/SettingGoalFinish">완료</FinishButton>
      </Container>
    </Fragment>
  );
}

export default SettingGoalDetail;
const FinishButton = styled(Link)`
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
  font-size: 14px;
  box-sizing: border-box;
  background-color: #666e78;
  font-weight: bold;
`;
const AccountSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 65px;
  border-radius: 8px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0px 25px;
  color: #666e78;
`;
const AccountSettingArea = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .title {
    width: 100%;
    font-size: 14px;
    color: #666e78;
  }
`;
const SelectDdayInput = styled.input`
  outline: none;
  text-align: center;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  color: #666e78;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
`;
const SelectDday = styled.div`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  color: #666e78;
  border: 1px solid #d6dde7;
  background-color: #fff;
`;
const GoalPriceInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 65px;
  border-radius: 8px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0px 25px;
  color: #666e78;
  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
  }
  .won {
    color: #666e78;
    margin-bottom: 2px;
    font-size: 26px;
    font-weight: 900;
  }
  .price {
    font-size: 15px;
    color: #666e78;
    /* width: 60px; */
  }
  .input {
    width: 120px;
    outline: none;
    border: none;
    color: #666e78;
    text-align: left;
    font-size: 26px;
    font-weight: 900;
    &::placeholder {
      font-size: 26px;
      font-weight: 900;
    }
  }
`;
const GoalInput = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0px 25px;
  color: #666e78;
  font-size: 15px;
  &::placeholder {
    font-size: 15px;
    color: #666e78;
  }
`;

const PlusIcon = styled(AiOutlinePlusCircle)`
  width: 24px;
  height: 24px;
  color: #666e78;
  margin-bottom: 10px;
`;
const ImageText = styled.div`
  font-size: 14px;
  color: #666e78;
`;
const SetImageArea = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 180px;
  height: 180px;
  border: 1px solid #d6dde7;
  border-radius: 50%;
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
