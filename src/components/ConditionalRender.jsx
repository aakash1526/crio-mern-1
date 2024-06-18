import { useState } from "react";

export const ConditionalRender = () => {
  const [num, setNum] = useState(0);

  const handleValueChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        name="oddOrEven"
        value={num}
        onChange={(e) => handleValueChange(e)}
      />

      <p>{num % 2 == 0 ? "Even" : "Odd"}</p>
      {num % 2 == 0 && <h1>Hey there, I am EVEN</h1>}
      {num % 2 != 0 && <h1>Hey there, I am ODD</h1>}
    </div>
  );
};
