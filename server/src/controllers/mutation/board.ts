import Board from "../../models/Board";

export const addBoard = (parent: undefined, { name }: any) =>
  new Board({ name }).save();

export const editBoardTitle = () => {};

export const deleteBoard = () => {};

export const addList = (parent: any, { boardID, name }: any) => {};

export const editListTitle = () => {};

export const deleteList = () => {};

export const addListItem = () => {};

export const editListItemTitle = () => {};

export const toggleListItem = () => {};

export const deleteListItem = () => {};
