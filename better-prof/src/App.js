import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HeaderBar from "./components/navigationMenu/HeaderBar";
import UpdateForm from "./components/UpdateForm"
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import StudentList from "./components/StudentsList";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import StudentProfilePageView from "./components/StudentProfilePageView";
import ProjectList from './components/ProjectList';

import "./App.css";

const App = () => {
  return (
    <div>
      <HeaderBar />
      <Route exact path='/' component={HomePage}/>
      {/* <HomePage/> */}
        <Route exact path='/login' component={Login} />        
        <Route exact path='/student-list' component={StudentList}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/StudentProfilePageView' component={StudentProfilePageView} />
        <Route path='/project-list' component={ProjectList}/>
        <Route path="/update" component={UpdateForm}></Route>
    </div>
  );
};

export default App;
