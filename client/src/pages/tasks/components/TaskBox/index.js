import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import * as actions from "../../../../actions";
import { formatDate } from "../../../../utils";

const useStyle = makeStyles({
  taskContainer: {
    margin: "0 10px 10px",
    width: "100%"
  },
  topDivider: {
    height: "2px",
    marginBottom: "12px"
  },
  title: {
    fontWeight: "600",
    fontSize: "18px"
  },
  taskDetails: {
    fontSize: "16px",
    fontStyle: "italic"
  },
  bottomDivider: {
    height: "2px",
    marginTop: "12px"
  }
});

const TaskBox = (props) => {
  const { auth, task, deleteTask, openModal } = props;
  const { title, description, startDate, dueDate, completion } = task;

  const classes = useStyle();

  const removeTask = () => {
    deleteTask(auth, task._id);
  };

  return (
    <Grid item container xs={12}>
      <Paper className={classes.taskContainer} elevation={2}>
        <div style={{ padding: "10px" }}>
          <Typography className={classes.title}>{title}</Typography>
          <Divider className={classes.topDivider} />
          <Typography
            className={classes.taskDetails}
            style={{ marginBottom: "6px" }}
          >
            {description}
          </Typography>
          {startDate && (
            <Typography className={classes.taskDetails}>
              Start Date: {formatDate(startDate)}
            </Typography>
          )}
          {dueDate && (
            <Typography className={classes.taskDetails}>
              Due Date: {formatDate(dueDate)}
            </Typography>
          )}
          {(description || startDate || dueDate) && (
            <Divider className={classes.bottomDivider} />
          )}
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                className={classes.taskDetails}
                style={{ marginTop: "4px" }}
              >
                Mark as completed{" "}
                <Checkbox
                  style={{ padding: "0", marginBottom: "2px" }}
                  checked={completion}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Edit" arrow={true} placement="top">
                <IconButton
                  size="small"
                  style={{ marginTop: "2px" }}
                  onClick={openModal}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete" arrow={true} placement="top">
                <IconButton
                  size="small"
                  style={{ marginTop: "2px" }}
                  onClick={removeTask}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(TaskBox);
