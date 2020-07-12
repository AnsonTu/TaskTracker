import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  button: { color: "#FFFFFF" }
});

const ButtonLink = (props) => {
  const { to } = props;
  const classes = useStyle();

  return (
    <Button className={classes.button} component={Link} to={to}>
      {props.children}
    </Button>
  );
};

export default ButtonLink;
