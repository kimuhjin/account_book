import React, { Fragment } from "react";
import styled from "styled-components";
import HomeIcon from "../Icons/홈.png";
import CalIcon from "../Icons/달력.png";
import SaveIcon from "../Icons/저금.png";
import AllIcon from "../Icons/전체보기.png";
import AccountIcon from "../Icons/계좌.png";
import { Link } from "react-router-dom";
function Footer({ Location }) {
  return (
    <Fragment>
      <Container location={Location}>
        <Home to="MainPage" />
        <Save to="MainPage" />
        <Account to="MainPage" />
        <Cal to="MainPage" />
        <All to="MainPage" />
      </Container>
    </Fragment>
  );
}

export default Footer;
const Home = styled(Link)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${HomeIcon});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;
const Account = styled(Link)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${AccountIcon});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;
const Cal = styled(Link)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${CalIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
`;
const Save = styled(Link)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${SaveIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
`;
const All = styled(Link)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${AllIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 999px;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background-color: #eeeeee;

  display: ${(props) =>
    props.location === "/" ||
    props.location === "/account_book/" ||
    props.location === "/account_book" ||
    props.location === "/OpenApp" ||
    props.location === "/SettingGoalFinish" ||
    props.location === "/Login" ||
    props.location === "/SignUp"
      ? "none"
      : ""};
`;
