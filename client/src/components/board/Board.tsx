import React, { Fragment, ReactElement } from "react";
import Header from "../Header";
import List from "./List";
import AddList from "./AddList";
import { gql, useQuery, useMutation } from "@apollo/client";

interface Props {}

export default function Board({}: Props): ReactElement {
  const boardID = "6056d53938737d4165e30117";

  const { loading, error, data } = useQuery(
    gql`
      query GetBoardByID($boardID: String!) {
        board(id: $boardID) {
          name
          lists {
            name
            listItems {
              name
            }
          }
        }
      }
    `,
    { variables: { boardID } }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

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
            {data.board.lists.map((list: any) => (
              <List {...list} key={list._id} />
            ))}
            <AddList />
          </div>
        </main>
      </div>
    </Fragment>
  );
}
