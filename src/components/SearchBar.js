import { Fragment } from "react";

export default function SearchBar() {
  return(
    <Fragment>
      <div className="jobs-search-bar">
        <div>
          Filtering ...
        </div>
        <span className="jobs-search-bar-clear">Clear</span>
      </div>
    </Fragment>
  );
}