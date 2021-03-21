import React, { ReactElement } from "react";
import BoardTile from "./BoardTile";
import { gql, useQuery } from "@apollo/client";

interface Props {}

export default function PrivateBoards({}: Props): ReactElement {
  const { loading, error, data } = useQuery(gql`
    query {
      boards {
        _id
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <header>
        <div className="search">
          <i className="fas fa-search"></i>
          <input placeholder="Search" type="text" />
        </div>
      </header>
      <section>
        {data.boards.map((board: any) => (
          <BoardTile {...board} key={board._id} />
        ))}
      </section>
    </React.Fragment>
  );
}
