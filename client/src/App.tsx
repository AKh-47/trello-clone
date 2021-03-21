import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Board from "./components/board/Board";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/Landing";
import NotFound from "./components/utils/404";

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/board/:id" component={Board} />
        <Route path="/" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
