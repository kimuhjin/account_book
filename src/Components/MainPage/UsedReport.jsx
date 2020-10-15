import React, { Fragment } from "react";
import styled from "styled-components";
import { CgZeit } from "react-icons/cg";
function UsedReport() {
  return (
    <Fragment>
      <Container>
        <Header>
          10월 &nbsp;<div className="disc">소비내역</div>
        </Header>
        <GraphArea>
          <GraphBackground>
            <GraphBackgroundLine />
            <GraphBackgroundLine />
            <GraphBackgroundLine />
            <div className="last" />
          </GraphBackground>
          <ShowGraphArea>
            <LastLastMonth>
              <PriceTitle>68,340원</PriceTitle>
            </LastLastMonth>
            <LastMonth>
              <PriceTitle>72,340원</PriceTitle>
            </LastMonth>
            <PresentMonth>
              <PriceTitle>78,340원</PriceTitle>
            </PresentMonth>
          </ShowGraphArea>
        </GraphArea>
        <GraphInfoArea>
          <ShowMonth>8월</ShowMonth>
          <ShowMonth>9월</ShowMonth>
          <ShowMonth>
            이번달
            <PresentCircle></PresentCircle>
          </ShowMonth>
        </GraphInfoArea>
        <ReportMediumInfoArea>
          <div className="Title">3개월 평균</div>
          <CgZeit size={20} style={{ color: "#06beb6", marginLeft: "10px" }} />
          <div className="percent">15%</div>
        </ReportMediumInfoArea>
      </Container>
    </Fragment>
  );
}

export default UsedReport;
const ReportMediumInfoArea = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .Title {
    color: #666e78;
    font-size: 14px;
  }
  .percent {
    color: #06beb6;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
  }
`;
const PresentCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #06beb6;
`;
const ShowMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 63px;
  height: 25px;
  font-size: 10px;
  color: #666e78;
`;
const GraphInfoArea = styled.div`
  margin-top: 15px;
  padding: 0px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
const PriceTitle = styled.div`
  text-align: center;
  width: 100%;
  font-size: 5px;
  font-weight: bold;
  color: #fff;
`;
const PresentMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 13px 0px;
  box-sizing: border-box;
  width: 63px;
  height: 152px;
  background-color: #06beb6;
`;
const LastMonth = styled.div`
  padding: 13px 0px;
  box-sizing: border-box;
  width: 63px;
  height: 136px;
  background-color: #48b1bf;
`;
const LastLastMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 13px 0px;
  box-sizing: border-box;
  width: 63px;
  height: 111px;
  background-color: #48b1bf;
`;
const ShowGraphArea = styled.div`
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  z-index: 50;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const GraphBackgroundLine = styled.div`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border-top: 1px solid #d6dde7;
`;
const GraphBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  .last {
    height: 45px;
    border-top: 1px solid #d6dde7;
    border-bottom: 1px solid #d6dde7;
  }
`;
const GraphArea = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  box-sizing: border-box;
`;
const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
