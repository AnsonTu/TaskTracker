import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import * as actions from "../../../../actions";
import ReduxTextField from "../../../../components/ReduxTextField";
import { formatDate } from "../../../../utils";

const useStyle = makeStyles({
  taskContainer: {
    margin: "0 10px 10px"
  }
});

const TaskForm = (props) => {
  const {
    auth,
    task,
    initialize,
    isEditing,
    closeModal,
    createTask,
    updateTask,
    handleSubmit
  } = props;
  const classes = useStyle();

  // When the form is rendered for updating a task, fill in the input fields
  useEffect(() => {
    if (task) {
      const { title, description, startDate, dueDate } = task;
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(dueDate);
      initialize({
        title,
        description,
        startDate: formattedStartDate,
        dueDate: formattedEndDate
      });
    }
  }, [initialize, task]);

  const onSubmit = (formProps) => {
    if (isEditing) {
      updateTask(auth, formProps, task._id, closeModal);
    } else {
      createTask(auth, formProps, closeModal);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid item container xs={12}>
        <Paper className={classes.taskContainer} elevation={2}>
          <div style={{ padding: "10px" }}>
            <Field
              name="title"
              label="Title"
              autoComplete="none"
              component={ReduxTextField}
            />
            <Field
              name="description"
              label="Description"
              autoComplete="none"
              component={ReduxTextField}
              multiline
            />
            <Field
              name="startDate"
              type="date"
              component={ReduxTextField}
              style={{ marginTop: "12px" }}
            />
            <Field
              name="dueDate"
              type="date"
              component={ReduxTextField}
              style={{ marginTop: "12px" }}
            />
            <Grid
              container
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
              style={{ marginTop: "12px" }}
            >
              <IconButton size="small" onClick={closeModal}>
                <CancelIcon />
              </IconButton>
              <IconButton size="small" type="submit">
                <CheckCircleIcon />
              </IconButton>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    errorMessage: state.task.errorMessage,
    auth: state.auth.authenticated
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "addtask" })
)(TaskForm);
