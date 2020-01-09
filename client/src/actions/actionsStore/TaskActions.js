import axios from "axios";
import { FETCH_TASKS, FETCH_FAILED } from "../types";

// Get a user's current tasks
export const fetchTasks = token => async dispatch => {
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
