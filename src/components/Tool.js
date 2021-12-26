import { Fragment } from "react";

export default function Tool(props) {
  return(
    <Fragment>
      <span className="job-particulars-tool">{props.tool}</span>
    </Fragment>
  );
}