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

export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_FAIL = "UPDATE_STUDENT_FAIL";


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

export const addNewStudent = newStudent => async dispatch => {
  dispatch({ type: ADD_STUDENT_START });
  return await BetterProfApiBase()
    .post(
      '/students',
      newStudent
    )
    .then(response => {
      console.log(response);
      dispatch({ type: ADD_STUDENT_SUCCESS, payload: response.data });
      return true;
    })
    .catch(error => {
      console.log(`adding user: ${newStudent}`)
      dispatch({ type: ADD_STUDENT_FAIL, payload: error });
    });
};

export const deleteStudent = id => dispatch => {
  console.log("A messsage" , id)
  dispatch({ type: DELETE_STUDENT_START });
  return BetterProfApiBase()
    .delete(`/students/${id}`)
    .then(response => {
      console.log(response.data)
      dispatch({ type: DELETE_STUDENT_SUCCESS, payload:id });
    })
    .then(()=>getStudents()(dispatch))
    .catch(error => {
      dispatch({ type: DELETE_STUDENT_FAIL, payload: error });
    });

};

export const submitUpdatedStudent = (id, updated) => dispatch => {
  dispatch({
    type: UPDATE_STUDENT
  });
  return BetterProfApiBase()
    .put(`/:${id}`, updated)
    .then(res =>
      dispatch({
        type: UPDATE_STUDENT_SUCCESS,
        payload: res.data
      })
    )
    .catch(error =>
      dispatch({
        type: UPDATE_STUDENT_FAIL,
        payload: error
      })
    );
  };
