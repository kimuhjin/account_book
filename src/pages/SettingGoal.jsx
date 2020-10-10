import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import AppHeader from "../Components/AppHeader";

function SettingGoal() {
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={"목표설정"} />
        <UserName>
          김워니
          <div className="sla">님</div>
        </UserName>
        <TextArea>갖고싶었던 것 말만 하세요!</TextArea>
        <RecommendGoalArea>
          <RecommendGoal to="/SettingGoalDetail">
            <GoalTitle>비행기 티켓</GoalTitle>
            <GoalImage />
            <GoalTitle>₩ 550,000</GoalTitle>
          </RecommendGoal>
          <RecommendGoal to="/SettingGoalDetail">
            <GoalTitle>아티스트 엘범</GoalTitle>
            <GoalImage />
            <GoalTitle>₩ 50,000</GoalTitle>
          </RecommendGoal>
        </RecommendGoalArea>
        <GoalCategory to="/SettingGoalDetail">
          <GoalTitle>스포츠</GoalTitle>
        </GoalCategory>
        <GoalCategory to="/SettingGoalDetail">
          <GoalTitle>음악</GoalTitle>
        </GoalCategory>
        <GoalCategory to="/SettingGoalDetail">
          <GoalTitle>여행</GoalTitle>
        </GoalCategory>
      </Container>
    </Fragment>
  );
}

export default SettingGoal;
const PopUp = keyframes`
from{
    opacity:0;
}
to {
    opacity:1;
}
`;
const GoalImage = styled.div`
  width: 90px;
  height: 90px;
`;
const GoalTitle = styled.div`
  font-size: 20px;
  color: #666e78;
  font-weight: bold;
`;
const GoalCategory = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  width: 100%;
  height: 55px;
  border-radius: 8px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0px 25px;
`;
const RecommendGoalArea = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;
const RecommendGoal = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #666e78;
  min-width: 170px;
  min-height: 170px;
  margin-right: 15px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;
const TextArea = styled.div`
  margin-top: 10px;
  width: 100%;
  color: #666e78;
  font-size: 20px;
`;
const UserName = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 30px;
  color: #666e78;
  font-weight: bold;
  .sla {
    font-weight: normal;
  }
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
  /* animation: ${PopUp} 1.5s backwards; */
`;
