import { Fragment } from "react";

export default function SearchBar(props) {
  const arrayGeneralItemsReader = props.arrayGeneralItems.map((item) => {
    return(
      <ItemSearchBar key={item} nameItem={item} />
    );
  })

  return(
    <Fragment>
      <div className="jobs-search-bar-container">
        <div className="jobs-search-bar">
          <div className="jobs-search-bar-items">
            { arrayGeneralItemsReader }
          </div>
          <span onClick={props.clear} className="jobs-search-bar-clear">Clear</span>
        </div>
      </div>
    </Fragment>
  );
}

function ItemSearchBar(props) {
  return(
    <Fragment>
      <div className="jobs-search-bar-item-container">
        <span className="jobs-search-bar-item">{ props.nameItem }</span>
        <span className="jobs-search-bar-item-x">
          <ion-icon name="close-sharp"></ion-icon>
        </span>
      </div>
    </Fragment>
  );
}