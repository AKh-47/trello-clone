import React, { Fragment, ReactElement } from "react";
import Header from "../Header";
import List from "./List";
import AddList from "./AddList";

interface Props {}

export default function Board({}: Props): ReactElement {
  return (
    <Fragment>
      <Header>
        <Fragment>
          <i className="fas fa-user"></i>
          <span>Akhil Kala</span>
        </Fragment>
      </Header>
      <div className="board">
        <header>
          <input type="text" className="name" value="Trello Clone Project" />
        </header>
        <main>
          <div className="lists">
            <List />
            <List />
            <List />

            <AddList handleAddList={() => {}} />
          </div>
        </main>
      </div>
    </Fragment>
  );
}
