import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

export default function NotFound({}: Props): ReactElement {
  return (
    <div className="not-found">
      <section>
        <span>404</span>
        Page Not Found
      </section>
      <Link to="/">
        <button>
          <i className="fas fa-home"></i>Go Home
        </button>
      </Link>
    </div>
  );
}
