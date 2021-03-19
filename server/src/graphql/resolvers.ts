import { getBoardById } from "../controllers/query/board";
import { addBoard, addList } from "../controllers/mutation/board";

export default {
  Query: {
    board: getBoardById,
  },
  Mutation: {
    addBoard,
    addList,
  },
};
