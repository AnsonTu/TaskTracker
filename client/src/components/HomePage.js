import React, { Component, Suspense } from "react";
import { Helmet } from "react-helmet";
import requireAuth from "./requireAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../actions";
import { Container, Content } from "./named-components";
import TaskBox from "./task/TaskBox";

const TaskModal = React.lazy(() => import("./task/TaskModal"));

class HomePage extends Component {
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
      <Container>
        <Helmet>
          <title>Tasks | Task Tracker</title>
        </Helmet>
        <TaskList>
          {tasks ? (
            tasks.map((task) => <TaskBox task={task} key={task._id}></TaskBox>)
          ) : (
            <LoadingTag>Loading...</LoadingTag>
          )}
          <AddTaskButton onClick={openModal}>+ New Task</AddTaskButton>
          {this.state.isOpen && (
            <Suspense fallback={null}>
              <TaskModal token={authenticated} closeModal={closeModal} />
            </Suspense>
          )}
        </TaskList>
      </Container>
    );
  }
}

const TaskList = styled(Content)`
  background-color: darkgray;
  margin-top: 5%;
  width: 80%;
  height: 70%;
  justify-content: left;
  flex-direction: column;
`;

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

export default connect(mapStateToProps, actions)(requireAuth(HomePage));
