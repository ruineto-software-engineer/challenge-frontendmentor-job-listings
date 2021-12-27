import { Fragment } from "react";

export default function Tool(props) {
  return(
    <Fragment>
      <span onClick={() => props.setStageSearchBar(props.tool)} className="job-particulars-tool">{props.tool}</span>
    </Fragment>
  );
}