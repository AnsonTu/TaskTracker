import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = (props) => {
  const {
    input: { name },
    label,
    error
  } = props;

  return (
    <TextField
      style={{ width: "60%", paddingBottom: "1.5rem" }}
      type={name}
      placeholder={label}
      error={!!error}
    />
  );
};

export default ReduxTextField;
