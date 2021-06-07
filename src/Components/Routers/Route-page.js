import React from "react";
import { Link } from "react-router-dom";

function Indx() {
  return (
    <nav className="Nav">
      <h1>Route</h1>
      <ul className="list">
        <Link to="/Tutorial1">
          <li>Tutorial1</li>
        </Link>
        <Link to="/Tutorial2">
          <li>Tutorial2</li>
        </Link>
        <Link to="/Tutorial3">
          <li>Tutorial3</li>
        </Link>
        <Link to="/Tutorial4">
          <li>Tutorial4</li>
        </Link>
        <Link to="/task2">
          <li>Task2 Advance Counter</li>
        </Link>
        <Link to="/task3">
          <li>Task3</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Indx;
