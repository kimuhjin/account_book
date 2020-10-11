import React from "react";
import styled from "styled-components";
function Header({ Location }) {
  let clockTime;
  function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    clockTime = `
      ${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }
  function init() {
    clock();
    setInterval(clock, 1000);
  }
  init();
  return <HeaderArea location={Location}>{clockTime}</HeaderArea>;
}

export default Header;

const HeaderArea = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: ${(props) =>
    props.location === "/" ||
    props.location === "/account_book/" ||
    props.location === "/account_book"
      ? "transparent"
      : "#d3d3d3"};
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  background-size: 100% 40px;
  background-position: center;
  background-repeat: no-repeat;
`;
