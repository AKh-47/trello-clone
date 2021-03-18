import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Board from "./components/Board/Board";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NotFound from "./components/utils/404";

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/board/:id" component={Board} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
