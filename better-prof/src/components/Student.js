import React, { Component } from 'react';


class Student extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.studentName}</h3>
                <p>Email: {this.props.email}</p>
            </div>
        );
    }
}

export default Student