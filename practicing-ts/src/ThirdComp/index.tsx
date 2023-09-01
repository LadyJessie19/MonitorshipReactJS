import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import { StyledGlobal } from "./styles/global";

const ThirdComp = () => {
  return (
    <>
    <StyledGlobal />

      <Router>
          <Header />
          <Main />
      </Router>
    </>
  );
};

export default ThirdComp;
