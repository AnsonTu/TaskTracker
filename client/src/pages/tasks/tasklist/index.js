import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { requireAuth } from "../../../utils";
import * as actions from "../../../actions";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PageContentContainer from "../../../components/PageContentContainer";
import ListColumn from "../components/ListColumn";
import TaskBox from "../components/TaskBox";

class TaskList extends Component {
  componentDidMount = () => {
    const { auth, fetchTasks } = this.props;
    fetchTasks(auth);
  };

  render() {
    const { tasks } = this.props;

    return (
      <PageContentContainer>
        <Helmet>
          <title>Tasks | Task Tracker</title>
        </Helmet>
        <Grid item container xs={12}>
          <ListColumn title="Your Tasks" showButton={true}>
            {tasks ? (
              tasks.map((task) => (
                <TaskBox task={task} key={task._id}></TaskBox>
              ))
            ) : (
              <CircularProgress />
            )}
          </ListColumn>
          <ListColumn title="Tasks In Progress"></ListColumn>
          <ListColumn title="Completed Tasks"></ListColumn>
          <ListColumn title="Late Tasks"></ListColumn>
        </Grid>
      </PageContentContainer>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.task.errorMessage, tasks: state.task.tasks };
}

export default connect(mapStateToProps, actions)(requireAuth(TaskList));
