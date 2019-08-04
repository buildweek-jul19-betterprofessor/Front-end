import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/auth';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  changeHandler = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h2>Already a member? Please Login:</h2>
        <form onSubmit={this.login}>
          <input
            type="text"
            placeholder="@EMAIL ADDRESS"
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
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
