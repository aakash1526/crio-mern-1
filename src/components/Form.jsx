import React from "react";

// Uncontrolled components

class Form extends React.Component {
  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Form Submitted");
          console.log("Name", event.target.name.value);
        }}
      >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
