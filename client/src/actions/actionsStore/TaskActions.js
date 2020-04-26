import axios from "axios";
import {
  FETCH_TASKS,
  FETCH_FAILED,
  CREATE_TASK,
  CREATE_TASK_FAILED,
} from "../types";

// Get a user's current tasks
export const fetchTasks = (token) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3090/tasks", {
      // Pass the user's auth token to access the authenticated endpoint
      headers: { authorization: token },
    });
    dispatch({ type: FETCH_TASKS, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_FAILED, payload: "Could not get tasks" });
  }
};

// Create a new task
export const createTask = (token, formProps) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3090/tasks/add", {
      headers: { authorization: token },
      data: {
        title: formProps.title,
        description: formProps.description,
        startDate: formProps.startDate,
        dueDate: formProps.dueDate,
      },
    });
    dispatch({ type: CREATE_TASK, payload: response.data });
  } catch (e) {
    dispatch({ type: CREATE_TASK_FAILED, payload: "Could not create task" });
  }
};
