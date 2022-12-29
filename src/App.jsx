import React from "react";
import Button from "./components/button";
import Display from "./components/display";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      previousValue: " ",
      operation: " ",
    };
    this.layout = [
      [7, 8, 9, "x"],
      [4, 5, 6, "+"],
      [1, 2, 3, "-"],
      ["+/-", ".", 0, "="],
      ["C", "CE", "\u2190", "/"],
    ];
  }

  handleClick(value) {
    switch (value) {
      case "+":
      case "-":
      case "x":
      case "/":
        if (this.state.operation === " ") {
          this.setState({
            previousValue: this.state.displayValue,
            displayValue: "0",
            operation: value,
          });
        } else {
          this.setState({ operation: value });
        }
        break;
      case "C":
        this.setState({ displayValue: "0" });
        break;
      case "CE":
        this.setState({
          displayValue: "0",
          previousValue: " ",
          operation: " ",
        });
        break;
      case "=":
        this.setState({
          displayValue: String(this.resolveOperation()),
          previousValue: " ",
          operation: " ",
        });
        break;
      case "\u2190":
        let newValue;
        if (String(this.state.displayValue).length === 1) {
          newValue = "0";
        } else {
          newValue = this.state.displayValue.slice(
            0,
            this.state.displayValue.length - 1
          );
        }
        this.setState({ displayValue: newValue });
        break;
      case "+/-":
        if(this.state.displayValue === "0") break;
        let switchValue =
          this.state.displayValue[0] === "-"
            ? this.state.displayValue.slice(1, this.state.displayValue.length)
            : "-" + this.state.displayValue;
        this.setState({ displayValue: switchValue });
        break;
      default:
        let newestValue = this.state.displayValue + String(value);
        if (this.state.displayValue === "0" && value !== ".") {
          newestValue = value;
        }
        this.setState({ displayValue: newestValue });
        break;
    }
  }

  resolveOperation() {
    const savedNumber = Number(this.state.previousValue);
    const currentNumber = Number(this.state.displayValue);
    let result;
    switch (this.state.operation) {
      case "+":
        result = savedNumber + currentNumber;
        break;
      case "-":
        result = savedNumber - currentNumber;
        break;
      case "/":
        result = savedNumber / currentNumber;
        break;
      case "x":
        result = savedNumber * currentNumber;
        break;
      default:
        break;
    }
    return result;
  }
  render() {
    return (
      <div className="wrapper container border border-dark rounded">
        <Display
          displayValue={this.state.displayValue}
          previousValue={this.state.previousValue}
          operation={this.state.operation}
        />
        <div className="container text-center">
          <div className="row">
            <Button
              value={this.layout[4][0]}
              onClick={() => {
                this.handleClick(this.layout[4][0]);
              }}
            />
            <Button
              value={this.layout[4][1]}
              onClick={() => {
                this.handleClick(this.layout[4][1]);
              }}
            />
            <Button
              value={this.layout[4][2]}
              onClick={() => {
                this.handleClick(this.layout[4][2]);
              }}
            />
            <Button
              value={this.layout[4][3]}
              onClick={() => {
                this.handleClick(this.layout[4][3]);
              }}
            />
          </div>
          <div className="row">
            <Button
              value={this.layout[0][0]}
              onClick={() => {
                this.handleClick(this.layout[0][0]);
              }}
            />
            <Button
              value={this.layout[0][1]}
              onClick={() => {
                this.handleClick(this.layout[0][1]);
              }}
            />
            <Button
              value={this.layout[0][2]}
              onClick={() => {
                this.handleClick(this.layout[0][2]);
              }}
            />
            <Button
              value={this.layout[0][3]}
              onClick={() => {
                this.handleClick(this.layout[0][3]);
              }}
            />
          </div>
          <div className="row">
            <Button
              value={this.layout[1][0]}
              onClick={() => {
                this.handleClick(this.layout[1][0]);
              }}
            />
            <Button
              value={this.layout[1][1]}
              onClick={() => {
                this.handleClick(this.layout[1][1]);
              }}
            />
            <Button
              value={this.layout[1][2]}
              onClick={() => {
                this.handleClick(this.layout[1][2]);
              }}
            />
            <Button
              value={this.layout[1][3]}
              onClick={() => {
                this.handleClick(this.layout[1][3]);
              }}
            />
          </div>
          <div className="row">
            <Button
              value={this.layout[2][0]}
              onClick={() => {
                this.handleClick(this.layout[2][0]);
              }}
            />
            <Button
              value={this.layout[2][1]}
              onClick={() => {
                this.handleClick(this.layout[2][1]);
              }}
            />
            <Button
              value={this.layout[2][2]}
              onClick={() => {
                this.handleClick(this.layout[2][2]);
              }}
            />
            <Button
              value={this.layout[2][3]}
              onClick={() => {
                this.handleClick(this.layout[2][3]);
              }}
            />
          </div>
          <div className="row">
            <Button
              value={this.layout[3][0]}
              onClick={() => {
                this.handleClick(this.layout[3][0]);
              }}
            />
            <Button
              value={this.layout[3][1]}
              onClick={() => {
                this.handleClick(this.layout[3][1]);
              }}
            />
            <Button
              value={this.layout[3][2]}
              onClick={() => {
                this.handleClick(this.layout[3][2]);
              }}
            />
            <Button
              value={this.layout[3][3]}
              onClick={() => {
                this.handleClick(this.layout[3][3]);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
