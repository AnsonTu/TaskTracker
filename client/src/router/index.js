import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

const Welcome = lazy(() => import("../pages/authentication/welcome"));
const Signin = lazy(() => import("../pages/authentication/signin"));
const Signup = lazy(() => import("../pages/authentication/signup"));
const Signout = lazy(() => import("../pages/authentication/signout"));
const TaskList = lazy(() => import("../pages/tasks/tasklist"));

const AppRouter = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={TaskList} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
