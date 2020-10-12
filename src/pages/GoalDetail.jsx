import React, { Fragment } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import EditIcon from "../Icons/EditIcon.png";
function GoalDetail({ match }) {
  const Id = match.params.Id.split(":")[1];
  const getGoalData = JSON.parse(window.localStorage.getItem("GoalData"));
  const history = useHistory();
  const RenderGoalDetail = getGoalData.map((v, index) => {
    if (String(v.Id) === Id) {
      return (
        <Fragment key={index}>
          <Container>
            <Header>
              <Arrow
                onClick={() => {
                  history.goBack();
                }}
              />
              <EditBtn />
            </Header>
            <MainArea imgSrc={v.GoalImageSrc}>
              <Wage>
                6,000원
                <div className="divide">/{v.GoalPrice.toLocaleString()}원</div>
              </Wage>
            </MainArea>
            <ScrollWrapper>
              <GoalTitleArea>
                <GTHeader>
                  {v.GoalTitle}
                  <div className="category">카테고리</div>
                </GTHeader>
                <GTBody>
                  <div className="top">
                    일주일에 &nbsp;
                    <div className="money">
                      {Math.round((v.GoalPrice - 6000) / (v.GoalDate / 7))}원
                    </div>
                    을 아끼면
                  </div>
                  <div className="bottom">
                    <div className="day">{v.GoalDate}일&nbsp;</div> 내로
                    목표달성!
                  </div>
                </GTBody>
              </GoalTitleArea>
              <Tab>
                <Filter>
                  최신순 <BiChevronDown size={16} />
                </Filter>
              </Tab>
              <UsedArea>
                <UsedBox />
                <UsedBox />
                <UsedBox />
                <UsedBox />
              </UsedArea>
            </ScrollWrapper>
          </Container>
        </Fragment>
      );
    } else {
      return 0;
    }
  });
  return <Fragment>{RenderGoalDetail}</Fragment>;
}

export default GoalDetail;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 212px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const UsedArea = styled.div`
  width: 100%;
  /* height: 72px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UsedBox = styled.div`
  width: 100%;
  padding: 16px;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #c3c9d1;
`;

const Filter = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 11px;
  color: #abb2bb;
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 16px;
  box-sizing: border-box;
  margin-top: 35px;
  width: 100%;
  min-height: 25px;
  background-color: #f1f4f9;
`;

const GTBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  color: #666e78;
  font-size: 20px;
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .bottom {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .money {
    font-weight: bold;
    font-size: 20px;
  }
  .day {
    font-weight: bold;
    font-size: 20px;
  }
`;

const GTHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #666e78;
  width: 100%;
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding: 3px 6px;
    font-size: 6px;
    border-radius: 13px;
    background-color: #f1f4f9;
    color: #666e78;
    box-sizing: border-box;
  }
`;

const GoalTitleArea = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  box-sizing: border-box;
`;

const Wage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666e78;
  font-size: 24px;
  font-weight: bold;
  .divide {
    margin-top: 3px;
    font-size: 12px;
    font-weight: normal;
    color: #abb2bb;
  }
`;

const EditBtn = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${EditIcon});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Arrow = styled(RiArrowLeftSLine)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #666e78;
  cursor: pointer;
`;
const Header = styled.div`
  top: 25px;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  height: 30px;
  width: 100%;
  padding-right: 10px;
  box-sizing: border-box;
`;

const MainArea = styled.div`
  /* margin-top: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  background-color: #d3d7de;
  background-image: url(${(props) => `data:image/png;base64,${props.imgSrc}`});
  background-size: 100% 230px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  position: absolute;
  /* margin-top: 15px; */
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;
