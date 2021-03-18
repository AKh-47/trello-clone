import React, { ReactElement, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <Fragment>
      <Header>
        <Fragment>
          <Link to="/login">
            <button className="secondary">Log in</button>
          </Link>
          <Link to="/register">
            <button className="primary">Register</button>
          </Link>
        </Fragment>
      </Header>
      <div className="home page">
        <div className="circle bg-shape"></div>
        <h1>Trello Clone</h1>
      </div>
    </Fragment>
  );
}
