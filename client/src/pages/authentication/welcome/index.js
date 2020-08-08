import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { unauthenticatedRoute } from "../../../utils";
import FormModal from "../components/FormModal";

const useStyle = makeStyles({
  container: {
    height: "100vh",
    textAlign: "center"
  },
  mainHeader: { marginTop: "4rem", marginBottom: "4rem" },
  buttonContainer: { width: "40rem" },
  button: {
    width: "15rem",
    height: "3rem",
    backgroundColor: "#8A26AB",
    marginBottom: "2rem",
    borderRadius:"50px"
  },
  buttonText: { color: "#FFFFFF", fontSize: "1rem", textDecoration: "none" }
});

const Welcome = () => {
  const classes = useStyle();

  return (
    <>
      <Helmet>
        <title>Welcome | Task Tracker</title>
      </Helmet>
      <FormModal>
        <Typography className={classes.mainHeader} variant="h1">
          Task Tracker
        </Typography>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Button className={classes.button} component={Link} to={"/signin"}>
            <Typography className={classes.buttonText}>Sign In</Typography>
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to={"/signup"}
            style={{ marginBottom: "4rem" }}
          >
            <Typography className={classes.buttonText}>Sign Up</Typography>
          </Button>
        </Grid>
      </FormModal>
    </>
  );
};

export default unauthenticatedRoute(Welcome);
