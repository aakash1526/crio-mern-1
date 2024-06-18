function Welcome(props) {
  console.log("props", props);
  const { name, update } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => update("From Child", 26, "JLL")}>
        Update Name
      </button>
    </div>
  );
}

export default Welcome;

// class Component
// Functional Component

// Before React v16, it was not possible to create a state in FunctionalComponent

// Class Component => Component with State & Props
// Functional Component => Functional Component without State

// After React v16, hooks were introduced
// Hooks made it possible to define a state in Functional component

// Functional Component
// function sum (num1, num2) {
//     return num1 + num2;
// }
