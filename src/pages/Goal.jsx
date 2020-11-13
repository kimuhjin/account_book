import React, { Fragment, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import styled,{keyframes} from "styled-components";
import { HiPlus } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

import AppHeader from "../Components/AppHeader";
import GoalPopup from "../Components/Goal/GoalPopup";
import SavePopup from "../Components/Goal/SavePopup";

function Goal() {
  const [PopupOpen, setPopupOpen] = useState(false)
  const [SavePopupOpen, setSavePopupOpen] = useState(false)
  useEffect(() => {}, []);
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  const getGoalData = JSON.parse(window.localStorage.getItem("GoalData"));
  const [GoalData, setGoalData] = useState(getGoalData);

  const UserName = getUserData.NickName;
  const history = useHistory();
  const RenderGoal = GoalData.map((v, index) => {
    return (
      <Fragment key={index}>
        <GoalCard>
          <GoalPaddingArea>
            <CardTop>
              <AccountNumber>계좌 000-0000-0000 </AccountNumber>
              <ThreeDotButton onClick={()=>setPopupOpen(!PopupOpen)}>
                <ThreeDot />
              </ThreeDotButton>
            </CardTop>
            <ClickableArea to={`/GoalDetail/:${v.Id}`}>
              <Wage>
                6,000원
                <div className="divide">/{v.GoalPrice.toLocaleString()}원</div>
              </Wage>
            </ClickableArea>
          </GoalPaddingArea>
          <GoalSave>
          <GoalInfoArea>
                <GoalTitle>{v.GoalTitle}</GoalTitle>
                <GoalCategory>카테고리</GoalCategory>
              </GoalInfoArea>
            <SaveButton onClick={()=>setSavePopupOpen(!SavePopupOpen)}>저축하기</SaveButton>
          </GoalSave>
        </GoalCard>
        <Fragment>
            <BackGroundLayer PopupOpen={PopupOpen}>
            <BackGround onClick={()=>setPopupOpen(!PopupOpen)}/>
            </BackGroundLayer>
            <GoalPopup PopupOpen={PopupOpen} GoalData={GoalData} setGoalData={setGoalData} Id={v.Id}/>
            </Fragment>
            <Fragment>
            <SaveBackGroundLayer SavePopupOpen={SavePopupOpen}>
            <SaveBackGround onClick={()=>setSavePopupOpen(!SavePopupOpen)}/>
            </SaveBackGroundLayer>
            <SavePopup setSavePopupOpen={setSavePopupOpen} SavePopupOpen={SavePopupOpen} GoalData={GoalData} Id={v.Id}/>
            </Fragment>
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
              목표 성공&nbsp;
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
const FadeIn = () => keyframes`
from {
    opacity:0
}
to {
    opacity:0.5
}
`;
const Fadeout = () => keyframes`
from {
    opacity:0.5
}
to {
    opacity:0
}
`;

const SaveBackGroundLayer = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:9998;
bottom:0px;
/* left:0px; */
width:100%;
height:100%;
opacity:0.5;
background-color: #808080;
visibility: ${props => props.SavePopupOpen ? 'visible' : 'hidden'};
animation: ${props => props.SavePopupOpen ? FadeIn : Fadeout} 0.5s linear;
transition: visibility 0.5s linear;
`
const SaveBackGround = styled.div`
width:100%;
height:100%;
`

const BackGroundLayer = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:9998;
bottom:0px;
/* left:0px; */
width:100%;
height:100%;
opacity:0.5;
background-color: #808080;
visibility: ${props => props.PopupOpen ? 'visible' : 'hidden'};
animation: ${props => props.PopupOpen ? FadeIn : Fadeout} 0.5s linear;
transition: visibility 0.5s linear;
`
const BackGround = styled.div`
width:100%;
height:100%;
`
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
pointer-events:none;
  width: 18px;
  height: 18px;
  color: #abb2bb;
`;
const GoalCategory = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
    margin-left:10px;
    font-size:12px;
    padding:3px 5px;
    box-sizing:border-box;
    min-width:39px;
    height:26px;
    color:#636872;
    border-radius:13px;
    background-color:#F1F4F9;
`;
const SaveButton = styled.button`
outline:none;
  cursor: pointer;
  margin-top: 13px;
  width: 100%;
  height:56px;
  display: flex;
  border:none;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius:8px;
  box-sizing:border-box;
  background-color:#06BEB6;
`;
const GoalPaddingArea = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;
const GoalSave = styled.div`
  width: 100%;
  padding:16px;
  box-sizing:border-box;
  border-top: 1px solid #E8E8E8;
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
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 32px;
  font-weight: bold;
  .divide {
    margin-top: 3px;
    font-size: 16px;
    font-weight: normal;
    color: #636872;
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
  min-height: 280px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border:1px solid #E8E8E8;
  background-color: #fff;
`;

const MyGoal = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  color: #636872;
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
  color: #636872;
  font-size: 14px;
  font-weight: bold;
`;
const Title = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-size: 32px;
  font-family: Noto Sans KR;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 48px;
letter-spacing: -0.003em;
text-align: left;


  .GoalNumber {
    margin-bottom: 2px;
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
