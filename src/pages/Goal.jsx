import React, { Fragment, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

import AppHeader from "../Components/AppHeader";

function Goal() {
  useEffect(() => {}, []);
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  const getGoalData = JSON.parse(window.localStorage.getItem("GoalData"));
  const [GoalData, setGoalData] = useState(getGoalData);

  const UserName = getUserData.NickName;
  const history = useHistory();
  const DotClick = (e) => {
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      const FilteredGoalData = GoalData.filter(
        (v) => v.Id !== Number(e.target.value)
      );
      setGoalData(FilteredGoalData);
      window.localStorage.setItem("GoalData", JSON.stringify(FilteredGoalData));
    } else {
      return null;
    }

    // console.log(FilteredGoalData);
  };
  //   console.log(getGoalData);
  const RenderGoal = GoalData.map((v, index) => {
    return (
      <Fragment key={index}>
        <GoalCard>
          <GoalPaddingArea>
            <CardTop>
              <AccountNumber>계좌 000-0000-0000 </AccountNumber>
              <ThreeDotButton value={v.Id} onClick={DotClick}>
                <ThreeDot />
              </ThreeDotButton>
            </CardTop>
            <ClickableArea to={`/GoalDetail/:${v.Id}`}>
              <Wage>
                6,000원
                <div className="divide">/{v.GoalPrice.toLocaleString()}원</div>
              </Wage>
              <GoalInfoArea>
                <GoalTitle>{v.GoalTitle}</GoalTitle>
                <GoalCategory>카테고리</GoalCategory>
              </GoalInfoArea>
            </ClickableArea>
          </GoalPaddingArea>
          <GoalSave>
            <SaveButton>저축하기</SaveButton>
          </GoalSave>
        </GoalCard>
      </Fragment>
    );
  });
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={"목표"} />
        <Header>
          <LeftArea>
            <UserNameArea>{UserName}</UserNameArea>
            <Title>
              목표 성공 &nbsp;
              <div className="GoalNumber">0</div>
              회차
            </Title>
          </LeftArea>
          <RightArea>
            <PlusIcon onClick={() => history.push("/SettingGoal")} />
          </RightArea>
        </Header>
        <MyGoal>현재 내 목표 {GoalData.length}</MyGoal>
        <GoalArea>{RenderGoal}</GoalArea>
      </Container>
    </Fragment>
  );
}

export default Goal;
const ClickableArea = styled(Link)`
  text-decoration: none;
`;
const ThreeDotButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0px;
  background-color: transparent;
  border: none;
`;
const ThreeDot = styled(BiDotsVerticalRounded)`
  pointer-events: none;

  width: 18px;
  height: 18px;
  color: #abb2bb;
`;
const GoalCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  font-size: 11px;
  background-color: #fff;
  padding: 5px 6px;
  border-radius: 13px;
  box-sizing: border-box;
  color: #666e78;
`;
const SaveButton = styled.div`
  cursor: pointer;
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666e78;
  font-size: 16px;
  font-weight: bold;
`;
const GoalPaddingArea = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;
const GoalSave = styled.div`
  width: 100%;
  border-top: 1px solid #d0d8e2;
`;
const GoalTitle = styled.div`
  color: #666e78;
  font-size: 18px;
  font-weight: bold;
`;
const GoalInfoArea = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wage = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666e78;
  font-size: 24px;
  font-weight: bold;
  .divide {
    margin-top: 3px;
    font-size: 12px;
    font-weight: normal;
    color: #abb2bb;
  }
`;
const AccountNumber = styled.div`
  color: #666e78;
  font-size: 10px;
`;
const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GoalArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const GoalCard = styled.div`
  text-decoration: none;
  width: 100%;
  height: 210px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border: none;
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
  cursor: pointer;
  width: 28px;
  height: 28px;
  font-weight: bold;
  color: #666e78;
  margin-bottom: 30px;
`;

const UserNameArea = styled.div`
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
