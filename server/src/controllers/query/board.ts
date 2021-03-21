import { protect } from "../../config/utils";
import Board from "../../models/Board";

export const getBoardById = (_: undefined, { id }: any) => Board.findById(id);
export const getAllBoards = protect(() => Board.find({}));
