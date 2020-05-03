import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  Container,
  Content,
  MainHeader,
  InputField,
  OutputField,
  SubmitButton
} from "../named-components";

class Signup extends Component {
  // On submitting the form, pass in the email and password,
  // and redirect the user if sign up was successful
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      // Use React-Router to redirect the user to /home
      // after signing up
      this.props.history.push("/home");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    const textboxStyle = { width: "50%" };
    return (
      <Container>
        <Helmet>
          <title>Sign Up | Task Tracker</title>
        </Helmet>
        <Content>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <MainHeader>Sign up with your email address</MainHeader>
            <InputField>
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="none"
                placeholder="Email"
                style={textboxStyle}
              />
            </InputField>
            <InputField>
              <Field
                name="password"
                type="password"
                component="input"
                autoComplete="new-password"
                placeholder="Password"
                style={textboxStyle}
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
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
