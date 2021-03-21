import React, { Fragment, ReactElement } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <Fragment>
      <Header>
        <Fragment>
          Don't have an account? <Link to="/login"> &nbsp; Register</Link>
        </Fragment>
      </Header>
      <div className="auth"></div>
    </Fragment>
  );
}
