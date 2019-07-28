import axios from "axios"
import { BetterProfApiBase } from "../components/Utils";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const GET_STUDENTS_START = "GET_STUDENTS_START";
export const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";
export const GET_STUDENTS_ERROR = "GET_STUDENTS_ERROR";

export const login = creds => dispatch => {
    dispatch({type:LOGIN_START});
    return axios.post("https://betterprofessor.herokuapp.com/api/login", creds).then(response => {localStorage.setItem('token',
    response.data.token);
    dispatch({type:LOGIN_SUCCESS});
    return true;
})

    .catch(error => console.log(error.response)); 
}

export const register = creds => dispatch => {
    dispatch({type:REGISTER_START}); 
    return axios.post("https://betterprofessor.herokuapp.com/api/register", creds).then(response => {console.log(response);dispatch({type:REGISTER_SUCCESS});
    return true;
})

    .catch(error => console.log(error.response)); 
}

export const getStudents = () => dispatch => {
    dispatch({type:GET_STUDENTS_START});
    return BetterProfApiBase().get("/students").then(response => {
    console.log(response, "from inside getStudents on Actions");
    dispatch({type:GET_STUDENTS_SUCCESS, payload: response.data});
    return true;
})

    .catch(error => dispatch({type:GET_STUDENTS_ERROR, payload: error.data})); 
}


