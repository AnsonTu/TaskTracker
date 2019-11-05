import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  Container,
  Content,
  InputField,
  OutputField,
  SubmitButton
} from "../named-components";

class Signup extends Component {
  // On submitting the form, pass in the email and password,
  // and redirect the user if sign up was successful
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      // Use React-Router to redirect the user to /feature
      // after signing up
      this.props.history.push("/feature");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Helmet>
          <title>Sign Up | Task Tracker</title>
        </Helmet>
        <Content>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <h2>Sign up with your email address</h2>
            <InputField>
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="none"
                placeholder="Email"
              />
            </InputField>
            <InputField>
              <Field
                name="password"
                type="password"
                component="input"
                autoComplete="new-password"
                placeholder="Password"
              />
            </InputField>
            <InputField>
              <SubmitButton>SIGN UP</SubmitButton>
            </InputField>
            <OutputField>{this.props.errorMessage}</OutputField>
          </form>
        </Content>
      </Container>
    );
  }
}

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
  reduxForm({ form: "signup" })
)(Signup);
