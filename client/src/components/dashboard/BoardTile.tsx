import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  _id: string;
}

export default function BoardTile({ name, _id }: Props): ReactElement {
  return (
    <div className="board-tile">
      <h2>
        <Link to={`/board/${_id}`}>{name}</Link>
      </h2>
    </div>
  );
}
