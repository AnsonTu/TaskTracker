import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import requireAuth from "./requireAuth";
import {
  Container,
  Content,
  InputField,
  SubmitButton
} from "./named-components";

class HomePage extends Component {
  getTasks = async () => {
    const tasks = await axios.get("http://localhost:3090/tasks", {
      headers: { authorization: localStorage.getItem("token") }
    });
    return tasks.data;
  };
  render() {
    const tasks = this.getTasks();
    tasks.then(function(result) {
      console.log(result);
    });

    return (
      <Container>
        <Helmet>
          <title>Tasks | Task Tracker</title>
        </Helmet>
        <Content>{console.log(tasks)}</Content>
      </Container>
    );
  }
}

export default requireAuth(HomePage);
