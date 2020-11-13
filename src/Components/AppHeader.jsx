import React, { Fragment } from "react";
import styled from "styled-components";
import GoBackIcon from "../Icons/GoBackIcon.png"
import { useHistory } from "react-router-dom";
function AppHeader({ TitleText }) {
  const history = useHistory();
  return (
    <Fragment>
      <Header>
        <Arrow
          onClick={() => {
            history.goBack();
          }}
        />
        <Title>{TitleText}</Title>
        <Blank>&nbsp;</Blank>
      </Header>
    </Fragment>
  );
}

export default AppHeader;
const Arrow = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 24px;
  height: 24px;
  background-image: url(${GoBackIcon});
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  color: #666e78;
  cursor: pointer;
`;

const Title = styled.div`
  margin-top: 3px;
  font-size: 20px;
  color: #666e78;
`;
const Blank = styled.div`
  width: 30px;
  height: 30px;
`;
const Header = styled.div`
  position: absolute;
  top: 20px;
  /* margin:10px 0px; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0px 9px;
  box-sizing:border-box;
  height: 40px;
  width: 100%;
`;
