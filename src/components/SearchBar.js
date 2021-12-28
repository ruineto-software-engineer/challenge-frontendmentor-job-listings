import { Fragment, useState } from "react";

export default function SearchBar(props) {
  const [arraySearchItems, setArraySeachItems] = useState([]);
  const [firstClick, setFirstClick] = useState(false);

  const arrayGeneralItemsReader = props.arrayGeneralItems.map((item) => {
    return(
      <ItemSearchBar 
        key={item} 
        nameItem={item} 
        handleClickSearch={() => removeItemsSearchBar(props.arrayGeneralItems, item)}
      />
    );
  })

  function removeItemsSearchBar(arrayItems, nameFiltered) {
    if(firstClick === false){
      setFirstClick(true);
    }

    if(arraySearchItems.length === 1 && firstClick === true){
      props.clear();
    }else if(props.arrayGeneralItems.length === 1 && firstClick === false){
      props.clear();
    }else{
      const arrayFilteredGeneralItemsReader = arrayItems.filter((item) => {
        return item !== nameFiltered;
      });
  
      setArraySeachItems(arrayFilteredGeneralItemsReader);
      props.setStageArrayGeneralItems(arrayFilteredGeneralItemsReader);
    }
  }

  console.log(firstClick);
  console.log(arraySearchItems);
  console.log(props.arrayGeneralItems);

  return(
    <Fragment>
      <div className="jobs-search-bar-container">
        <div className="jobs-search-bar">
          <div className="jobs-search-bar-items">
            { arraySearchItems.length !== 0 ?
                arraySearchItems.map((itemFiltered) => {
                  return(
                    <ItemSearchBar 
                      key={itemFiltered} 
                      nameItem={itemFiltered} 
                      handleClickSearch={() => removeItemsSearchBar(arraySearchItems, itemFiltered)}
                    />
                  );
                })
              :
                arrayGeneralItemsReader 
            }
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
        <span onClick={props.handleClickSearch} className="jobs-search-bar-item-x">
          <ion-icon name="close-sharp"></ion-icon>
        </span>
      </div>
    </Fragment>
  );
}