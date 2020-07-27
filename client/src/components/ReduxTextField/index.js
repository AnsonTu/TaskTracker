import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = (props) => {
  const { type, label, error, style, input } = props;

  return (
    <TextField
      label={label}
      style={style}
      type={type ? type : "text"}
      error={!!error}
      {...input}
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
