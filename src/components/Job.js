import { Fragment } from "react";
import Language from "./Language";
import Tool from "./Tool";

export default function Job(props) {
  return(
    <Fragment>
      <div className="job-container">
        <div className="job-content">
          <img className="job-logo" alt={props.company} src={props.logo} />

          <img className="job-logo-mobile" alt={props.company} src={props.logo} />
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

        <div className="divider-container">
          <hr className="divider"/>
        </div>

        <div className="job-particulars">
          <span onClick={() => props.setStageSearchBar(props.role)} className="job-particulars-role">{props.role}</span>
          <span onClick={() => props.setStageSearchBar(props.level)} className="job-particulars-level">{props.level}</span>

          {
            props.languages.map((currentLanguage) => {
              return(
                <Language key={currentLanguage} language={currentLanguage}
                  setStageSearchBar={props.setStageSearchBar}
                />
              );
            })
          }

          {
            props.tools.map((currentTool) => {
              return(
                <Tool key={currentTool} tool={currentTool}
                  setStageSearchBar={props.setStageSearchBar}
                />
              );
            })
          }
        </div>
      </div>
    </Fragment>
  );
}