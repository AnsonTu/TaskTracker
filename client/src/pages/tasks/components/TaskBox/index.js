import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";

const useStyle = makeStyles({
  taskContainer: {
    margin: "0 10px 10px"
  },
  divider: {
    height: "2px",
    marginBottom: "12px"
  },
  title: {
    fontWeight: "600",
    fontSize: "18px"
  },
  taskDetails: {
    fontSize: "16px"
  }
});

const TaskBox = (props) => {
  const classes = useStyle();

  const {
    task: { task, description, startDate, dueDate, completion }
  } = props;
  return (
    <Grid item container xs={12}>
      <Paper className={classes.taskContainer} elevation={2}>
        <div style={{ padding: "10px" }}>
          <Typography className={classes.title}>{task}</Typography>
          <Divider className={classes.divider} />
          <Typography
            className={classes.taskDetails}
            style={{ marginBottom: "6px" }}
          >
            {description}
          </Typography>
          <Typography className={classes.taskDetails}>
            Start Date: {startDate}
          </Typography>
          <Typography className={classes.taskDetails}>
            Due Date: {dueDate}
          </Typography>
          <Typography
            className={classes.taskDetails}
            style={{ marginTop: "6px" }}
          >
            Completion:{" "}
            <Checkbox style={{ padding: "0" }} checked={completion} />
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default TaskBox;
