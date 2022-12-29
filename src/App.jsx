import React from "react";
import Button from "./components/button";
import Display from "./components/display";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: " ",
    };
    this.layout = [
      [7, 8, 9, "x"],
      [4, 5, 6, "+"],
      [1, 2, 3, "-"],
      [".", 0, "="],
    ];
  }

  handleClick(value) {
    let newValue = this.state.displayValue + value;
    this.setState({ displayValue: newValue });
  }

  render() {
    return (
      <div className="wrapper container border border-dark rounded">
        <Display displayValue={this.state.displayValue} />
        <div className="container text-center">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
