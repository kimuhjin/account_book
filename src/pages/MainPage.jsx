import React, { Fragment } from "react";
import styled from "styled-components";

function MainPage() {
  return (
    <Fragment>
      <Container>
        <div>메인페이지</div>
      </Container>
    </Fragment>
  );
}

export default MainPage;
const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
`;
