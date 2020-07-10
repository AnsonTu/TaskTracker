import { AUTH_USER, AUTH_ERROR, AUTH_CLEAR_ERROR } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case AUTH_CLEAR_ERROR:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
}
