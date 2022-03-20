import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = { demoArray: [12, 20, 7, 16, 7, 2, 1, 13] };
  }

  render() {
    return (
      <>
        <div>
          {this.state.demoArray.map((number) => (
            <h1>{number}</h1>
          ))}
        </div>
        <div>
          <button className="btn btn-danger" onClick={this.sortingCall}>
            Sort
          </button>
        </div>
      </>
    );
  }
  clickAuto = false;

  sortingCall = () => {
    const demoArray = [...this.state.demoArray];
    let i = 0;
    while (i < demoArray.length) {
      this.sorting();
      i++;
    }
    console.log("I is " + i);
  };

  sorting = () => {
    let demoArray = [...this.state.demoArray];
    let seconddemoArray = [...this.state.demoArray];
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    for (let i = 1; i < demoArray.length; i++) {
      console.log(i);

      const intervaledsorting = async () => {
        for (let j = 0; j < demoArray.length - 1; j++) {
          if (demoArray[j] > demoArray[j + 1]) {
            const a = demoArray[j];
            const b = demoArray[j + 1];
            seconddemoArray[j] = b;
            seconddemoArray[j + 1] = a;
            demoArray = [...seconddemoArray];

            console.log(seconddemoArray);
            this.setState({ demoArray: demoArray });
          }
          await timer(1000);
        }
      };
      intervaledsorting();
    }
  };
}

export default Demo;
