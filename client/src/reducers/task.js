import {
  FETCH_TASKS,
  FETCH_FAILED,
  CREATE_TASK,
  CREATE_TASK_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };
    case FETCH_FAILED:
      return { ...state, errorMessage: action.payload };
    case CREATE_TASK:
      return { ...state, tasks: action.payload };
    case CREATE_TASK_FAILED:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
