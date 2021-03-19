import Board from "../../models/Board";

export const getBoardById = async (parent: undefined, { id }: any) =>
  Board.findById(id);
