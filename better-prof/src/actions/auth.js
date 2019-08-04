import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

//Create new user action and store user token localy//
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://betterprofessor.herokuapp.com/api/login', credentials)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })

    .catch(error => console.log(error.response));
};

//Register new user action//
export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://betterprofessor.herokuapp.com/api/register', credentials)
    .then(response => {
      dispatch({ type: REGISTER_SUCCESS });
      return true;
    })

    .catch(error => console.log(error.response));
};
