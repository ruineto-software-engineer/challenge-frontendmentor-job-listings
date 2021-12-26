import { Fragment } from "react";
import Language from "./Language";
import Tool from "./Tool";

export default function Job(props) {
  return(
    <Fragment>
      <div className="job-container">
        <div className="job-content">
          <img className="job-logo" alt={props.company} src={props.logo} />
          <div>
            <div className="job-details">
              <p className="job-details-company">{props.company}</p>
              <div className="job-details-new-content">
                {props.new && <p className="job-details-new">NEW!</p>}
              </div>
              <div className="job-details-featured-content">
                {props.featured && <p className="job-details-featured">FEATURED</p>}
              </div>
            </div>

            <div>   
              <p className="job-position">{props.position}</p>
            </div>

            <div>
              <p className="job-plus-details">
                <span>{props.postedAt}</span> 
                  <span className="job-plus-details-divider">-</span> 
                <span>{props.contract}</span> 
                  <span className="job-plus-details-divider">-</span> 
                <span>{props.location}</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <span>{props.role}</span>
          <span>{props.level}</span>

          {
            props.languages.map((currentLanguage) => {
              return(
                <Language language={currentLanguage}/>
              );
            })
          }

          {
            props.tools.map((currentTool) => {
              return(
                <Tool tool={currentTool}/>
              );
            })
          }
        </div>
      </div>
    </Fragment>
  );
}