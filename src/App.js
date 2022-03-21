import React, { Component } from "react";
import "./App.css";
import Demo from "./components/demoSorting";
import Rechar from "./components/rechar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: { value: 0 },

      data: [
        { name: "Page A", uv: 10 },
        { name: "Page A", uv: 15 },
        { name: "Page A", uv: 20 },
        { name: "Page A", uv: 7 },
        { name: "Page A", uv: 2 },
        { name: "Page A", uv: 16 },
      ],
    };
  }

  render() {
    console.log("Render" + this.state.data);
    return (
      <>
        <div>
          <Rechar
            keyValue={this.state.key.value}
            barColors={this.barColors}
            data={this.state.data}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.handleChange}>
            Update
          </button>

          <button className="btn btn-danger" onClick={this.sorting}>
            Sort
          </button>
          <div>
            <p>{this.sortedArray}</p>
          </div>
        </div>
      </>
    );
  }

  randomInteger = () => {
    return Math.floor(Math.random() * 20) + 1;
  };
  randomArray = [];
  size = 50;
  handleChange = () => {
    this.reset = false;
    const key = { ...this.state.key };
    this.barColors = [];
    this.randomArray = [];

    for (let i = 0; i < this.size; i++) {
      this.randomArray.push(this.randomInteger());
      this.barColors.push("#FFce30");
    }

    key.value = 0;

    const data = this.randomArray.map((element) => ({
      name: "Page A",
      uv: element,
    }));

    this.setState({ key: key });
    this.setState({ data: data });

    console.log("random array " + this.randomArray);
  };

  barColors = [
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
    "#FFce30",
  ];

  sortedArray = [];

  arrayCompare = () => {
    let dataArray = [...this.randomArray];
    let secondDataArray = [...this.randomArray];
    for (let i = 1; i < dataArray.length; i++) {
      for (let j = 0; j < dataArray.length - 1; j++) {
        if (dataArray[j] > dataArray[j + 1]) {
          const a = dataArray[j];
          const b = dataArray[j + 1];
          secondDataArray[j] = b;
          secondDataArray[j + 1] = a;
          dataArray = [...secondDataArray];
          this.sortedArray = [...dataArray];
        }
      }
    }
  };
  reset = false;

  sorting = () => {
    if (this.reset) {
      this.reset = false;
    } else {
      this.reset = true;
    }

    const resetKey = { value: 0 };

    this.setState({ key: resetKey });
    this.arrayCompare();
    let data = {};
    let colors = [];
    for (let i = 0; i < this.size; i++) {
      colors.push("#FFce30");
    }

    let keyValue = { ...this.state.key };

    let dataArray = [...this.randomArray];
    let secondDataArray = [...this.randomArray];
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    const intervaledsorting = async () => {
      for (let i = 1; i < dataArray.length; i++) {
        console.log(i);

        let stringSortedArray = JSON.stringify(dataArray);
        let stringDataArray = JSON.stringify(this.sortedArray);

        if (stringDataArray == stringSortedArray || this.reset == false) break;
        for (let j = 0; j < dataArray.length - 1; j++) {
          if (this.reset == false) break;
          if (dataArray[j] > dataArray[j + 1]) {
            const a = dataArray[j];
            const b = dataArray[j + 1];
            secondDataArray[j] = b;
            secondDataArray[j + 1] = a;
            dataArray = [...secondDataArray];
            this.barColors = [...colors];

            this.barColors[j] = "#E389B9";
            this.barColors[j + 1] = "#E389B9";
            console.log(secondDataArray);
            console.log(this.barColors);
            data = dataArray.map((element) => ({
              name: "Page A",
              uv: element,
            }));

            keyValue.value++;

            this.setState({ key: keyValue });
            this.setState({ data: data });
            await timer(100);
          } else {
            keyValue.value++;
            this.barColors = [...colors];

            this.barColors[j] = "#E389B9";
            this.barColors[j + 1] = "#E389B9";

            this.setState({ key: keyValue });
            await timer(50);
          }
        }
      }
      this.barColors = [...colors];
    };
    intervaledsorting();
  };
}

export default App;
