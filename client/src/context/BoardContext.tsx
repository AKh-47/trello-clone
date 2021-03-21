import React, { ReactElement, useContext, useState } from "react";
import { Nullable, Board } from "../utils/types";

interface Props {
  children: ReactElement;
}

interface Value {
  currentBoard: Nullable<Board>;
}

const BoardContext = React.createContext<Nullable<Value>>(null);

export function useBoard() {
  return useContext(BoardContext);
}

export default function BoardProvider({ children }: Props): ReactElement {
  const [boards, setBoards] = useState<Nullable<Board[]>>(null);
  const [currentBoard, setCurrentBoard] = useState<Nullable<Board>>(null);

  const setBoard = (boardID: string) => {};

  const value = {
    currentBoard,
    setBoard,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
