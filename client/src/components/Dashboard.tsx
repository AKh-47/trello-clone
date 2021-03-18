import React, { ReactElement, Fragment } from "react";
import BoardTile from "./BoardTile";
import Header from "./Header";

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
        <aside></aside>
        <main>
          <header>
            <div className="search">
              <i className="fas fa-search"></i>
              <input placeholder="Search" type="text" />
            </div>
          </header>
          <section>
            <BoardTile />
          </section>
        </main>
      </div>
    </Fragment>
  );
}
