import React from "react";
import { Helmet } from "react-helmet";
import { Container, Content, MainHeader } from "./named-components";
function Welcome() {
  return (
    <Container>
      <Helmet>
        <title>Welcome | Task Tracker</title>
      </Helmet>
      <Content>
        <MainHeader>
          Welcome to Task Tracker! Sign up or sign in using one of the links in
          the header!
        </MainHeader>
      </Content>
    </Container>
  );
}

export default Welcome;
