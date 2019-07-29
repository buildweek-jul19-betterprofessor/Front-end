import { BetterProfApiBase } from '../components/Utils';
import axios from 'axios';

export const GET_STUDENTS_START = 'GET_STUDENTS_START';
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR';

export const STUDENT_ADD = 'STUDENT_ADD';
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
  dispatch({ type:STUDENT_ADD })
  return axios.get('https://betterprofessor.herokuapp.com/api/professor-student-info')
  .then(response => {
    dispatch({ type: STUDENT_DATA_ACCESS, payload: response.data})
  })
};

export const studentAdd = info => dispatch => {
  dispatch({ type: STUDENT_ADD });
};

