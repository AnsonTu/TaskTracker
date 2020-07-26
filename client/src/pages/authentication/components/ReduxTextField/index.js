import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = (props) => {
  const { label, error } = props;

  return (
    <TextField
      style={{ width: "60%", paddingBottom: "1.5rem" }}
      placeholder={label}
      error={!!error}
    />
  );
};

const ReduxTextFieldPass=(props) =>{
  const {label, error, type} = props;

  return(
    <TextField
      style={{width:"60%", paddingBottom: "1.5rem"}}
      placeholder={label}
      type={type}
      error={!!error}
    />
  );
};

export {ReduxTextField, ReduxTextFieldPass}
