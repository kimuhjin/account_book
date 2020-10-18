import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { GoalTitle } from "../_actions/setGoal_actions";
import AppHeader from "../Components/AppHeader";
import ArtistIcon from "../Icons/아티스트.png";
import AirplaneIcon from "../Icons/비행기티켓.png";
import Airplane_Thumb from "../Icons/비행기티켓_Thumb.png";
import Music_Thumb from "../Icons/음악_Thumb.png";
import Sport_Thumb from "../Icons/스포츠_Thumb.png";
function SettingGoal() {
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  const UserName = getUserData.NickName;
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(GoalTitle(e.target.value));
    history.push("/SettingGoalDetail");
  };
  return (
    <Fragment>
      <Container>
        {/*<BackgroundCircleColorArea />*/}
        <AppHeader TitleText={"목표설정"} />
        <UserNameArea>
          {UserName}
          <div className="sla">님</div>
        </UserNameArea>

        <TextArea>갖고싶었던 것 말만 하세요!</TextArea>
        <RecommendGoalArea>
          <RecommendGoal value="비행기 티켓" onClick={onSubmit}>
            <GoalTitleArea>비행기 티켓</GoalTitleArea>
            <GoalIcon icon={AirplaneIcon} />
            <GoalPriceArea>₩ 550,000</GoalPriceArea>
          </RecommendGoal>
          <RecommendGoal value="아티스트 앨범" onClick={onSubmit}>
            <GoalTitleArea>아티스트 엘범</GoalTitleArea>
            <GoalIcon icon={ArtistIcon} />
            <GoalPriceArea>₩ 550,000</GoalPriceArea>
          </RecommendGoal>
        </RecommendGoalArea>
        <GoalCategory value="스포츠" onClick={onSubmit}>
          <GoalTableTitleArea>스포츠</GoalTableTitleArea>
          <GoalCategoryIcon icon={Sport_Thumb} />
        </GoalCategory>
        <GoalCategory value="음악" onClick={onSubmit}>
          <GoalTableTitleArea>음악</GoalTableTitleArea>

          <GoalCategoryIcon icon={Music_Thumb} />
        </GoalCategory>
        <GoalCategory value="여행" onClick={onSubmit}>
          <GoalTableTitleArea>여행</GoalTableTitleArea>

          <GoalCategoryIcon icon={Airplane_Thumb} />
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
const BackgroundCircleColorArea = styled.div`
  position: absolute;
  top: 250px;
  z-index: 1;
  width: 360px;
  height: 250px;
  border-radius: 50%;
  background-color: #47b2bf;
`;
const GoalCategoryIcon = styled.div`
  pointer-events: none;
  width: 24px;
  height: 32px;
  background-image: url(${(props) => props.icon});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
const GoalIcon = styled.div`
  pointer-events: none;
  width: 80px;
  height: 80px;

  background-image: url(${(props) => props.icon});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
const GoalPriceArea = styled.div`
  pointer-events: none;
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;
const GoalTableTitleArea = styled.div`
  pointer-events: none;
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;
const GoalTitleArea = styled.div`
  pointer-events: none;
  font-size: 20px;
  color: #47b2bf;
  font-weight: bold;
`;
const GoalCategory = styled.button`
  z-index: 888;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
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
const RecommendGoal = styled.button`
  z-index: 888;
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
  border: 1px solid #47b2bf;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;
const TextArea = styled.div`
  /* z-index: 888; */
  margin-top: 10px;
  width: 100%;
  color: #000;
  font-size: 20px;
`;
const UserNameArea = styled.div`
  /* z-index: 888; */
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  font-size: 30px;
  color: #47b2bf;
  font-weight: bold;
  .sla {
    color: #000;
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: normal;
  }
`;
const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  /* animation: ${PopUp} 1.5s backwards; */
`;
