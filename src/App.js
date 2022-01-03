import { Fragment, useState } from "react";
import Data from "./assets/data/data.json";
import Job from "./components/Job";
import Attribution from "./components/Attribution";
import SearchBar from "./components/SearchBar";
import "./css/reset.css";
import "./css/style.css";
import MainBackground from "./assets/images/bg-header-desktop.svg";
import MainBackgroundMobile from "./assets/images/bg-header-mobile.svg";
import TheAirFilterCompany from "./assets/images/the-air-filter-company.svg";
import EyecamCo from "./assets/images/eyecam-co.svg";
import Faceit from "./assets/images/faceit.svg";
import Insure from "./assets/images/insure.svg";
import LoopStudios from "./assets/images/loop-studios.svg";
import Manage from "./assets/images/manage.svg";
import Myhome from "./assets/images/myhome.svg";
import Photosnap from "./assets/images/photosnap.svg";
import Shortly from "./assets/images/shortly.svg";
import Account from "./assets/images/account.svg";

export default function App() {
  const [marginBottom, setMarginBottom] = useState('main-background-mb');
  const [searchBar, setSearchBar] = useState('');
  const [generalObjects, setGeneralObjects] = useState([]);
  const [renderFilteredItems, setRenderFilteredItems] = useState([]);
  const companies = {
    "Photosnap": Photosnap,
    "Manage": Manage,
    "Account": Account,
    "MyHome": Myhome,
    "Loop Studios": LoopStudios,
    "FaceIt": Faceit,
    "Shortly": Shortly,
    "Insure": Insure,
    "Eyecam Co.": EyecamCo,
    "The Air Filter Company": TheAirFilterCompany
  }

  function initializeFiltering(arrayItem) {
    setMarginBottom('');

    if(generalObjects.indexOf(arrayItem) === -1){
      setGeneralObjects([ ...generalObjects, arrayItem ]);
      setRenderFilteredItems(dataFilter([ ...generalObjects, arrayItem ]));
      setSearchBar(
        <SearchBar 
          arrayGeneralItems={[ ...generalObjects, arrayItem ]}
          setStageArrayGeneralItems={setGeneralObjects}
          clear={clearArray}
          currentFilter={dataFilter}
          currentInitializeFiltering={initializeFiltering}
          setStageRenderFilteredItems={setRenderFilteredItems}
          continueFiltering={continueFiltering}
        />
      );
    }else{
      return;
    }
  }
  
  function continueFiltering() {
    setSearchBar(
      <SearchBar 
        arrayGeneralItems={[ generalObjects ]}
        setStageArrayGeneralItems={setGeneralObjects}
        clear={clearArray}
        currentFilter={dataFilter}
        currentInitializeFiltering={initializeFiltering}
        setStageRenderFilteredItems={setRenderFilteredItems}
        continueFiltering={continueFiltering}
      />
    );
  }

  function clearArray() {
    setMarginBottom('main-background-mb');
    setSearchBar('');
    setGeneralObjects([]);
  }

  function dataFilter(currentArray) {
    const idComponentArray = [];
    const idResultArray = [];
    const objectDataFiltered = [];

    //I identify the repeated items.
    for (let i = 0; i < currentArray.length; i++) {
      let element = currentArray[i];
      
      for (let j = 0; j < Data.length; j++) {
        let dataElement = Data[j];

        if (element === dataElement.role) {
          idComponentArray.push(dataElement.id);
        }

        if (element === dataElement.level) {
          idComponentArray.push(dataElement.id);
        }
        
        for (let k = 0; k < dataElement.languages.length; k++) {
          const languageElement = dataElement.languages[k];
          
          if (languageElement === element) {
            idComponentArray.push(dataElement.id);
          }
        }

        for (let q = 0; q < dataElement.tools.length; q++) {
          const toolsElement = dataElement.tools[q];
          
          if (toolsElement === element) {
            idComponentArray.push(dataElement.id);
          }
        }
      }
    }

    //I eliminate all that are not repeated.
    for (let t = 0; t < idComponentArray.length; t++) {
      let counter = 0;
      const idElement = idComponentArray[t];

      for (let s = 0; s < idComponentArray.length; s++) {
        const idCounterElement = idComponentArray[s];
        
        if(idElement === idCounterElement){
          counter++;
        }
      }
      
      if(counter === currentArray.length){
        idResultArray.push(idElement);
      }

      counter = 0;
    }

    //I remove all items that have duplicates.
    const idFilteredResultArray = idResultArray.filter((currentItem, i) => 
      idResultArray.indexOf(currentItem) === i
    );

    /*
      And finally I add all the items in object form from the data file to an array, 
      in order to run a map to render the components on screen.
    */
    for (let w = 0; w < Data.length; w++) {
      const dataElementChecked = Data[w];
      
      for (let r = 0; r < idFilteredResultArray.length; r++) {
        const idFilteredElement = idFilteredResultArray[r];
        
        if(dataElementChecked.id === idFilteredElement){
          objectDataFiltered.push(dataElementChecked);
        }
      }
    }

    //I return the array of objects I want rendered.
    return objectDataFiltered;
  }

  const dataReader = Data.map((data) => {
    return(
      <Fragment key={data.id}>
        <Job logo={companies[data.company]} company={data.company} new={data.new}
          featured={data.featured} postedAt={data.postedAt} contract={data.contract}
          location={data.location} position={data.position} role={data.role}
          level={data.level} tools={data.tools} languages={data.languages}
          setStageSearchBar={initializeFiltering}
        />
      </Fragment>
    );
  });
   
  const dataFilterReader = renderFilteredItems.map((object) => {
    return(
      <Fragment key={object.id}>
        <Job logo={companies[object.company]} company={object.company} new={object.new}
          featured={object.featured} postedAt={object.postedAt} contract={object.contract}
          location={object.location} position={object.position} role={object.role}
          level={object.level} tools={object.tools} languages={object.languages}
          setStageSearchBar={initializeFiltering}
        />
      </Fragment>      
    );
  })

  return(
    <Fragment>
      <div className={`main-background ${ marginBottom }`}>
        <img alt="main-background-desktop" className="main-background-desktop" src={MainBackground} />
      </div>

      <div className={`main-background-mobile ${ marginBottom }`}>
        <img alt="main-background-desktop-mobile" className="main-background-desktop" src={MainBackgroundMobile} />
      </div>
      
      { searchBar }

      <div className="jobs-container">
        { generalObjects.length !== 0 ?
            dataFilterReader
          :  
            dataReader
        }
      </div>

      <Attribution />
    </Fragment>
  );
}