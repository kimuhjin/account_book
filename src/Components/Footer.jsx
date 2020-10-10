import React, { Fragment } from "react";
import styled from "styled-components";
import HomeIcon from "../Icons/홈.png";
import CalIcon from "../Icons/달력.png";
import SaveIcon from "../Icons/저금.png";
import AllIcon from "../Icons/전체보기.png";
import AccountIcon from "../Icons/계좌.png";
function Footer({ Location }) {
  return (
    <Fragment>
      <Container location={Location}>
        <홈></홈>
        <저금></저금>
        <계좌></계좌>
        <달력></달력>
        <전체보기></전체보기>
      </Container>
    </Fragment>
  );
}

export default Footer;
const 홈 = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${HomeIcon});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;
const 계좌 = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${AccountIcon});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;
const 달력 = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${CalIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
`;
const 저금 = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${SaveIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
`;
const 전체보기 = styled.div`
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
    props.location === "/OpenApp" ||
    props.location === "/SettingGoalFinish" ||
    props.location === "/Login" ||
    props.location === "/SignUp"
      ? "none"
      : ""};
`;
