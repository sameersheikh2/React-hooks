import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState("6");
  return (
    <div>
      <h1>Counter</h1>
      <input
        type="text"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
    </div>
  );
};
export default Counter;
