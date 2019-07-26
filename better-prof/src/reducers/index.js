import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR } from "../actions/auth";



export const initialState = {
  error: "",
  students: [],
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
          }
          
    default:
      return state;
  }
};
