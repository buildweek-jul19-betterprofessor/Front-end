import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

class Register extends Component {
    state = {
        username: "",
        password: ""    }


    changeHandler = (event) =>{
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value})
    }

    register = (event) =>{
        event.preventDefault();
        this.props.register(this.state);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.register}>
                    <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
                </form>
            </div>
        );
    }
}

export default connect(null, {register} ) (Register);