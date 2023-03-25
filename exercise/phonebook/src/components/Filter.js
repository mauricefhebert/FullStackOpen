import { React } from "react";

const Filter = props => {
  return (
    <div>
      <div>
        search:{" "}
        <input
          value={props.searchFilter}
          onChange={e => {
            props.setSearchFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
