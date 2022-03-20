import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

class Barchart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Render bar " + this.props.barInfo.datasets.data);
    console.log("key = " + this.props.keyValue);
    return (
      <div>
        <div>
          <Bar
            key={this.props.keyValue}
            data={this.props.barInfo}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div></div>
      </div>
    );
  }

  propsIntoState = () => {
    const barInfo = this.props.barInfo;
    this.setState({ barInfo: barInfo });
    return this.state.barInfo;
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.barInfo) {
      console.log("Shouldupdate");
      return true;
    }
    return false;
  }
}

export default Barchart;
