import React, { Component } from "react";
import styled from "styled-components";
import {
  InputField,
  OutputField
} from "../../../../components/named-components";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../../actions";

class TaskModal extends Component {
  render() {
    const { token, closeModal, createTask, handleSubmit } = this.props;

    const inputStyles = { resize: "none", fontSize: "16px" };
    const descriptionStyles = { ...inputStyles, height: "90px" };

    const onSubmit = (formProps) => {
      createTask(token, formProps);
    };

    return (
      <Modal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <InputField>
              <FieldLabel>Task</FieldLabel>
              <Field
                name="task"
                type="text"
                component="input"
                autoComplete="none"
                style={inputStyles}
              />
            </InputField>
            <InputField>
              <FieldLabel>Description</FieldLabel>
              <Field
                name="description"
                type="text"
                component="textarea"
                autoComplete="none"
                style={descriptionStyles}
              />
            </InputField>
            <InputField>
              <FieldLabel>Start Date</FieldLabel>
              <Field
                name="startDate"
                type="date"
                component="input"
                style={inputStyles}
              />
            </InputField>
            <InputField>
              <FieldLabel>Due Date</FieldLabel>
              <Field
                name="dueDate"
                type="date"
                component="input"
                style={inputStyles}
              />
            </InputField>
            <OutputField>{this.props.errorMessage}</OutputField>
          </ModalContent>
          <CloseButton onClick={closeModal}>Close</CloseButton>
          <CreateButton>Create Task</CreateButton>
        </form>
      </Modal>
    );
  }
}

const Modal = styled.div`
  position: absolute;
  border: 2px solid black;
  background-color: lightgray;
  margin-top: 75px;
  width: 500px;
  height: 40%;
`;

const ModalContent = styled.div`
  position: relative;
  margin: 20px;
`;

const FieldLabel = styled.div`
  font-size: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 15%;
  height: 12%;
  bottom: 15px;
  left: 15px;
`;

const CreateButton = styled.button`
  position: absolute;
  width: 25%;
  height: 12%;
  bottom: 15px;
  right: 15px;
`;

function mapStateToProps(state) {
  return { errorMessage: state.task.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "addtask" })
)(TaskModal);
