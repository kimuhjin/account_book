import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// const HomeScreen = lazy(() => import("./pages/HomeScreen"));
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OpenApp from "./pages/OpenApp";
import SettingGoal from "./pages/SettingGoal";

function Routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/OpenApp" component={OpenApp} />
      <Route exact path="/SettingGoal" component={SettingGoal} />
    </Fragment>
  );
}

export default Routes;
