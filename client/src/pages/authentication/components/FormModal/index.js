import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PageContentContainer from "../../../../components/PageContentContainer";

const useStyle = makeStyles({
  container: {
    textAlign: "center"
  },
  formContainer: { width: "40rem", borderRadius: "15px" }
});

const FormModal = (props) => {
  const classes = useStyle();

  return (
    <PageContentContainer>
      <Grid
        className={classes.container}
        item
        container
        alignItems="center"
        justify="center"
      >
        <Paper className={classes.formContainer} elevation={2}>
          {props.children}
        </Paper>
      </Grid>
    </PageContentContainer>
  );
};

export default FormModal;
