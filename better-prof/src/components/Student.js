import React, { Component } from 'react';


class Student extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.studentName}</h3>
                <p>{this.props.email}</p>
            </div>
        );
    }
}

export default Student