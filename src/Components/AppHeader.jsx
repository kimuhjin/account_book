import React, { Fragment } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
function AppHeader({ TitleText }) {
  const history = useHistory();
  return (
    <Fragment>
      <Header>
        <RiArrowLeftSLine
          size={30}
          style={{ color: "#666E78", cursor: "pointer" }}
          onClick={() => {
            history.goBack();
          }}
        />
        <Title>{TitleText}</Title>
        <Blank />
      </Header>
    </Fragment>
  );
}

export default AppHeader;
const Title = styled.div`
  margin-top: 3px;
  font-size: 20px;
  color: #666e78;
`;
const Blank = styled.div`
  width: 30px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
`;
