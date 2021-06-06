import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(6);
  const [Addition, setAddition] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>Result={Addition + num}</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(parseInt(e.target.value));
        }}
      />
      <button
        value={Addition}
        onClick={(e) => {
          setAddition(Addition + num);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default Counter;
