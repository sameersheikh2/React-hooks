import React, { useState } from "react";

const Calc = () => {
  const [count, setCount] = useState(0);

  //const onDecrement = () => {
  //setCount(count - 1);
  //};
  const onAdd = (e) => {
    setCount(e.target.value);
  };
  return (
    <div>
      <h1>Count : {count} </h1>
      <input type="number" value={count} onChange={onAdd} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};
export default Calc;
