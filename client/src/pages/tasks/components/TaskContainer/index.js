import React, { useState } from "react";
import TaskBox from "../TaskBox";
import TaskForm from "../TaskForm";

const TaskContainer = (props) => {
  const { task } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleStartEditing = () => {
    setIsEditing(true);
  };
  const handleStopEditing = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    <TaskForm task={task} isEditing={true} closeModal={handleStopEditing} />
  ) : (
    <TaskBox task={task} openModal={handleStartEditing} />
  );
};

export default TaskContainer;
