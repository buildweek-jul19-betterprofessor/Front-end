import React from "react";


import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login"
import {BrowserRouter as Router, Route, link} from "react-router-dom"
import HomePage from "./components/HomePage";



const App = () => {
  return (
  <Router>
    <div>
      <HomePage/>
    </div>
  </Router>
  );
};

export default App;
