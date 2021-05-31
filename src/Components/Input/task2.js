import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState("6");
  const [inputNum, setInputNum] = useState("");
  return (
    <div>
      <h1>Counter</h1>
      <h2>Result={inputNum}</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        value={inputNum}
        onClick={(e) => {
          setInputNum(num);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default Counter;
