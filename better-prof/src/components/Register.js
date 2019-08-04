import React, { Component } from 'react';
import { connect } from 'react-redux';

import { register } from '../actions/auth';

class Register extends Component {
  state = {
    username: '',
    password: ''
  };

  changeHandler = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  register = event => {
    event.preventDefault();
    this.props.register(this.state);
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <h2>Please Register Below:</h2>
        <form onSubmit={this.register}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.changeHandler}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(Register);
