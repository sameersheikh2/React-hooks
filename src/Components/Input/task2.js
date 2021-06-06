import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(6);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setCounter(counter + num);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default Counter;
