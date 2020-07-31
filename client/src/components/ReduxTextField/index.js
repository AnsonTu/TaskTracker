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

export default ReduxTextField
