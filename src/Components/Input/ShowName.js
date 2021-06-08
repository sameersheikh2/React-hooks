import React from "react";
import { Link } from "react-router-dom";
import Name from "./task3";

function ShowName() {
  return (
    <div>
      <h1>Hello {Name} </h1>
      <Link to="/Task3">Go back</Link>
    </div>
  );
}
export default ShowName;
