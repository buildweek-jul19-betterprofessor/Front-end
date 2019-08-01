import {
  GET_STUDENTS_START,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  ADD_STUDENT_START,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  UPDATE_STUDENT,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL
} from '../actions/index';

import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/auth';

export const initialState = {
  error: '',
  students: [],
  studentsRetrieve: false,
  signinUp:   false,
  addStudent: false,
  deleteStudent:false,
  loading:false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_STUDENT_START:
      return {
        ...state,
        deleteStudent:true
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        deleteStudent:false
      };
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        deleteStudent: false
      }
    case ADD_STUDENT_START:
      return {
        ...state,
        addStudent: true
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    case ADD_STUDENT_FAIL:
      return {
        ...state,
        addStudent: false,
        error: action.payload
      };
    case REGISTER_START:
      return {
        ...state,
        error: '',
        signinUp: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: '',
        signinUp: false,
        token: localStorage.getItem('token')
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        signinUp: false
      };
    case GET_STUDENTS_START:
      return {
        ...state,
        error: '',
        studentsRetrieve: true
      };
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        error: '',
        studentsRetrieve: false,
        students: action.payload
      };
    case GET_STUDENTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
      case UPDATE_STUDENT:
        return {
          ...state,
          loading: true
        };
      case UPDATE_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          errors: "",
          STUDENT: action.payload
        };
      case UPDATE_STUDENT_FAIL:
        return {
          ...state,
          loading: true,
          errors: action.payload
        };
    default:
      return state;
  }
};
