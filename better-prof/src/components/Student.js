import React, { Component } from 'react';
import { deleteStudent } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UpdateForm from './UpdateForm';

class Student extends Component {
  render() {
    return (
      <div>
        <Link to="../components/StudentProfilePageView.js">
          <h3>Name: {this.props.studentName}</h3>
        </Link>
        <p>Email: {this.props.email}</p>
        <Link
          firstname={this.props.firstname}
          lastname={this.props.lastname}
          email={this.props.email}
          studentId={this.props.studentId}
          to="update">
          <button>Update</button>
        </Link>
        <button onClick={() => this.props.deleteStudent(this.props.studentId)}>
          Delete
        </button>
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
  { deleteStudent }
)(Student);
