import { REGISTER_START } from "../actions/auth";

export const initialState = {
  error: "",
  students: []
};


export const reducer = (state = initialState, action) => {
  console.log("REDUCER STATE", state);
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};
