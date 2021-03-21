import React, { ReactElement } from "react";

interface Props {}

export default function AddList({}: Props): ReactElement {
  // const [addList, { data }] = useMutation(gql``);

  const handleAddList = async (e: any) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <input type="checkbox" id="add-list" style={{ display: "none" }} />
      <div className="add-list">
        <label htmlFor="add-list">
          <p>
            <span>+</span> Add a list
          </p>
        </label>
        <form onSubmit={handleAddList}>
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
    </React.Fragment>
  );
}
