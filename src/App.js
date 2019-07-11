import React, { Fragment } from "react";

import "./App.css";
//import Container from "./Components/HeaderApp/styles";

import Container from "./Components/HeaderApp";
import Content from "./Components/ContentApp";

const App = () => {
  return (
    <Fragment>
      <Container />
      <Content />
    </Fragment>
  );
};

export default App;
