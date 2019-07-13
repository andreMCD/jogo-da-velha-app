import React, { Fragment } from "react";

import "./App.css";
//import Container from "./Components/HeaderApp/styles";

import ContainerHead from "./Components/HeaderApp";
import ContentBoard from "./Components/ContentBoard";
import SquareButton from "./Components/SquareButton";
import NextPlayer from "./Components/NextPlayer";

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
      <NextPlayer />
      <ContentBoard>{squaresCount()}</ContentBoard>
    </Fragment>
  );
};

export default App;
