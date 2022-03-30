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
        { name: " ", uv: 10 },
        { name: " ", uv: 15 },
        { name: " ", uv: 20 },
        { name: " ", uv: 7 },
        { name: " ", uv: 2 },
        { name: " ", uv: 16 },
      ],
    };
  }

  render() {
    console.log("Render" + this.state.data);
    return (
      <div className="container">
        <div
          style={{
            marginTop: "20px",
            marginBottom: "15px",
          }}
        >
          <button
            className="btn btn-primary"
            style={{ margin: "5px" }}
            onClick={this.handleUpdate}
          >
            Update
          </button>

          <button
            className="btn btn-danger"
            style={{ margin: "5px" }}
            onClick={this.sorting}
          >
            Sort
          </button>
        </div>
        <div>
          <Rechar
            keyValue={this.state.key.value}
            barColors={this.barColors}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
  arraySize = 50;

  randomInteger = () => {
    return Math.floor(Math.random() * 20) + 1;
  };

  randomArray = [];
  resetCurrentSorting = false;

  handleUpdate = () => {
    this.resetCurrentSorting = false;

    const key = { ...this.state.key };
    this.barColors = [];

    //reset randomArray to 0
    this.randomArray = [];

    for (let i = 0; i < this.arraySize; i++) {
      this.randomArray.push(this.randomInteger());
      this.barColors.push("#FFce30");
    }

    key.value = 0;

    const data = this.randomArray.map((element) => ({
      name: " ",
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

  //Sorted array to compare for terminating Sorting function when array is sorted
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

  sorting = () => {
    if (this.resetCurrentSorting) {
      this.resetCurrentSorting = false;
    } else {
      this.resetCurrentSorting = true;
    }

    const resetCurrentSortingKey = { value: 0 };

    this.setState({ key: resetCurrentSortingKey });

    this.arrayCompare();

    let data = {};
    let colors = [];
    for (let i = 0; i < this.arraySize; i++) {
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

        if (
          stringDataArray == stringSortedArray ||
          this.resetCurrentSorting == false
        )
          break;

        for (let j = 0; j < dataArray.length - 1; j++) {
          if (this.resetCurrentSorting == false) break;

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
              name: " ",
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
