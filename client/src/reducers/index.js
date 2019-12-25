import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import task from "./task";

export default combineReducers({
  auth,
  task,
  form: formReducer
});
