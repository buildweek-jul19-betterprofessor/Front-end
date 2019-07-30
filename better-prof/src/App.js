import React from "react";
import { BrowserRouter as Router,  Route, } from 'react-router-dom';
import HeaderBar from "./components/navigationMenu/HeaderBar";


import "./App.css";

import HomePage from "./components/HomePage";
import Login from "./components/Login";
import StudentList from "./components/StudentsList";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";



const App = () => {
  return (
    <div>
      <HeaderBar />
      <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/student-list' component={StudentList} />
        <Route exact path='/register' component={Register}/>
        <Route exact path='/dashboard' component={Dashboard}/>
    </div>
  );
};

export default App;
