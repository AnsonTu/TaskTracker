import axios from "axios";
import {
  FETCH_TASKS,
  FETCH_FAILED,
  CREATE_TASK,
  CREATE_TASK_FAILED
} from "../types";

// Get a user's current tasks
export const fetchTasks = (token) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3090/tasks", {
      // Pass the user's auth token to access the authenticated endpoint
      headers: { authorization: token }
    });
    dispatch({ type: FETCH_TASKS, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_FAILED, payload: "Could not get tasks" });
  }
};

// Create a new task
export const createTask = (token, formProps, onSuccess) => async (dispatch) => {
  try {
    const { title, description, startDate, dueDate } = formProps;
    const data = {
      title,
      description,
      startDate,
      dueDate
    };
    const response = await axios.post("http://localhost:3090/tasks/add", data, {
      headers: { authorization: token }
    });
    dispatch({ type: CREATE_TASK, payload: response.data });
    onSuccess();
  } catch (e) {
    dispatch({ type: CREATE_TASK_FAILED, payload: "Could not create task" });
  }
};
