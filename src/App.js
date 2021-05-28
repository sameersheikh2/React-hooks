import React from "react";
import "./App.css";
import Indx from "./Components/Routers/Route-page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./Components/Input/count";
import Tutorial1 from "./Components/Routers/Tutorial1";
import Tutorial2 from "./Components/Routers/Tutorial2";
import Tutorial3 from "./Components/Routers/Tutorial3";
import Tutorial4 from "./Components/Routers/Tutorial4";

function App() {
  return (
    <div className="App">
      <Counter />
      <Router>
        <Indx />
        <Route path="/Tutorial1" component={Tutorial1} />
        <Route path="/Tutorial2" component={Tutorial2} />
        <Route path="/Tutorial3" component={Tutorial3} />
        <Route path="/Tutorial4" component={Tutorial4} />
      </Router>
    </div>
  );
}

export default App;
