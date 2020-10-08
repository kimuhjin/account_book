import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import IPhoneImage from "./IPhoneFrame/IPhone6.png";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  // basename={process.env.PUBLIC_URL}
  // {window.location.pathname === "/" ? null : <Header>123</Header>}
  return (
    <BrowserRouter>
      <Container>
        <IPhoneFace>
          <Screen>
            <Header />
            <View>
              <Switch>
                <Routes />
              </Switch>
            </View>
          </Screen>
          <HomeButton to="/" />
        </IPhoneFace>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const HomeButton = styled(Link)`
  cursor: pointer;
  position: absolute;
  top: 592px;
  left: 139px;
  width: 44px;
  height: 44px;
  background-color: transparent;
  /* border: 1px solid red; */
  box-sizing: border-box;
  border-radius: 50%;
`;
const View = styled.div`
  /* padding-top: 20px; */
  width: 100%;
  /* height: 482px; */
  height: 502px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const Screen = styled.div`
  position: absolute;
  top: 78px;
  left: 18px;
  width: 285px;
  height: 502px;
  background-color: white;
  border-radius: 2px;
  /* border: 1px solid red; */
  box-sizing: border-box;
`;
const IPhoneFace = styled.div`
  position: absolute;
  width: 322px;
  height: 657px;
  background-image: url(${IPhoneImage});
  background-size: 322px 657px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  /* margin: 0px auto; */
  /* min-height: 600px; */
`;
