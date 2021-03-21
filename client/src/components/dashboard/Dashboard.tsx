import React, { ReactElement, Fragment } from "react";
import Header from "../Header";
import { NavLink, Route, Switch } from "react-router-dom";
import PrivateBoards from "./PrivateBoards";
import Home from "./Home";

interface Props {}

export default function Dashboard({}: Props): ReactElement {
  return (
    <Fragment>
      <Header>
        <Fragment>
          <i className="fas fa-user"></i>
          <span>Akhil Kala</span>
        </Fragment>
      </Header>
      <div className="dashboard">
        <aside>
          <NavLink to="/">
            <i className="fas fa-home"></i>Home
          </NavLink>
          <NavLink to="/">
            <i className="fas fa-cog"></i>Settings
          </NavLink>
          <NavLink to="/">
            <i className="fas fa-plus-circle"></i>Add Board
          </NavLink>
          <NavLink to="/private">
            <i className="fas fa-clipboard-list"></i>Boards
          </NavLink>
          <NavLink to="/">
            <i className="fas fa-user"></i>Profile
          </NavLink>
          <NavLink to="/">
            <i className="fas fa-users"></i>Social
          </NavLink>

          <button>
            <i className="fas fa-sign-out-alt"></i>Logout
          </button>
        </aside>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/private" component={PrivateBoards} />
          </Switch>
        </main>
      </div>
    </Fragment>
  );
}
