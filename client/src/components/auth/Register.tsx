import React, { ReactElement, Fragment } from "react";
import Header from "../Header";

interface Props {}

export default function Register({}: Props): ReactElement {
  return (
    <Fragment>
      <Header>
        <Fragment></Fragment>
      </Header>
      <div className="auth"></div>
    </Fragment>
  );
}
