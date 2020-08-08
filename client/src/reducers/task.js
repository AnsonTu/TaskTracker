import {
  FETCH_TASKS,
  FETCH_FAILED,
  CREATE_TASK,
  CREATE_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

// TODO: If we change the state's task to be an obj instead of an array,
// we can create and update the task using tasks[taskId]
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };
    case FETCH_FAILED:
      return { ...state, errorMessage: action.payload };
    case CREATE_TASK:
      const { tasks } = state;
      const allTasks = tasks.slice();
      allTasks.splice(tasks.length, 0, action.payload);
      return { ...state, tasks: allTasks };
    case CREATE_TASK_FAILED:
      return { ...state, errorMessage: action.payload };
    case UPDATE_TASK: {
      const { tasks } = state;
      const listOfTasks = tasks.slice();
      const taskIndex = listOfTasks.findIndex(
        (task) => task._id === action.payload._id
      );
      listOfTasks[taskIndex] = action.payload;
      return { ...state, tasks: listOfTasks };
    }
    case UPDATE_TASK_FAILED:
      return { ...state, errorMessage: action.payload };
    case DELETE_TASK:
      const updatedTasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      return { ...state, tasks: updatedTasks };
    case DELETE_TASK_FAILED:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
