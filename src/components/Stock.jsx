import { Component } from "react";
import axios from "axios";

class StockData extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: 0, value: null };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getStockData(), 2000);
  }

  getStockData = async () => {
    const res = await axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    const data = res.data;
    const value = Object.values(data["Time Series (5min)"])[this.state.entry][
      "4. close"
    ];

    this.setState((state, props) => ({
      entry: state.entry + 1,
      value: value,
    }));
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  render() {
    console.log("Render");
    return (
      <div>
        IBM stock value {this.state.value && <span>{this.state.value}</span>}
      </div>
    );
  }
}

export default StockData;
