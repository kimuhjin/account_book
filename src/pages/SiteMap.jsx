import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function SiteMap() {
  return (
    <Fragment>
      <Container>
        <Links to="/">아이폰 홈스크린</Links>
        <Links to="/Login">로그인</Links>
        <Links to="/SignUp">회원가입</Links>
        <Links to="/SettingGoal">목표설정</Links>
        <Links to="/SettingGoalDetail">목표설정 상세</Links>
        <Links to="/SettingGoalFinish">목표설정완료 팝업</Links>
        <Links to="/MainPage">메인페이지</Links>
        <Links to="/EditProfile">프로필수정</Links>
        <Links to="/Goal">목표</Links>
        {/*<Links to="/GoalDetail">목표세부</Links>*/}
      </Container>
    </Fragment>
  );
}

export default SiteMap;
const Links = styled(Link)`
  margin-bottom: 5px;
  text-decoration: none;
  color: black;
`;
const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 100px;
  left: 200px;
  width: 200px;
  height: 300px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
