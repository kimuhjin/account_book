import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Box>가계부 웹 프로젝트</Box>
    </Container>
  );
}

export default App;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #808080;
  border-radius: 5px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 600px;
`;
