import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = (props) => {
  const { label } = props;

  return (
    <TextField
      style={{ width: "60%", paddingBottom: "1.5rem" }}
      placeholder={label}
    />
  );
};

export default ReduxTextField;
