import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  rootContainer: {
    background: "linear-gradient(150deg, #4A1057 30%, #a61cad 80%)",
    height: "100vh",
    maxWidth: "100vw",
    margin: "0",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

const PageContentContainer = (props) => {
  const classes = useStyle();

  return (
    <Grid container className={classes.rootContainer}>
      {props.children}
    </Grid>
  );
};

export default PageContentContainer;
