import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GoalTempImage } from "../_actions/setGoal_actions";
import { useHistory } from "react-router-dom";
function SettingGoalFinish() {
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  const UserName = getUserData.NickName;
  const getGoalImage = useSelector((state) => state.Goal.GoalInfo);
  const history = useHistory();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(GoalTempImage(null));
    history.push("/MainPage");
  };
  return (
    <Fragment>
      <Container>
        <ImageArea imgSrc={getGoalImage} />
        <UserNameArea>
          {UserName}
          <div className="sla">님</div>
        </UserNameArea>
        <TextArea>
          목표설정이 완료되었습니다!
          <div className="bottom">
            차근차근 저축해
            <br />
            원하는 것을 얻길 바래요
          </div>
        </TextArea>
        <FinishButton onClick={onClose}>닫기</FinishButton>
      </Container>
    </Fragment>
  );
}

export default SettingGoalFinish;
const PopUp = keyframes`
from{
    opacity:0;
}
to {
    opacity:1;
}
`;

const FinishButton = styled.div`
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  outline: none;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  /* opacity: 0.3; */
  font-weight: bold;
`;
const TextArea = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  .bottom {
    margin-top: 35px;
  }
`;
const UserNameArea = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  .sla {
    font-weight: normal;
  }
`;
const Container = styled.div`
  /* margin-top: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgb(72, 177, 191), rgb(6, 190, 182));
  box-sizing: border-box;
  padding: 24px 16px;
  animation: ${PopUp} 1.5s backwards;
`;

const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
  width: 180px;
  height: 180px;
  background-color: #f1f4f9;
  border-radius: 50%;
  background-image: url(${(props) => `data:image/png;base64,${props.imgSrc}`});
  background-size: 180px 180px;
  background-position: center;
  background-repeat: no-repeat;
`;
