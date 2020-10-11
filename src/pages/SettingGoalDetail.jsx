import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GoalInfo } from "../_actions/setGoal_actions";
import AppHeader from "../Components/AppHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

import { Link, useHistory } from "react-router-dom";
function SettingGoalDetail() {
  const Dummy = [
    { Id: 1, Bank: "워니은행", Balance: 145000 },
    { Id: 2, Bank: "국민은행", Balance: 25000 },
  ];
  const getGoalTitle = useSelector((state) => state.Goal.GoalTitle);
  const dispatch = useDispatch();
  const history = useHistory();
  const [GoalTitle, setGoalTitle] = useState(getGoalTitle);
  const [GoalPrice, setGoalPrice] = useState("");
  const [GoalDate, setGoalDate] = useState(0);
  const [GoalAccount, setGoalAccount] = useState([]);

  const RenderDummy = Dummy.map((v) => {
    return (
      <Fragment>
        <AccountSelector
          onClick={() => setGoalAccount(Dummy.filter((i) => i.Id === v.Id))}
          value={JSON.stringify(v)}
          clicked={JSON.stringify(GoalAccount[0])}
        >
          <AccountIcon />
          <AccountData>
            <AccountBank>{v.Bank}</AccountBank>
            <AccountBalance>₩&nbsp;{v.Balance.toLocaleString()}</AccountBalance>
          </AccountData>
          <AccountCheckButton
            value={JSON.stringify(v)}
            clicked={JSON.stringify(GoalAccount[0])}
          >
            <CheckIcon
              value={JSON.stringify(v)}
              clicked={JSON.stringify(GoalAccount[0])}
            />
          </AccountCheckButton>
        </AccountSelector>
      </Fragment>
    );
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (GoalTitle !== "" && GoalPrice !== "" && GoalDate !== 0) {
      const Id = Number(new Date());
      // new Date를 통해 UUID 생성
      const GoalData = {
        Id: Id,
        GoalTitle: GoalTitle,
        GoalPrice: GoalPrice,
        GoalDate: GoalDate,
        GoalAccount: GoalAccount,
      };
      dispatch(GoalInfo(GoalData));
      const OriginData = JSON.parse(window.localStorage.getItem("GoalData"));
      // 먼저 로컬세션의 GoalData에서 해당 데이터를 받아오고
      if (OriginData === null) {
        // OriginData가 비어있으면 GoalData를 배열에 담아 로컬스토리지에 저장
        window.localStorage.setItem("GoalData", JSON.stringify([GoalData]));
        // GoalData를 배열에 담는 이유는 iterable한 데이터를 만들기 위해서
      } else if (OriginData !== null) {
        // OriginData가 비어있지 않다면 OriginData와 GoalData를 배열에 담아 로컬스토리지에 저장
        const NewData = [...OriginData, GoalData];
        console.log(NewData);
        window.localStorage.setItem("GoalData", JSON.stringify(NewData));
      }
      history.push("/SettingGoalFinish");
    } else {
      alert("입력되지 않은 폼이 있습니다.");
    }
  };
  // const PriceChange = (e) => {
  //   if (Number(e.target.value) != NaN) {
  //     setGoalPrice(Number(e.target.value.split(",").join("")));
  //   } else if (Number(e.target.value) == NaN) {
  //     alert("숫자를 입력해주세요.");
  //   }
  // };
  console.log(Number("0"));
  return (
    <Fragment>
      <Container>
        <AppHeader TitleText={"목표설정"} />
        <SetImageArea>
          <PlusIcon />
          <ImageText>이미지 추가</ImageText>
        </SetImageArea>
        <GoalInput
          placeholder={GoalTitle}
          value={GoalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
        />
        <GoalPriceInput>
          <div className="price">금액은</div>
          <div className="wrapper">
            <div className="won">₩</div>
            <input
              className="input"
              placeholder="50,000"
              value={GoalPrice.toLocaleString()}
              onChange={(e) =>
                setGoalPrice(Number(e.target.value.split(",").join("")))
              }
            />
          </div>
        </GoalPriceInput>
        <SelectDday
          value={7}
          clicked={GoalDate}
          onClick={(e) => setGoalDate(Number(e.target.value))}
        >
          1 week
        </SelectDday>
        <SelectDday
          value={30}
          clicked={GoalDate}
          onClick={(e) => setGoalDate(Number(e.target.value))}
        >
          1 month
        </SelectDday>
        <SelectDday
          value={90}
          clicked={GoalDate}
          onClick={(e) => setGoalDate(Number(e.target.value))}
        >
          3 month
        </SelectDday>
        <SelectDdayInput
          placeholder="직접입력"
          value={GoalDate}
          onChange={(e) => setGoalDate(Number(e.target.value))}
        />
        <AccountSettingArea>
          <div className="title">해당 연동계좌로 저축할까요?</div>
          {RenderDummy}
        </AccountSettingArea>
        <FinishButton onClick={onSubmit}>완료</FinishButton>
      </Container>
    </Fragment>
  );
}

export default SettingGoalDetail;
const PopUp = keyframes`
from{
    opacity:0;
}
to {
    opacity:1;
}
`;
const CheckIcon = styled(BiCheck)`
  width: 18px;
  height: 18px;
  color: ${(props) => (props.value === props.clicked ? "#06BEB6" : "#d6dde7")};
`;
const AccountCheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  padding: 0px;
  box-sizing: border-box;
  background-color: #fff;
  border: ${(props) =>
    props.value === props.clicked ? "1px solid #06BEB6" : "1px solid #d6dde7"};
`;

const AccountData = styled.div`
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const AccountBalance = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #666e78;
`;
const AccountBank = styled.div`
  font-size: 14px;
  color: #666e78;
`;
const AccountIcon = styled.div`
  min-width: 45px;
  min-height: 45px;
  border-radius: 50%;
  background-color: #d3d7de;
`;
const FinishButton = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  outline: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #666e78;
  font-weight: bold;
`;
const AccountSelector = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  border: ${(props) =>
    props.value === props.clicked ? "1px solid #06BEB6" : "1px solid #d6dde7"};

  background-color: #fff;
  box-sizing: border-box;
  padding: 16px;
  color: #666e78;
`;
const AccountSettingArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .title {
    margin: 20px 0px;
    width: 100%;
    font-size: 14px;
    color: #666e78;
  }
`;
const SelectDdayInput = styled.input`
  outline: none;
  text-align: center;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  color: #666e78;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
`;
const SelectDday = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  color: ${(props) => (props.clicked === props.value ? "#06BEB6" : "#666e78")};
  border: ${(props) =>
    props.clicked === props.value ? "2px solid #06BEB6" : "1px solid #d6dde7"};
  background-color: #fff;
`;
const GoalPriceInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 65px;
  border-radius: 8px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0px 25px;
  color: #666e78;
  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
  }
  .won {
    color: #666e78;
    margin-bottom: 2px;
    font-size: 26px;
    font-weight: 900;
  }
  .price {
    font-size: 15px;
    color: #666e78;
    /* width: 60px; */
  }
  .input {
    width: 120px;
    outline: none;
    border: none;
    color: #666e78;
    text-align: left;
    font-size: 26px;
    font-weight: 900;
    &::placeholder {
      font-size: 26px;
      color: #d6dde7;
      font-weight: 900;
    }
  }
`;
const GoalInput = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #d6dde7;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0px 25px;
  color: #666e78;
  font-size: 15px;
  &::placeholder {
    font-size: 15px;
    color: #666e78;
  }
`;

const PlusIcon = styled(AiOutlinePlusCircle)`
  width: 24px;
  height: 24px;
  color: #666e78;
  margin-bottom: 10px;
`;
const ImageText = styled.div`
  font-size: 14px;
  color: #666e78;
`;
const SetImageArea = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 180px;
  height: 180px;
  border: 1px solid #d6dde7;
  border-radius: 50%;
`;
const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  /* animation: ${PopUp} 1.5s backwards; */
`;
