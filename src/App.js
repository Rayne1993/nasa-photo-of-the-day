import React from "react";
import "./App.css";
import NasaPic from "./components/nasaImg"
import styled from "styled-components"

const WrapperDiv = styled.div`
  width: 75%;
  text-align: center;
  margin: 20px auto;
  background-color: teal;
  border-radius: 10px;
`;

function App() {

  return (
    <WrapperDiv>
      <div>
        <NasaPic />
      </div>
    </WrapperDiv>
  );
}

export default App;
