import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../actions/index';
import Student from './Student';

class StudentsList extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <div>
        <h2>All Students:</h2>
        {this.props.students.map(student => {
          return (
            <Student
            key={student.id}
              studentName={`${student.firstname} ${student.lastname}`}
              email={student.email}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

export default connect(
  mapStateToProps,
  { getStudents }
)(StudentsList);
