import React, { Component } from "react";
import styled from "styled-components";
import { InputField, OutputField } from "../../named-components";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class TaskModal extends Component {
  render() {
    const { token, closeModal, createTask, handleSubmit } = this.props;

    const onSubmit = (formProps) => {
      createTask(token, formProps);
    };

    return (
      <Modal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InnerModal>
            <InputField>
              <FieldLabel>Task</FieldLabel>
              <Field
                name="task"
                type="text"
                component="input"
                autoComplete="none"
              />
            </InputField>
            <InputField>
              <FieldLabel>Description</FieldLabel>
              <Field
                name="description"
                type="text"
                component="input"
                autoComplete="none"
              />
            </InputField>
            <InputField>
              <FieldLabel>Start Date</FieldLabel>
              <Field name="startDate" type="date" component="input" />
            </InputField>
            <InputField>
              <FieldLabel>Due Date</FieldLabel>
              <Field name="dueDate" type="date" component="input" />
            </InputField>
            <OutputField>{this.props.errorMessage}</OutputField>
          </InnerModal>
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
  margin-top: 5%;
  width: 35%
  height: 50%;
  flex-direction: column;
`;

const InnerModal = styled.div`
  position: relative;
  margin: 20px;
`;

const FieldLabel = styled.div`
  font-size: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 20%;
  height: 15%;
  bottom: 15px;
  left: 15px;
`;

const CreateButton = styled.button`
  position: absolute;
  width: 30%;
  height: 15%;
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
