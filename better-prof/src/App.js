import React from 'react';

import './App.css';

import Register from './components/Register';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import StudentList from './components/StudentsList';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/student-list" component={StudentList} />
        <Route exact path="/register" component={Register}/>
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
