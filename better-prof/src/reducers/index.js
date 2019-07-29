import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR, } from "../actions/auth";

import {GET_STUDENTS_START, GET_STUDENTS_SUCCESS, GET_STUDENTS_ERROR } from "../actions/index"


export const initialState = {
  error: "",
  students: [],
  studentsRetrieve: false,
  signinUp: false,
};

export const reducer = (state = initialState, action) => {
  console.log("REDUCER STATE", state);
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: "",
        signinUp: true,
      };

      case REGISTER_SUCCESS:
        return {
          ...state,
          error:"",
          signinUp: false,
          token: localStorage.getItem("token"),
        };

        case REGISTER_ERROR:
          return {
            ...state,
            error: action.payload,
            signinUp:false,
          };
        case GET_STUDENTS_START:
          return {
            ...state,
            error:"",
            studentsRetrieve: true,
          };
        case GET_STUDENTS_SUCCESS:
          return {
            ...state,
            error: "",
            studentsRetrieve: false,
            students: action.payload
          };
        case GET_STUDENTS_ERROR:
          return{
            ...state,
            error: action.payload,
          }
          
    default:
      return state;
  }
};
