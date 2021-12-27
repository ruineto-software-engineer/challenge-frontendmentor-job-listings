import { Fragment } from "react";

export default function Languages(props) {
  return(
    <Fragment>
      <span onClick={() => props.setStageSearchBar(props.language)} className="job-particulars-language">{props.language}</span>
    </Fragment>
  );
}