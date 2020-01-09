import React, { Component } from "react";
import { Square } from "./Square";
import "./../styles.css";

export default class Board extends Component {
  display(i) {
    const { data, fx, status } = this.props;
    return <Square value={data[i]} fx={() => fx(i)} status={status} />;
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.display(0)}
          {this.display(1)}
          {this.display(2)}
        </div>
        <div className="row">
          {this.display(3)}
          {this.display(4)}
          {this.display(5)}
        </div>
        <div className="row">
          {this.display(6)}
          {this.display(7)}
          {this.display(8)}
        </div>
      </React.Fragment>
    );
  }
}
