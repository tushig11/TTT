import React, { Component } from "react";
import Board from "./Board";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Array(9).fill(null),
      next: true,
      move: 0
    };
  }

  checkWinner = () => {
    const data = this.state.data.slice();
    for (let i of lines) {
      let [a, b, c] = i;
      if (data[a] === data[b] && data[a] === data[c] && data[b] === data[c]) {
        return data[a];
      }
    }
  };

  fx = i => {
    let player = this.state.next ? "X" : "O";
    const arr = this.state.data.slice();
    arr[i] = player;
    this.setState({
      data: arr,
      next: !this.state.next,
      move: this.state.move + 1
    });
  };

  resetGame = () => {
    const arr = Array(9).fill(null);
    this.setState({
      data: arr,
      next: true,
      move: 0
    });
  };
  render = () => {
    const { data, next, move } = this.state;
    const winner = this.checkWinner();
    let win = winner ? true : false;
    let status = winner
      ? "Winner: " + winner
      : "Next player: " + (next ? "X" : "O");

    if (move === 9) status = "DRAW";

    return (
      <div className="game">
        <div className="board">
          <Board data={data} fx={this.fx} status={win} />
        </div>
        <div className="info">
          <h5>{status}</h5>
          <button className="reset" onClick={this.resetGame}>
            Restart Game
          </button>
        </div>
      </div>
    );
  };
}

export default Game;
