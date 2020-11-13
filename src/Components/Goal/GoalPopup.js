import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components"

function GoalPopup({PopupOpen,GoalData,setGoalData,Id}) {
    const DelClick = (e) => {
        if (window.confirm("정말 삭제하시겠습니까?") === true) {
          const FilteredGoalData = GoalData.filter(
            (v) => v.Id !== Number(e.target.value)
          );
          setGoalData(FilteredGoalData);
          window.localStorage.setItem("GoalData", JSON.stringify(FilteredGoalData));
        } else {
          return null;
        }
      };
    return (
        <Fragment>
        <Layout PopupOpen={PopupOpen}>
        <Option color="black" to={`/EditGoalDetail/:${Id}`}>
        목표 수정
        </Option>
        <Option color="red" onClick={DelClick}>
        목표 삭제
        </Option>
        </Layout>
        </Fragment>
    )
}

export default GoalPopup
const Option = styled(Link)`
text-decoration:none;
outline:none;
border:none;
background-color:#fff;
cursor: pointer;
display:flex;
justify-content:flex-start;
align-items:center;
font-size:16px;
height:50px;
width:100%;
color:${props=>props.color};
`
const FadeIn = () => keyframes`
from{
    transform:translateY(500px);
}
to {
    transform:translateY(0px);
}
`;
const Fadeout = () => keyframes`
from{
    transform:translateY(0px);
}
to {
    transform:translateY(500px);
}
`;
const Layout = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:flex-start;
width:100%;
height:144px;
padding:20px 16px;
position:absolute;
bottom:0px;
z-index:9999;
border-top-left-radius:24px;
border-top-right-radius:24px;
box-sizing:border-box;
background-color:white;
visibility: ${props => props.PopupOpen ? 'visible' : 'hidden'};
  animation: ${props => props.PopupOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;
`