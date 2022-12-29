import React from "react";
import "../style/display.css";

class Display extends React.Component {
  render() {
    return (
      <div className="displayWrapper">
        <div className="previousValueDisplay">{this.props.previousValue}</div>
        <div className="currentValueDisplay">
          {this.props.displayValue}
          <span className="operand">{this.props.operation}</span>
        </div>
      </div>
    );
  }
}
export default Display;
