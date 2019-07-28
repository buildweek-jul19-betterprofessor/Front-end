import React, { Component } from 'react';
import { connect } from "react-redux";
import { getStudents } from "../actions/auth";


class StudentsList extends Component {
    componentDidMount(){
        this.props.getStudents()
    }
    render() {
        return (
            <div>
                <h2>All Students:</h2>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        students:state.students
    }
}

export default connect(mapStateToProps, {getStudents})(StudentsList);