import React from "react";
import AppRouter from "../router";
import HeaderBar from "./HeaderBar";

export default () => {
  return (
    <div>
      <HeaderBar />
      <AppRouter />
    </div>
  );
};
