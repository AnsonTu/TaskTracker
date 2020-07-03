import React, { Component, Suspense } from "react";
import { Helmet } from "react-helmet";
import requireAuth from "../../../utils/requireAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../../actions";
import { PageContentContainer } from "../../../components/named-components";
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
        <ListColumn>
          <ListTitle>Your Tasks</ListTitle>
          {tasks ? (
            tasks.map((task) => <TaskBox task={task} key={task._id}></TaskBox>)
          ) : (
            <LoadingTag>Loading...</LoadingTag>
          )}
        </ListColumn>
        <ListColumn>
          <ListTitle>Tasks In Progress</ListTitle>
        </ListColumn>
        <ListColumn>
          <ListTitle>Completed Tasks</ListTitle>
        </ListColumn>
        <ListColumn>
          <ListTitle>Late Tasks</ListTitle>
        </ListColumn>
        <AddTaskButton onClick={openModal}>+ New Task</AddTaskButton>
      </PageContentContainer>
    );
  }
}

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

const ListTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 12px;
  padding-left: 16px;
`;

const ListColumn = styled.div`
  background-color: darkgray;
  margin-top: 60px;
  margin-left: 20px;
  width: 280px;
  height: 75%;
  overflow-y: auto;
  float: left;
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

export default connect(mapStateToProps, actions)(requireAuth(TaskList));
