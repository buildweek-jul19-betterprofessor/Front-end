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
                "Inside Students List"
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