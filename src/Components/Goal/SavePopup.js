import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components"
import sinhan_bank from "../../Icons/sinhan_bank.png"
function SavePopup({SavePopupOpen,Id}) {
    return (
        <Fragment>
        <Layout SavePopupOpen={SavePopupOpen}>
        <Title>연동 계좌</Title>
        <AccountLayout>
        <BankImage/>
        <BankData>
        신한은행
        <div className="amount">120,000원</div>
        </BankData>
        <EditButton>수정</EditButton>
        </AccountLayout>
        <SaveButton>저축하기</SaveButton>
        </Layout>
        </Fragment>
    )
}

export default SavePopup
const BankData = styled.div`
margin-left:16px;
width:100%;
font-weight:400;
  font-size:12px;
.amount{
  font-size:20px;
font-weight:bold;
  
}
`
const EditButton = styled.div`
cursor: pointer;
color:#A5AAB2;
min-width:30px;
font-size:16px;
`

const BankImage = styled.div`
min-width:48px;
min-height:48px;
background-image:url(${sinhan_bank});
background-position:center;
background-repeat:no-repeat;
background-size:100%auto;
`
const AccountLayout = styled.div`
cursor: pointer;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:69px;
border-radius:8px;
padding:16px;
box-sizing:border-box;
background-color:#F1F4F9;
`
const SaveButton = styled.button`
outline:none;
  cursor: pointer;
  margin-top: 13px;
  width: 100%;
  height:56px;
  display: flex;
  border:none;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius:8px;
  box-sizing:border-box;
  background-color:#06BEB6;
`;
const Title = styled.div`
font-size:16px;
font-weight:bold;
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
justify-content:space-between;
flex-direction:column;
align-items:flex-start;
width:100%;
min-height:240px;
padding:30px 16px;
position:absolute;
bottom:0px;
z-index:9999;
border-top-left-radius:24px;
border-top-right-radius:24px;
box-sizing:border-box;
background-color:white;
visibility: ${props => props.SavePopupOpen ? 'visible' : 'hidden'};
  animation: ${props => props.SavePopupOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;
`