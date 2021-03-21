import { protect } from "../../config/utils";
import Board from "../../models/Board";

export const addBoard = protect((_: any, { name }: any, context: any) => {
  console.log(context.user);

  return new Board({ name, owner: context.user.id }).save();
});

export const editBoardTitle = protect(
  async (_: any, { id, name }: any, context: any) => {
    const board = await Board.findById(id);

    if (!(board.owner === context.user.id)) throw new Error("Auth Failed");

    return Board.findByIdAndUpdate(id, { name });
  }
);

export const deleteBoard = () => {};

export const addList = async (parent: any, { boardID, name }: any) => {
  const list = {
    name,
  };

  await Board.updateOne(
    { _id: boardID },
    {
      //@ts-ignore
      $push: { lists: list },
    }
  );

  const board = await Board.findById(boardID);

  return board.lists[board.lists.length - 1];
};

export const editListTitle = () => {};

export const deleteList = () => {};

export const addListItem = () => {};

export const editListItemTitle = () => {};

export const toggleListItem = () => {};

export const deleteListItem = () => {};
