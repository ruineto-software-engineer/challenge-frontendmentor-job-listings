import { Fragment } from "react";

export default function Job(props) {
  return(
    <Fragment>
      <div className="job-container">
        <img className="job-logo" src={props.logo} />
        <div>
          <div className="job-details">
            <p>{props.company}</p>
            <p>{props.new && 'New' }</p>
            <p>{props.featured && 'Featured'}</p>
          </div>

          <div>   
            <p>{props.position}</p>
          </div>

          <div>
            <p>{`${props.postedAt} - ${props.contract} - ${props.location}`}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}