import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { useModal } from "../../../../utils";

const TaskForm = React.lazy(() => import("../TaskForm"));

const useStyle = makeStyles({
  column: {
    marginTop: "20px",
    marginRight: "15px",
    minHeight: "100px",
    backgroundColor: "#F5EBC1"
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    paddingTop: "8px",
    paddingLeft: "16px"
  },
  divider: {
    width: "92%",
    height: "3px;"
  },
  columnContainer: {
    minWidth: "50px",
    minHeight: "50px",
    maxHeight: "700px",
    marginTop: "8px",
    overflowY: "auto"
  },
  button: {
    backgroundColor: "#D1C985",
    padding: "6px 12px",
    margin: "32px 0 8px 8px"
  },
  buttonText: {
    textTransform: "none",
    fontSize: "16px",
    marginTop: "3px",
    marginLeft: "6px"
  }
});

const ListColumn = (props) => {
  const { title, showButton } = props;
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const classes = useStyle();

  return (
    <Grid item container xs={12} sm={2} direction="column">
      <Paper className={classes.column}>
        <Typography className={classes.title}>{title}</Typography>
        <Grid item container justify="center" xs={12}>
          <Divider className={classes.divider} />
          <div className={classes.columnContainer}>
            {props.children}
            {isOpen && (
              <Suspense fallback={null}>
                <TaskForm isEditing={false} closeModal={handleCloseModal} />
              </Suspense>
            )}
          </div>
        </Grid>
        {showButton && (
          <Button
            className={classes.button}
            variant="text"
            onClick={handleOpenModal}
          >
            <NoteAddIcon fontSize="small" />
            <Typography className={classes.buttonText}>Add new task</Typography>
          </Button>
        )}
      </Paper>
    </Grid>
  );
};

export default ListColumn;
