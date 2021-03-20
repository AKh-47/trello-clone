import { getBoardById, getAllBoards } from "../controllers/query/board";
import {
  addBoard,
  addList,
  editBoardTitle,
} from "../controllers/mutation/board";

export default {
  Query: {
    board: getBoardById,
    boards: getAllBoards,
  },
  Mutation: {
    addBoard,
    editBoardTitle,
    addList,
  },
};
