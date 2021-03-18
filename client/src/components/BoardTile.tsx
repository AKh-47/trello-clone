import React, { ReactElement } from "react";

interface Props {}

export default function BoardTile({}: Props): ReactElement {
  return (
    <div className="board-tile">
      <h2>First Board</h2>
    </div>
  );
}
