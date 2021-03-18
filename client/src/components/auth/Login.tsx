import React, { Fragment, ReactElement } from "react";
import Header from "../Header";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <Fragment>
      <Header>
        <Fragment></Fragment>
      </Header>
      <div className="auth"></div>
    </Fragment>
  );
}
