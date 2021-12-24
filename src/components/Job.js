import { Fragment } from "react";
import Language from "./Language";
import Tool from "./Tool";

export default function Job(props) {
  return(
    <Fragment>
      <div className="job-container">
        <div className="job-content">
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