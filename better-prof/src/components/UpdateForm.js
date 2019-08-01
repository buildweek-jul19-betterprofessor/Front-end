import React from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../actions/index';

class UpdateForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>I'm an update form!</div>;
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
