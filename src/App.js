import React from "react";
import "./App.css";
import NasaPic from "./components/nasaImg"
import DropDown from "./components/dropdown"
import styled from "styled-components"

const WrapperDiv = styled.div`
  width: 75%;
  text-align: center;
  margin: 20px auto;
  background-color: black;
  border-radius: 10px;
`;

function App() {

  return (
    <WrapperDiv>
      <div>
        <NasaPic />
        <DropDown />
      </div>
    </WrapperDiv>
  );
}

export default App;
