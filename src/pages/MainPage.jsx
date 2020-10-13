import React, { Fragment } from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import UsedReport from "../Components/MainPage/UsedReport";
import UnexpectedUsed from "../Components/MainPage/UnexpectedUsed";
function MainPage() {
  const getGoalData = JSON.parse(window.localStorage.getItem("GoalData"));
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  console.log();
  // D-day 계산 로직 아직 없음
  const RenderGoal = getGoalData.map((v, index) => {
    return (
      <Fragment key={index}>
        <Account>
          <MoreButton to={`/EditGoalDetail/:${v.Id}`}>
            <MoreButtonIcon />
          </MoreButton>
          <ClickableArea to={`/GoalDetail/:${v.Id}`}>
            <AccountTitle>{v.GoalTitle}</AccountTitle>
            <AccountDday>D-{v.GoalDate}</AccountDday>
            <AccountBar>
              <CalcAccountBar
                BarGauge={Math.round((100000 / v.GoalPrice) * 100)}
              ></CalcAccountBar>
            </AccountBar>
            <AccountBalance>
              100,000 &nbsp;&nbsp;/&nbsp;&nbsp; {v.GoalPrice.toLocaleString()}
            </AccountBalance>
          </ClickableArea>
        </Account>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <Container>
        <InfoArea>
          <UserInfoArea>
            <UserNameArea>
              {getUserData.NickName}님 <br />
              안녕하세요
              <div className="disc">목표까지 화이팅!</div>
            </UserNameArea>
            <UserIconArea imgSrc={getUserData.ProfileImage} />
          </UserInfoArea>
          <AccountArea>
            <AllButtonArea>
              <AllButton to="/Goal">전체 보기</AllButton>
            </AllButtonArea>
            <AccountContainer>
              {RenderGoal}
              <TempMarginArea />
            </AccountContainer>
          </AccountArea>
        </InfoArea>
        <UsedReport />
        <UnexpectedUsed />
      </Container>
    </Fragment>
  );
}

export default MainPage;
const AllButtonArea = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const TempMarginArea = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  box-sizing: border-box;
`;

const ClickableArea = styled(Link)`
  text-decoration: none;
`;

const CalcAccountBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: ${(props) => `${props.BarGauge}%`};
  height: 12px;
  background-color: rgb(6, 190, 182);
`;

const AccountBar = styled.div`
  position: relative;
  margin-top: 5px;
  width: 100%;
  height: 12px;
  background-color: #fff;
`;
const AccountBalance = styled.div`
  margin-top: 15px;
  width: 100%;
  font-size: 18px;
  color: #666e78;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreButtonIcon = styled(BsThreeDots)`
  color: #666e78;
  width: 20px;
  height: 20px;
`;
const MoreButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AccountTitle = styled.div`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #666e78;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AccountDday = styled.div`
  margin-top: 15px;
  width: 100%;
  font-size: 11px;
  color: #666e78;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Account = styled.div`
  background-color: #f1f4f9;
  min-height: 180px;
  min-width: 240px;
  margin-right: 16px;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 14px;
`;

const AccountContainer = styled.div`
  margin-top: 10px;
  padding: 0px 16px;
  box-sizing: border-box;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const AllButton = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  font-size: 12px;
  color: #fff;
`;

const AccountArea = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const UserNameArea = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  .disc {
    font-size: 12px;
    font-weight: normal;
    color: #fff;
  }
`;
const UserIconArea = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f1f4f9;
  border-radius: 50%;
  box-sizing: border-box;
  background-image: url(${(props) => `data:image/png;base64,${props.imgSrc}`});
  background-size: 80px 80px;
  background-position: center;
  background-repeat: no-repeat;
`;
const UserInfoArea = styled.div`
  padding: 24px 16px 0px 16px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoArea = styled.div`
  /* padding: 24px 16px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  background-image: linear-gradient(
    180deg,
    rgb(6, 190, 182),
    rgb(6, 190, 182),
    rgb(6, 190, 182),
    rgb(255, 255, 255)
  );
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  box-sizing: border-box;
`;
