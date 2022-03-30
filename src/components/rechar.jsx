import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class Rechar extends Component {
  state = { data: [10, 13, 7, 3, 6] };
  constructor(props) {
    super(props);
    this.state = {
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
    console.log("Render bar " + this.props.data);
    return (
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv">
              {this.props.barColors.map((color, index) => (
                <Cell key={index + 1} fill={color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div>
          <p>Number of Iterrations Before sort</p>
          <p style={{ fontSize: "80px" }}>{this.props.keyValue}</p>
        </div>
      </div>
    );
  }

  barColors = this.props.barColors;

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.barColors) {
      console.log("Shouldupdate");
      this.forceUpdate();

      return true;
    }
    return false;
  }
}

export default Rechar;
