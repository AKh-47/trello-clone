import React, { ReactElement } from "react";

interface Props {}

export default function List({}: Props): ReactElement {
  return (
    <div className="list">
      <div className="list__top">
        <input type="text" className="name" />
        <div className="menu">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="list__items">
        <ListItem />
        <ListItem />
        <ListItem />
        <AddListItem />
      </div>
    </div>
  );
}

interface ItemProps {}

function ListItem({}: ItemProps): ReactElement {
  return (
    <div className="list__item">
      <div className="item__switch-container">
        <label htmlFor={"itemId"} className="item__switch">
          <input
            className="item__slider-input"
            type="checkbox"
            id={"itemId"}
            style={{ display: "none" }}
          />
          <span className="item__slider"></span>
        </label>
      </div>{" "}
      <input type="text" className="title" />
      <div className="view">
        <i className="fa fa-eye"></i>
      </div>
    </div>
  );
}

interface AddListItemProps {}

function AddListItem({}: AddListItemProps): ReactElement {
  return (
    <form className="list__item--add">
      <input placeholder="Add an item" type="text" className="title" />
      <button>Add</button>
    </form>
  );
}
