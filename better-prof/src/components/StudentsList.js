import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../actions/index';
import Student from './Student';

class StudentsList extends Component {
  constructor(){
    this.state={
      first:"",
      last:"",
      email:""
    }
  }
  componentDidMount() {
    this.props.getStudents();
  }

  changeHandler = event =>{
    this.setState(
      {[event.target.name]:event.target.value}
    )
  }

  submitHandler = event =>{
    const{first, last, email}=this.state;
    event.preventDefault();
    this.props.addNewStudent({first,last,email,id:Date.now()})
  }

  render() {
    return (
      <div>
        <h4>New Student</h4>
        <form onSubmit={this.submitHandler}>
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
