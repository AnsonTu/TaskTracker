import React from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormModal from "../components/FormModal";
import Button from "@material-ui/core/Button";
import ReduxTextField from "../components/ReduxTextField";

const useStyle = makeStyles({
  mainHeader: { marginTop: "4rem", marginBottom: "1.5rem" },
  button: {
    width: "14rem",
    height: "3rem",
    backgroundColor: "#8A26AB",
    marginTop: "1.5rem",
    marginBottom: "2.5rem"
  },
  buttonText: { color: "#FFFFFF", fontSize: "1rem", textDecoration: "none" },
  errorMessage: { color: "#FC0356", minHeight: "24px" }
});

const Signup = (props) => {
  const { signup, history, handleSubmit, errorMessage } = props;
  const classes = useStyle();

  // On submitting the form, pass in the email and password,
  // and redirect the user if sign up was successful
  const onSubmit = (formProps) => {
    signup(formProps, () => {
      // Use React-Router to redirect the user to /home
      // after signing up
      history.push("/home");
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Task Tracker</title>
      </Helmet>
      <FormModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography className={classes.mainHeader} variant="h1">
              Task Tracker
            </Typography>
            <Field
              name="email"
              label="Email"
              component={ReduxTextField}
              autoComplete="none"
            />
            <Field
              name="password"
              label="Password"
              component={ReduxTextField}
              autoComplete="new-password"
            />
            <Typography className={classes.errorMessage}>
              {errorMessage}
            </Typography>
            <Button className={classes.button} type="submit">
              <Typography className={classes.buttonText}>Sign Up</Typography>
            </Button>
          </Grid>
        </form>
      </FormModal>
    </>
  );
};

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
