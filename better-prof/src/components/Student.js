import React, { Component } from 'react';
import { deleteStudent } from '../actions/index';
import { connect } from 'react-redux';

class Student extends Component {
  render() {
    return (
      <div>
        <h3>Name: {this.props.studentName}</h3>
        <p>Email: {this.props.email}</p>
        <button onClick={this.props.deleteStudent(this.props.key)}>
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
