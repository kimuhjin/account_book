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
            <GoalTitleArea>₩ 550,000</GoalTitleArea>
          </RecommendGoal>
          <RecommendGoal value="아티스트 앨범" onClick={onSubmit}>
            <GoalTitleArea>아티스트 엘범</GoalTitleArea>
            <GoalIcon icon={ArtistIcon} />
            <GoalTitleArea>₩ 50,000</GoalTitleArea>
          </RecommendGoal>
        </RecommendGoalArea>
        <GoalCategory value="스포츠" onClick={onSubmit}>
          <GoalTitleArea>스포츠</GoalTitleArea>
          <GoalCategoryIcon icon={Sport_Thumb} />
        </GoalCategory>
        <GoalCategory value="음악" onClick={onSubmit}>
          <GoalTitleArea>음악</GoalTitleArea>
          <GoalCategoryIcon icon={Music_Thumb} />
        </GoalCategory>
        <GoalCategory value="여행" onClick={onSubmit}>
          <GoalTitleArea>여행</GoalTitleArea>
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
const GoalTitleArea = styled.div`
  pointer-events: none;
  font-size: 20px;
  color: #666e78;
  font-weight: bold;
`;
const GoalCategory = styled.button`
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
const UserNameArea = styled.div`
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
