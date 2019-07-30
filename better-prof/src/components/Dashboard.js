import React, { Component } from 'react';
import StudentsList from './StudentsList';
import StudentForm from "./StudentForm"



class Dashboard extends Component {

render() {
    return (
        <div>
            <StudentForm />
            <StudentsList />
        </div>
    )
    }
};

export default Dashboard;