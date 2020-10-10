import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// const HomeScreen = lazy(() => import("./pages/HomeScreen"));
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OpenApp from "./pages/OpenApp";
import SettingGoal from "./pages/SettingGoal";
import SettingGoalDetail from "./pages/SettingGoalDetail";
import SettingGoalFinish from "./pages/SettingGoalFinish";
import MainPage from "./pages/MainPage";
import EditProfile from "./pages/EditProfile";
import Goal from "./pages/Goal";
import GoalDetail from "./pages/GoalDetail";

function Routes() {
  return (
    <Fragment>
      <Route exact path="/OpenApp" component={OpenApp} />

      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SettingGoal" component={SettingGoal} />
      <Route exact path="/SettingGoalDetail" component={SettingGoalDetail} />
      <Route exact path="/SettingGoalFinish" component={SettingGoalFinish} />
      <Route exact path="/MainPage" component={MainPage} />
      <Route exact path="/EditProfile" component={EditProfile} />
      <Route exact path="/Goal" component={Goal} />
      <Route exact path="/GoalDetail" component={GoalDetail} />
    </Fragment>
  );
}

export default Routes;
// const PopUp = keyframes`
// from{
//     opacity:0;
// }
// to {
//     opacity:1;
// }
// `;
// const ViewAnimation = styled.div`
//   width: 100%;
//   height: 100%;
//   animation: ${PopUp} 1.5s backwards;
// `;
