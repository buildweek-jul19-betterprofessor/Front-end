import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewStudent } from '../actions';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = { id: Date.now(), firstname: '', lastname: '', email: '' };
  }

  changeHandler = event => {
    console.log(this.state);
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    const { id, firstname, lastname, email } = this.state;
    event.preventDefault();
    this.props.addNewStudent({ id, firstname, lastname, email });
    this.setState({ id: Date.now(), firstname: '', lastname: '', email: '' });
  };

  render() {
    return (
      <div>
        <h4>New Student</h4>
        <form onSubmit={this.submitHandler}>
          <input
            name="firstname"
            value={this.state.firstname}
            placeholder="First Name"
            onChange={this.changeHandler}
          />
          <input
            name="lastname"
            value={this.state.lastname}
            placeholder="Last Name"
            onChange={this.changeHandler}
          />
          <input
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.changeHandler}
          />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students:state.students
  };
};

export default connect(
  mapStateToProps,
  { addNewStudent }
)(StudentForm);
