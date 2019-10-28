import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

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
        <button>Sign Up!</button>
      </form>
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
