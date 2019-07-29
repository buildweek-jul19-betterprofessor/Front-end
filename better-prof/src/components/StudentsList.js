import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../actions/index';
import Student from './Student';
import { studentsDataAccess } from '../actions/index';

class StudentsList extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <div>
        <h4>New Student</h4>
        <form onSubmit={this.props.addStudent}>
          <input placeholder="First Name"/>
          <input placeholder="Last Name"/>
          <input placeholder="Email"/>
          <button type="submit">Add Student</button>
        </form>
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
