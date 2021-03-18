import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactElement;
}

export default function Header({ children }: Props): ReactElement {
  return (
    <React.Fragment>
      <div className="header">
        <Link to="/">
          <div className="left">
            <i className="fas fa-list-alt"></i>Trello
          </div>
        </Link>
        <div className="right">{children}</div>
      </div>
      <div className="header__gap"></div>
    </React.Fragment>
  );
}
