import { Fragment } from "react";
import Data from "./assets/data/data.json";
import Job from "./components/Job";
import "./css/reset.css";
import "./css/style.css";

import TheAirFilterCompany from "./assets/images/the-air-filter-company.svg";
import EyecamCo from "./assets/images/eyecam-co.svg";
import Faceit from "./assets/images/faceit.svg";
import Insure from "./assets/images/insure.svg";
import LoopStudios from "./assets/images/loop-studios.svg";
import Manage from "./assets/images/manage.svg";
import Myhome from "./assets/images/myhome.svg";
import Photosnap from "./assets/images/photosnap.svg";
import Shortly from "./assets/images/shortly.svg";

export default function App() {
  const companies = {
    "Photosnap": Photosnap,
    "Manage": Manage,
    "Account": Photosnap,
    "MyHome": Myhome,
    "Loop Studios": LoopStudios,
    "FaceIt": Faceit,
    "Shortly": Shortly,
    "Insure": Insure,
    "Eyecam Co.": EyecamCo,
    "The Air Filter Company": TheAirFilterCompany
  }

  const dataReader = Data.map((data) => {
    return(
      <Fragment key={data.id}>
        <Job logo={companies[data.company]} company={data.company} new={data.new} 
          featured={data.featured} postedAt={data.postedAt} contract={data.contract} 
          location={data.location} position={data.position} role={data.role} 
          level={data.level} tools={data.tools} languages={data.languages}
        />
      </Fragment>
    );
  })

  return(
    <Fragment>
      <div className="jobs-container">
        { dataReader }
      </div>
    </Fragment>
  );
}