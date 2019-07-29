import { BetterProfApiBase } from '../components/Utils';

export const GET_STUDENTS_START = 'GET_STUDENTS_START';
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR';

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
