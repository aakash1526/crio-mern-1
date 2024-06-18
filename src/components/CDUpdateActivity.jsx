/* eslint-disable react/prop-types */
import { Component } from "react";
import axios from "axios";

class CDUpdateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async fetchEmail() {
    const res = await axios.get(
      `https://reqres.in/api/users/${this.props.userId}`
    );
    const email = res.data.data.email;

    this.setState({ email: email });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      await this.fetchEmail();
    }
  }

  async componentDidMount() {
    await this.fetchEmail();
  }

  render() {
    return (
      <div>
        <h1>CDUpdateActivity</h1>
        <h2>Email: {this.state.email}</h2>
      </div>
    );
  }
}

export default CDUpdateActivity;
