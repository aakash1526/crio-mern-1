/* eslint-disable react/prop-types */
import React from "react";

class Heading extends React.Component {
  constructor(props) {
    console.log("construct heading");
    super(props);
  }
  componentDidMount() {
    console.log("Heading Mounted");
  }

  componentDidUpdate() {
    console.log("Heading Updated");
  }

  componentWillUnmount() {
    console.log("Heading Unmounted");
  }

  render() {
    console.log("render heading");
    return (
      <h1>
        Full Name: {this.props.fullName} - {this.props.fvrtSubject}
      </h1>
    );
  }
}

export default Heading;
