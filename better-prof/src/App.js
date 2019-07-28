import React from "react";


import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login"
import {BrowserRouter as Router, Route, link} from "react-router-dom"



const App = () => {
  return (
  <Router>
    <div>
      <Register/>
      <Login/>
    </div>
  </Router>
  );
};

export default App;
