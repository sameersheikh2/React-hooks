import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState("6");
  const [Addition, setAddition] = useState("");
  return (
    <div>
      <h1>Counter</h1>
      <h2>Result={Addition}</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        value={Addition}
        onClick={(e) => {
          setAddition(num + Addition);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default Counter;
