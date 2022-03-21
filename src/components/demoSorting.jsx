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
          <button className="btn btn-danger" onClick={this.sorting}>
            Sort
          </button>
        </div>
      </>
    );
  }

  sorting = () => {
    let demoArray = [...this.state.demoArray];
    let seconddemoArray = [...this.state.demoArray];
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    const intervaledsorting = async () => {
      for (let i = 1; i < demoArray.length; i++) {
        console.log(i);

        for (let j = 0; j < demoArray.length - 1; j++) {
          await timer(1000);
          if (demoArray[j] > demoArray[j + 1]) {
            const a = demoArray[j];
            const b = demoArray[j + 1];
            seconddemoArray[j] = b;
            seconddemoArray[j + 1] = a;
            demoArray = [...seconddemoArray];

            console.log(seconddemoArray);
            this.setState({ demoArray: demoArray });
          }
        }
      }
    };
    intervaledsorting();
  };
}

export default Demo;
