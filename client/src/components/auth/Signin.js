import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import styled from "styled-components";

class Signin extends Component {
  // On submitting the form, pass in the email and password,
  // and redirect the user if sign in was successful
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      // Use React-Router to redirect the user to /feature
      // after signing in
      this.props.history.push("/feature");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Helmet>
          <title>Sign In | Task Manager</title>
        </Helmet>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="new-password"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button>Sign In!</button>
        </form>
      </Container>
    );
  }
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

// Set the error message if the user tries to sign up
// with an email that was already used
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

// First argument of connect is the state we are passing.
// Second argument of connect is the actions object
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
