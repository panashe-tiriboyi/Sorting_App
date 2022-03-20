import React, { Component } from "react";
import "./App.css";
import Barchart from "./components/barchart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Demo from "./components/demoSorting";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: { value: 1 },
      barInfo: {
        labels: "Algorithm",
        datasets: [
          {
            label: "sorting",
            data: [10, 13, 7, 3, 6],
            backgroundColor: [
              "rgba(250, 0, 0, 1)",
              "rgba(250, 0, 0, 1)",
              "rgba(250, 0, 0, 1)",
              "rgba(250, 0, 0, 1)",
              "rgba(250, 0, 0, 1)",
            ],
            borderColor: "rgba(0, 0, 0, 1)",
          },
        ],
      },
    };
  }

  render() {
    console.log("Render" + this.randomArray);
    return (
      <>
        <div>
          <Barchart
            keyValue={this.state.key.value}
            barInfo={this.state.barInfo}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.handleChange}>
            Update
          </button>
        </div>
        <div>
          <Demo />
        </div>
      </>
    );
  }

  randomInteger = () => {
    return Math.floor(Math.random() * 20) + 1;
  };
  randomArray = [];

  handleChange = () => {
    const key = { ...this.state.key };
    this.randomArray = [
      this.randomInteger(),
      this.randomInteger(),
      this.randomInteger(),
      this.randomInteger(),
      this.randomInteger(),
    ];

    const barInfo = {
      labels: "Algorithm",
      datasets: [
        {
          label: "sorting",
          data: [...this.randomArray],
          backgroundColor: [
            "rgba(0, 0, 250, 1)",
            "rgba(0, 0, 250, 1)",
            "rgba(0, 0, 250, 1)",
            "rgba(0, 0, 250, 1)",
            "rgba(0, 0, 250, 1)",
          ],
          borderColor: "rgba(0, 0, 0, 1)",
        },
      ],
    };

    key.value = key.value + 1;

    this.setState({ key: key });
    this.setState({ barInfo: barInfo });

    console.log("random array " + this.randomArray);
  };
}

export default App;
