import React from "react";
import { Helmet } from "react-helmet";
import { Container, Content } from "./named-components";
function Welcome() {
  return (
    <Container>
      <Helmet>
        <title>Welcome | Task Tracker</title>
      </Helmet>
      <Content>
        <h3>Welcome! Sign up or sign in!</h3>
      </Content>
    </Container>
  );
}

export default Welcome;
