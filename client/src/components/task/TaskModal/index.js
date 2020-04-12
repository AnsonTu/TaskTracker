import React, { Component } from "react";
import styled from "styled-components";
import { Content } from "../../named-components";

class TaskModal extends Component {
  render() {
    return <Modal></Modal>;
  }
}

const Modal = styled(Content)`
  background-color: darkgray;
  margin-top: 5%;
  width: 80%;
  height: 70%;
  justify-content: left;
  flex-direction: column;
`;

export default TaskModal;
