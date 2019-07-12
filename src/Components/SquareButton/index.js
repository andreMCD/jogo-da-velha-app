import React from "react";

import "./styles.css";

const handlerClick = () => {
  console.log("clicou!");
};

const SquareButton = () => (
  <button onClick={handlerClick} className="square-button">
    x
  </button>
);

export default SquareButton;
