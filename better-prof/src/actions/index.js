import { BetterProfApiBase } from '../components/Utils';
import axios from 'axios';

export const GET_STUDENTS_START = 'GET_STUDENTS_START';
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR';

export const ADD_STUDENT_START = 'ADD_STUDENT_START';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAIL = 'ADD_STUDENT_FAIL';

export const DELETE_STUDENT_START = 'DELETE_STUDENT_START';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAIL = 'DELETE_STUDENT_FAIL';

export const STUDENT_DATA_ACCESS = 'STUDENT_DATA_ACCESS';

export const getStudents = () => dispatch => {
  dispatch({ type: GET_STUDENTS_START });
  return BetterProfApiBase()
    .get('/students')
    .then(response => {
      console.log(response, 'from inside getStudents on Actions');
      dispatch({ type: GET_STUDENTS_SUCCESS, payload: response.data });
      return true;
    })

    .catch(error =>
      dispatch({ type: GET_STUDENTS_ERROR, payload: error.data })
    );
};

export const studentsDataAccess = () => dispatch => {
  dispatch({ type: ADD_STUDENT_START });
  return axios
    .get('https://betterprofessor.herokuapp.com/api/professor-student-info')
    .then(response => {
      dispatch({ type: STUDENT_DATA_ACCESS, payload: response.data });
    });
};

export const addNewStudent = newStudent => dispatch => {
  dispatch({ type: ADD_STUDENT_START });
  const mytoken = localStorage.getItem('token');
  console.log('mytoken:', mytoken);
  axios
    .post(
      'https://betterprofessor.herokuapp.com/api/students',
      { headers: { "Authorization": mytoken } },
      newStudent
    )
    .then(response => {
      dispatch({ type: ADD_STUDENT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(`adding user: ${newStudent}`)
      dispatch({ type: ADD_STUDENT_FAIL, payload: error });
    });
};

export const deleteStudent = id => dispatch => {
  dispatch({ type: DELETE_STUDENT_START });
  return BetterProfApiBase()
    .delete(`/students/:${id}`)
    .then(response => {
      dispatch({ type: DELETE_STUDENT_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETE_STUDENT_FAIL, payload: error });
    });
};
