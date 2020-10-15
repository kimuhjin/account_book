import React, { Fragment } from "react";
import styled from "styled-components";
import PoultryLeg from "../../Icons/PoultryLeg.png";
function UnexpectedUsed() {
  return (
    <Fragment>
      <Container>
        <Header>
          이 돈이면 <PoultryLegIcon />
          이다!
        </Header>
        <Disc>예상치 못한 지출</Disc>
        <UsedArea>
          <WasteUsed />
          <WasteUsed />
          <WasteUsed />
          <TempMarginArea />
        </UsedArea>
      </Container>
    </Fragment>
  );
}

export default UnexpectedUsed;
const TempMarginArea = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  box-sizing: border-box;
`;
const WasteUsed = styled.div`
  background-color: #06beb6;
  margin-right: 8px;
  min-width: 100px;
  height: 65px;
  border-radius: 8px;
  box-sizing: border-box;
`;
const UsedArea = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  min-height: 120px;
  /* height: 100%; */
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const Disc = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  font-size: 10px;
  color: #666e78;
`;
const PoultryLegIcon = styled.div`
  margin-left: 5px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${PoultryLeg});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Header = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #666e78;
  .disc {
    color: #666e78;
  }
`;
const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
