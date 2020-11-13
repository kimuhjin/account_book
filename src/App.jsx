import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import IPhoneImage from "./IPhoneFrame/IPhone6.png";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SiteMap from "./pages/SiteMap";
function App() {
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  setInterval(() => {
    setLocation(window.location.pathname);
  }, 200);
  const [Location, setLocation] = useState("");
  return (
    <BrowserRouter>
      <Wrapper>
        <Container>
          {/*<IPhoneFace>*/}
            <Screen>
              <Header Location={Location} />
              <View>
                <Switch>
                  <Routes />
                </Switch>
                <Footer Location={Location} />
              </View>
            </Screen>
            <HomeButton to="/" />
          {/*</IPhoneFace>*/}
          <SiteMap />
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  /* height: 850px; */
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 480px) {
    height: 100%;
  }
  @media (max-width: 320px) {
    align-items: flex-start;
    height: 100%;
  }
`;

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
  height: 100%;
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
  /* top: 78px; */
  /* left: 18px; */
  width: 375px;
  height: 100%;
  background-color: white;
  border-radius: 2px;
  border: 1px solid red;
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
