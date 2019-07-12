import React, { Fragment } from "react";

import "./App.css";
//import Container from "./Components/HeaderApp/styles";

import ContainerHead from "./Components/HeaderApp";
import ContentBoard from "./Components/ContentBoard";
import SquareButton from "./Components/SquareButton";

const squaresCount = () => {
  let max = 9;
  const squares = [];

  while (max--) {
    squares.push(<SquareButton key={max} />);
  }
  return squares;
};

const App = () => {
  return (
    <Fragment>
      <ContainerHead />
      <ContentBoard>{squaresCount()}</ContentBoard>
    </Fragment>
  );
};

export default App;
