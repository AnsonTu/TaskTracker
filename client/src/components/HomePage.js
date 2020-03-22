import React, { Component } from "react";
import { Helmet } from "react-helmet";
import requireAuth from "./requireAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../actions";
import { Container, Content } from "./named-components";
import CurrentTask from "./task/CurrentTask";

class HomePage extends Component {
  componentDidMount = () => {
    const { auth: authenticated } = this.props;
    this.props.fetchTasks(authenticated);
  };

  render() {
    const { tasks } = this.props;
    return (
      <Container>
        <Helmet>
          <title>Tasks | Task Tracker</title>
        </Helmet>
        <TaskList>
          {tasks ? (
            tasks.map(task => (
              <CurrentTask task={task} key={task._id}></CurrentTask>
            ))
          ) : (
            <LoadingTag>Loading...</LoadingTag>
          )}
        </TaskList>
      </Container>
    );
  }
}

const TaskList = styled(Content)`
background-color: darkgray
  justify-content: left;
  flex-direction: column;
`;

const LoadingTag = styled.div`
  font-size: 30px;
  text-align: center;
`;

function mapStateToProps(state) {
  return { errorMessage: state.task.errorMessage, tasks: state.task.tasks };
}

export default connect(mapStateToProps, actions)(requireAuth(HomePage));
