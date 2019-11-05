import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

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

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  main {
    flex-direction: column;
    display: flex;
  }
`;

const Content = styled.div`
  position: relative;
  background-color: lightgray;
  width: 50%;
  margin: auto;
`;

export default Welcome;
