import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormModal from "../components/FormModal";
import { unauthenticatedRoute } from "../../../utils";
import ReduxTextField from "../../../components/ReduxTextField";

const useStyle = makeStyles({
  mainHeader: { marginTop: "4rem", marginBottom: "1.5rem" },
  button: {
    width: "10rem",
    height: "2.5rem",
    backgroundColor: "#8A26AB",
    marginLeft:"1.5rem",
    marginRight:"1.5rem",
    marginBottom:"3rem",
    borderRadius:"15px"
  },
  buttonText: { color: "#FFFFFF", fontSize: "1rem", textDecoration: "none" },
  errorMessage: { color: "#FC0356", minHeight: "24px", marginTop: "-10px", paddingBottom: "1.5rem" }
});

const Signup = (props) => {
  const {
    clearErrorMessage,
    signup,
    history,
    handleSubmit,
    errorMessage
  } = props;
  const classes = useStyle();

  // Style the text field
  const textFieldStyle = { width: "60%", paddingBottom: "1.5rem" };

  // Clear the error message when the page is rendered
  useEffect(() => {
    clearErrorMessage();
  }, [clearErrorMessage]);

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
              type="email"
              label="Email"
              style={textFieldStyle}
              autoComplete="none"
              component={ReduxTextField}
              error={errorMessage}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={ReduxTextField}
              style={textFieldStyle}
              autoComplete="new-password"
              error={errorMessage}
            />
            <Typography className={classes.errorMessage}>
              {errorMessage}
            </Typography>
            <div>
              <Button className={classes.button} component={Link} to={"/"}>
                <Typography className={classes.buttonText}>Back</Typography>
              </Button>
              <Button className={classes.button} type="submit">
                <Typography className={classes.buttonText}>Sign Up</Typography>
              </Button>
            </div>
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
)(unauthenticatedRoute(Signup));
