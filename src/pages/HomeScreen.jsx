import React, { Fragment } from "react";
import styled from "styled-components";
import WallPaper from "../IPhoneFrame/WallPaper.png";
import AppIconImage from "../IPhoneFrame/AppIcon.png";
import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <Fragment>
      <Container>
        <App to="/OpenApp">
          <AppIcon />
          <AppTitle>워니</AppTitle>
        </App>
      </Container>
    </Fragment>
  );
}

export default HomeScreen;
const App = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 68px;
  text-decoration: none;
  /* border: 1px solid red; */
`;
const AppTitle = styled.div`
  color: #fff;
  font-size: 11px;
`;
const AppIcon = styled.div`
  border-radius: 8px;
  width: 50px;
  height: 50px;
  background-image: url(${AppIconImage});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-image: url(${WallPaper});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 20px;
`;
