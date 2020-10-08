import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import AppIconImage from "../IPhoneFrame/AppIcon.png";
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
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  animation: ${PopUp} 1.5s backwards;
`;
const AppIcon = styled.div`
  border-radius: 8px;
  width: 80px;
  height: 80px;
  background-image: url(${AppIconImage});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
