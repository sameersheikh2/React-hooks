import React from "react";
import { Link } from "react-router-dom";
//import Name from './task3'

function ShowName() {
  return (
    <div>
      <h1>Hello </h1>
      <Link to="/Task3">Previous page</Link>
    </div>
  );
}
export default ShowName;