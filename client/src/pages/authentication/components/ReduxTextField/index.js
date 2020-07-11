import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = (props) => {
  const { type, label, error, input } = props;

  return (
    <TextField
      label={label}
      style={{ width: "60%", paddingBottom: "1.5rem" }}
      type={type ? type : "text"}
      error={!!error}
      {...input}
    />
  );
};

export default ReduxTextField;
