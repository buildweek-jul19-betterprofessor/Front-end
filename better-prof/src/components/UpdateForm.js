import React from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../actions/index';

class UpdateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    };
  }

  changeHandler = event => {
    console.log(this.state);
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.updateStudent(this.props.studentId, this.state);
    this.setState({ firstname: '', lastname: '', email: '' });
  };

  render() {
    return (
      <div>
        Update Student
        <form onSubmit={this.submitHandler}>
          <input
            placeholder={this.props.firstname}
            name="firstname"
            value={this.state.firstname}
            onChange={this.changeHandler}
          />
          <input
            placeholder={this.props.lastname}
            name="lastname"
            value={this.state.lastname}
            onChange={this.changeHandler}
          />
          <input
            placeholder={this.props.email}
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <button type="submit">Update</button>
        </form>
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
  { updateStudent }
)(UpdateForm);
