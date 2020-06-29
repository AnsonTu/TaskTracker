import React from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = (props) => {
  const { label } = props;

  return <TextField placeholder={label} />;
};

export default ReduxTextField;
