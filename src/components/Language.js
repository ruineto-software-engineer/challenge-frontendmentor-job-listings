import { Fragment } from "react";

export default function Languages(props) {
  return(
    <Fragment>
      <span onClick={props.setStageSearchBar} className="job-particulars-language">{props.language}</span>
    </Fragment>
  );
}