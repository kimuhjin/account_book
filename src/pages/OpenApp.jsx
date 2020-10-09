import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import AppLogo from "../IPhoneFrame/AppLogo.png";
import AppLogoText from "../IPhoneFrame/AppLogoText.png";
import { useHistory } from "react-router-dom";

function OpenApp() {
  const history = useHistory();
  setTimeout(() => {
    history.push("/Login");
  }, 1500);
  return (
    <Fragment>
      <Container>
        <AppIcon />
        <AppText />
      </Container>
    </Fragment>
  );
}
export default OpenApp;
const PopUp = keyframes`
from{
    opacity:0;
}
to {
    opacity:1;
}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(0deg, rgb(72, 177, 191), rgb(6, 190, 182));
  width: 100%;
  height: 100%;
  animation: ${PopUp} 1.5s backwards;
`;
const AppIcon = styled.div`
  width: 110px;
  height: 105.45px;
  background-image: url(${AppLogo});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
const AppText = styled.div`
  margin-top: 15px;
  width: 40px;
  height: 37px;
  background-image: url(${AppLogoText});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
