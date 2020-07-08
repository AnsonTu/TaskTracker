import React, { Component, Suspense } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { requireAuth } from "../../../utils";
import * as actions from "../../../actions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import PageContentContainer from "../../../components/PageContentContainer";
import styled from "styled-components";
import ListColumn from "../components/ListColumn";
import TaskBox from "../components/TaskBox";

const TaskModal = React.lazy(() => import("../components/TaskModal"));

class TaskList extends Component {
  state = { isOpen: false };

  componentDidMount = () => {
    const { auth: authenticated } = this.props;
    this.props.fetchTasks(authenticated);
  };

  render() {
    const { auth: authenticated, tasks } = this.props;

    const openModal = () => {
      this.setState({ isOpen: true });
    };
    const closeModal = () => {
      this.setState({ isOpen: false });
    };

    return (
      <PageContentContainer>
        <Helmet>
          <title>Tasks | Task Tracker</title>
        </Helmet>
        {this.state.isOpen && (
          <Suspense fallback={null}>
            <Modal>
              <TaskModal token={authenticated} closeModal={closeModal} />
            </Modal>
          </Suspense>
        )}
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
        {/* <AddTaskButton onClick={openModal}>+ New Task</AddTaskButton> */}
      </PageContentContainer>
    );
  }
}

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

// const ListColumn = styled.div`
//   background-color: darkgray;
//   margin-top: 60px;
//   margin-left: 20px;
//   width: 280px;
//   height: 75%;
//   overflow-y: auto;
//   float: left;
// `;

const LoadingTag = styled.div`
  font-size: 30px;
  text-align: center;
`;

const AddTaskButton = styled.button`
  width: 120px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-size: 18px;
`;

function mapStateToProps(state) {
  return { errorMessage: state.task.errorMessage, tasks: state.task.tasks };
}

export default connect(mapStateToProps, actions)(requireAuth(TaskList));
