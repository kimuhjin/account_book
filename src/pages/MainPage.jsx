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
  // D-day 계산 로직 아직 없음
  const RenderGoal = getGoalData.map((v, index) => {
    return (
      <Fragment key={index}>
      <AccountBox to={`/GoalDetail/:${v.Id}`}>
      <AccountTitle>{v.GoalTitle}</AccountTitle>
        <Account src={v.GoalImageSrc}>
            <AccountBalance>
              100,000원 <div className="goal">/&nbsp;{v.GoalPrice.toLocaleString()}원</div>
            </AccountBalance>
        </Account>
        <AccountBar>
        <BaseBar></BaseBar>
              <CalcAccountBar
              BarGauge={Math.round((100000 / v.GoalPrice) * 100)}
              ><BarPercent BarGauge={Math.round((100000 / v.GoalPrice) * 100)}>{Math.round((100000 / v.GoalPrice) * 100)}%</BarPercent>
              </CalcAccountBar>
            </AccountBar>
        </AccountBox>
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
              {getGoalData.length !== 1 && <TempMarginArea />}
            </AccountContainer>
          </AccountArea>
        </InfoArea>
        {/*<UsedReport />*/}
        {/*<UnexpectedUsed />*/}
      </Container>
    </Fragment>
  );
}

export default MainPage;
const BarPercent = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:15;
bottom:-10px;
right:${props=>props.BarGauge>=100 ? "0px" :'-21px' };
font-size:12px;
color:#fff;
height: 26px;
width: 42px;
border-radius:13px;
background-color:#000;
`
const AccountBox = styled(Link)`
text-decoration:none;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;

`
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

const BaseBar = styled.div`
position: relative;
  top: 30%;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 8px;
  border-radius:4px;
  box-sizing:border-box;
  background-color: #F1F4F9;
`
const CalcAccountBar = styled.div`
  position: relative;
  /* top: 30%; */
  left: 0;
  z-index: 10;
  width: ${(props) => props.BarGauge >=100 ? '100%' : `${props.BarGauge}%`};
  height: 8px;
  border-radius:4px;
  box-sizing:border-box;
  background-color: rgb(6, 190, 182);
`;

const AccountBar = styled.div`
  position: relative;
  margin-top: 15px;
  width: 100%;
  height: 26px;
  border-radius:4px;
  background-color: transparent;
`;
const AccountBalance = styled.div`
  margin-top: 15px;
  display: flex;
  text-decoration:none;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  padding:0px 16px;
  box-sizing:border-box;
  width: 100%;
  height:108px;
  font-size: 32px;
  font-weight:700;
  
line-height: 28px;
letter-spacing: -0.02em;



  background-color:#fff;
  opacity:0.9;
  color: #212829;
  .goal{
    font-weight:400;
    color: #212829;
    font-size: 16px;
  }
`;

const AccountTitle = styled.div`
  margin: 15px 0px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const Account = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
  background-color: #f1f4f9;
  min-height: 230px;
  width: 100%;
  margin-right: 16px;
  /* padding: 12px 16px; */
  box-sizing: border-box;
  border-radius: 14px;
  background-image:url(${props=>`data:image/png;base64,${props.src}`});
background-position:center;
background-repeat:no-repeat;
background-size:100%auto;
`;

const AccountContainer = styled.div`
  /* margin-top: 10px; */
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
  font-size: 16px;
  color: #666E78;
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
  font-size: 32px;
  font-weight: bold;
  color: #212829;
  .disc {
    font-size: 16px;
    font-weight: normal;
    color: #636972;
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
  /* background-image: linear-gradient(
    180deg,
    rgb(6, 190, 182),
    rgb(6, 190, 182),
    rgb(6, 190, 182),
    rgb(255, 255, 255)
  ); */
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
`;
