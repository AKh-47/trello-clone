import Board from "../../models/Board";

export const addBoard = (_: any, { name }: any) => new Board({ name }).save();

export const editBoardTitle = (_: any, { id, name }: any) =>
  Board.findByIdAndUpdate(id, { name });

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

  const board = await Board.findById(boardID).populate("lists");

  return board.lists[board.lists.length - 1];
};

export const editListTitle = () => {};

export const deleteList = () => {};

export const addListItem = () => {};

export const editListItemTitle = () => {};

export const toggleListItem = () => {};

export const deleteListItem = () => {};
