import React, { Fragment } from "react";
import styled from "styled-components";

function UsedReport() {
  return (
    <Fragment>
      <Container>
        <Header>
          10월 &nbsp;<div className="disc">소비내역</div>
        </Header>
        <GraphArea></GraphArea>
      </Container>
    </Fragment>
  );
}

export default UsedReport;
const GraphArea = styled.div`
  width: 100%;
  min-height: 150px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #06beb6;
  .disc {
    color: #666e78;
  }
`;
const Container = styled.div`
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
