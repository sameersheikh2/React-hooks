import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowName from "./ShowName";

function Name() {
  const [Fname, setName] = useState("sameer");

  return (
    <form>
      Type your name here
      <input
        type="text"
        value={Fname}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={<ShowName />}>Submit</button>
    </form>
  );
}

export default Name;
