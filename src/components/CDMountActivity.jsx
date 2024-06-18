/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

class CDMountActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  async componentDidMount() {
    const id = 1;
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log("Response", res);
    const email = res.data.data.email;
    this.setState({ email: email });
  }

  render() {
    return (
      <>
        <h1>CDMountActivity</h1>
        <h2>Email: {this.state.email}</h2>
      </>
    );
  }
}

export default CDMountActivity;
