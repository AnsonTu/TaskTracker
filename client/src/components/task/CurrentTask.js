import React, { Component } from "react";
import styled from "styled-components";

class CurrentTask extends Component {
  render() {
    const { task } = this.props;
    return (
      // TODO: Save the task's completion state when checkbox is clicked
      // Reformat/refactor this component. It's ugly.
      <Task>
        {`Title: ${task.task}`}
        <br />
        {`Description: ${task.description}`}
        <br />
        {`Due Date: ${task.dueDate}`}
        <br />
        {`Completion: `}
        <input type="checkbox" defaultChecked={task.completion}></input>
        <br />
      </Task>
    );
  }
}

const Task = styled.div`
  align-self: flex-start;
  margin: 10px;
  padding: 10px;
  background-color: lightgray;
`;

export default CurrentTask;
