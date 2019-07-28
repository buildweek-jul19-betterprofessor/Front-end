import React from "react";
import { BrowserRouter as Router, Route, } from 'react-router-dom';


import "./App.css";

import HomePage from "./components/HomePage";
import Login from "./components/Login";
import StudentList from "./components/StudentsList";



const App = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/student-list' component={StudentList} />
      <HomePage/>
    </div>
  );
};

export default App;
