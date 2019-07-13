import React, { Component } from "react";

import "./styles.css";

class SquareButton extends Component {
  state = { content: "X" };

  handleClick = () => {
    this.setState(
      this.state.content === "X" ? { content: "O" } : { content: "X" }
    );
    console.log("Clicou");
  };

  render() {
    return (
      <button onClick={this.handleClick} className="square-button">
        {this.state.content}
      </button>
    );
  }
}

//const handlerClick = () => {
//  console.log("clicou!");
//};

//const SquareButton = () => (
//  <button onClick={handlerClick} className="square-button">
//    x
//  </button>
//);

export default SquareButton;
