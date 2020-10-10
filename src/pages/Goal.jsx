import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi";

import AppHeader from "../Components/AppHeader";

function Goal() {
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={"목표"} />
        <Header>
          <LeftArea>
            <UserName>김워니</UserName>
            <Title>
              목표 성공 &nbsp;<div className="GoalNumber">3</div>
              회차
            </Title>
          </LeftArea>
          <RightArea>
            <PlusIcon />
          </RightArea>
        </Header>
        <MyGoal>현재 내 목표 3</MyGoal>
        <GoalArea>
          <GoalCard />
          <GoalCard />
        </GoalArea>
      </Container>
    </Fragment>
  );
}

export default Goal;

const GoalArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const GoalCard = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background-color: #f1f4f9;
`;

const MyGoal = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: #c3c9d1;
`;

const PlusIcon = styled(HiPlus)`
  width: 28px;
  height: 28px;
  font-weight: bold;
  color: #666e78;
  margin-bottom: 30px;
`;

const UserName = styled.div`
  color: #666e78;
  font-size: 12px;
  font-weight: bold;
`;
const Title = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #666e78;
  font-size: 24px;

  .GoalNumber {
    margin-bottom: 2px;
    color: #666e78;
    font-weight: bold;
  }
`;
const LeftArea = styled.div`
  height: 100%;
`;
const RightArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Header = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
