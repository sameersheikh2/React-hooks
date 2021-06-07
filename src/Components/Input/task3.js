import React, { useState } from "react";
import { Link } from "react-router-dom";
//import ShowName from './ShowName';

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
      <Link to="/Name" className="btn btn-block">
        Submit
      </Link>
    </form>
  );
}

export default Name;
