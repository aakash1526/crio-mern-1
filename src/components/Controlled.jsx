import React from "react";
import Heading from "./Heading";

// Controlled components

class Controlled extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      name: "Alok",
      email: "alok@gmail.com",
    };
  }

  color = "black";

  componentDidMount() {
    console.log("Controlled Mounted");
  }

  componentDidUpdate() {
    console.log("Controlled Updated");
  }

  componentWillUnmount() {
    console.log("Controlled Unmounted");
  }

  test() {
    console.log("Test");
  }

  render() {
    console.log("Render");
    return (
      <>
        <h1>Controlled</h1>
        {this.state.name && (
          <Heading fullName={this.state.name} fvrtSubject="CS" />
        )}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Form Submitted");
            console.log("Name", this.state.name);
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => {
                console.log(event.target.value);
                this.setState({ name: event.target.value });
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.test}>TEST</button>
      </>
    );
  }
}

export default Controlled;
