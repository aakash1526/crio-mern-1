// import { Component } from "react";
// import CDUpdateActivity from "./components/CDUpdateActivity";

import { ConditionalRender } from "./components/ConditionalRender";
// import { Counter } from "./components/Counter";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userId: 1 };
//   }

//   componentDidUpdate() {
//     console.log("App.js - componentDidUpdate called");
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="number"
//           value={this.state.userId}
//           onChange={(e) => this.setState({ userId: e.target.value })}
//           min={1}
//         />
//         <CDUpdateActivity userId={this.state.userId} />
//       </div>
//     );
//   }
// }

// ComponentWillUnmount *Demo*
// import { Component } from "react";
// import StockData from "./components/Stock";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { checked: false };
//   }

//   handleChecked(e) {
//     this.setState({
//       checked: e.target.checked,
//     });
//   }

//   render() {
//     return (
//       <div>
//         Show live stock data
//         <input
//           type="checkbox"
//           value={this.state.checked}
//           onClick={(e) => this.handleChecked(e)}
//         />
//         {this.state.checked && <StockData />}
//       </div>
//     );
//   }
// }

// import { useState } from "react";
// import Welcome from "./components/Welcome";

// export default function App() {
//   const obj = {
//     name: "Alok Raj",
//     compant: "JLL",
//   };
//   const [name, setName] = useState("Crio.Do");

//   function updateName(name, age, companyName) {
//     console.log("Name", name);
//     console.log("age", age);
//     console.log("companyName", companyName);
//     setName(name);
//   }

//   return <Welcome name={name} update={updateName} obj={obj} />;
// }

// Parent will have a state => and a function which updates parent state

// To children => state and handler both will be passed as props => Child can simply use state to render something => Child will invoke handler function which has been received as props => It will update parent state => When parent state gets updated child will render itself to show latest data.

// How to maintain state in a Functional component
// Hooks => useState

const App = () => {
  return (
    <div>
      {/* <Counter counter={5} /> */}
      <ConditionalRender />
    </div>
  );
};

export default App;
