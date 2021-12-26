import { Fragment } from "react";

export default function Languages(props) {
  return(
    <Fragment>
      <span className="job-particulars-language">{props.language}</span>
    </Fragment>
  );
}