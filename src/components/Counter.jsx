import { useState } from "react";

export const Counter = () => {
  //   let counter = 0;

  //   const increment = () => {
  //     console.log("Triggered");
  //     counter = counter + 1;
  //     console.log("counter", counter);
  //   };

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Crio");
  const [obj, setObj] = useState({
    name: "Alok",
    age: 26,
    company: "JLL",
  });

  const [company, setCompany] = useState();
  const [rollNo, setRollNo] = useState(0);

  //   const updateInput = (event) => {
  //     if (event.target.value == 5) {
  //       alert("You are not allowed to enter 5");
  //       setRollNo(0);
  //       return;
  //     }
  //     setRollNo(event.target.value);
  //   };

  function updateInput(event) {
    if (event.target.value == 5) {
      alert("You are not allowed to enter 5");
      setRollNo(0);
      return;
    }
    setRollNo(event.target.value);
  }

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      <h1>Roll No.</h1>
      <input
        type="number"
        value={rollNo}
        onChange={(event) => updateInput(event)}
      />

      <h1>Company</h1>
      <h2>{company}</h2>
      <button onClick={() => setCompany("Crio.Do")}>Update</button>

      <h1>Name</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Crio.Do")}>Update</button>

      <h1>Obj</h1>
      <span>{JSON.stringify(obj)}</span>
      <button
        onClick={
          () =>
            //   setObj((prev) => {
            //     console.log("prev", prev);

            //     return {
            //       ...prev,
            //       name: "Crio.Do",
            //       age: 10,
            //     };
            //   })
            setObj(function (prev) {
              return {
                ...prev,
                name: "Crio.Do",
                age: 10,
              };
            })
          //   setObj({
          //     name: "Crio.Do",
          //     age: 10,
          //     company: "Crio",
          //   })
        }
      >
        Update
      </button>
    </div>
  );
};
