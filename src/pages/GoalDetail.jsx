import React, { Fragment } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "../Icons/EditIcon.png";
import AppHeader from "../Components/AppHeader";
function GoalDetail({ match }) {
  const Id = match.params.Id.split(":")[1];
  const getGoalData = JSON.parse(window.localStorage.getItem("GoalData"));
  const history = useHistory();
  const RenderGoalDetail = getGoalData.map((v, index) => {
    if (String(v.Id) === Id) {
      return (
        <Fragment key={index}>
          <Container>
          <Fragment key={index}>
          <AccountBox to={`/GoalDetail/:${v.Id}`}>
          <AccountTitle>{v.GoalTitle}
          <div className="category">{v.GoalTitle}</div>
          </AccountTitle>
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
          <GoalTitleArea>
                <GTBody>일주일에
                &nbsp;
                <div className="detail">
                      {Math.round((v.GoalPrice - 6000) / (v.GoalDate / 7))}원
                    </div>
                  을 아끼면&nbsp;
                    <div className="detail">{v.GoalDate}일&nbsp;</div> 내로
                    목표달성!
                </GTBody>
              </GoalTitleArea>
              <Tab>
                <Filter>
                  최신순 <BiChevronDown size={16} />
                </Filter>
              </Tab>
            
              <UsedArea>
                <UsedBox />
                <UsedBox />
                <UsedBox />
                <UsedBox />
                <UsedBox />
                <UsedBox />
              </UsedArea>
            
          </Container>
        </Fragment>
      );
    }
  });
  return <Fragment>
  <AppHeader TitleText={""} />
  {RenderGoalDetail}</Fragment>;
}

export default GoalDetail;
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
  .category{
    display: flex;
  justify-content: center;
  align-items: center;
    margin-left:10px;
    font-size:12px;
    font-weight:bold;
    min-width:39px;
    height:26px;
    border-radius:13px;
    background-color:#F1F4F9;
    padding:3px 5px;
    box-sizing:border-box;
  }
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
padding:0px 16px;
box-sizing: border-box;
text-decoration:none;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;

`
const ImageArea = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
  width: 100px;
  height: 100px;
  background-color: #f1f4f9;
  /* border-radius: 50%; */
  background-image: url(${(props) => `data:image/png;base64,${props.imgSrc}`});
  background-size: 180px 180px;
  background-position: center;
  background-repeat: no-repeat;
`;
const ScrollWrapper = styled.div`
  width: 100%;
  height: 212px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const UsedArea = styled.div`
 width: 100%;
  height: 212px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const UsedBox = styled.div`
  width: 100%;
  padding: 16px;
  min-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #c3c9d1;
`;

const Filter = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 11px;
  color: #636872;
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 16px;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  min-height: 32px;
  background-color: #f1f4f9;
`;

const GTBody = styled.div`
padding:0px 16px;
box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  color: #666e78;
  font-size: 16px;
  .detail {
   color:#06BEB6;
  }
`;


const GoalTitleArea = styled.div`
  width: 100%;
  /* height: 80px; */
  box-sizing: border-box;
`;

const Wage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  .divide {
    margin-top: 3px;
    font-size: 12px;
    font-weight: normal;
  }
`;

const EditBtn = styled(Link)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${EditIcon});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Arrow = styled(RiArrowLeftSLine)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
`;
const Header = styled.div`
  top: 30px;
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  height: 30px;
  width: 100%;
  padding-right: 10px;
  padding-left: 5px;
  box-sizing: border-box;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  background-image: linear-gradient(0deg, rgb(72, 177, 191), rgb(6, 190, 182));
`;

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;
