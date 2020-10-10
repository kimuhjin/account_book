import React, { Fragment } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
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
const Arrow = styled(RiArrowLeftSLine)`
  /* position: fixed; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  height: 30px;
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
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
`;
