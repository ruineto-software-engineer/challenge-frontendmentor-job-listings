import { Fragment, useEffect, useState } from "react";

export default function SearchBar(props) {
  const [arraySearchItems, setArraySeachItems] = useState([]);
  const [arrayGeneralItems, setArrayGeneralItems] = useState(props.arrayGeneralItems);
  const [firstClick, setFirstClick] = useState(false);
  const [choosedItem, setChoosedItem] = useState('');

  useEffect(() => {
    setArrayGeneralItems(props.arrayGeneralItems);
  }, [props.arrayGeneralItems])

  useEffect(() => {
    if (arraySearchItems.length === 1) {
      setArraySeachItems([]);
      setArrayGeneralItems( 
        arraySearchItems.filter((item) => {
          return item !== choosedItem;
        })
      );
    }
  }, [arraySearchItems, choosedItem])

  const arrayGeneralItemsReader = arrayGeneralItems.map((item) => {
    return(
      <ItemSearchBar 
        key={item} 
        nameItem={item} 
        handleClickSearch={() => removeItemsSearchBar(arrayGeneralItems, item)}
      />
    );
  })

  function removeItemsSearchBar(arrayItems, nameFiltered) {
    setChoosedItem(nameFiltered);

    if(firstClick === false){
      setFirstClick(true);
    }

    if(arrayItems.length === 1 && firstClick === true){
      props.clear();
    }else if(arraySearchItems.length === 1 && firstClick === true){
      props.clear();
    }else if(props.arrayGeneralItems.length === 1 && firstClick === false){
      props.clear();
    }else{
      const arrayFilteredGeneralItemsReader = arrayItems.filter((item) => {
        return item !== nameFiltered;
      });
  
      setArraySeachItems(arrayFilteredGeneralItemsReader);
      props.continueFiltering();
      props.setStageArrayGeneralItems(arrayFilteredGeneralItemsReader);
      props.setStageRenderFilteredItems(props.currentFilter(arrayFilteredGeneralItemsReader));
    }
  }

  return(
    <Fragment>
      <div className="jobs-search-bar-container">
        <div className="jobs-search-bar">
          <div className="jobs-search-bar-items">
            { arraySearchItems.length !== 0 ?
                arrayGeneralItemsReader.length > arraySearchItems.length ?
                  arrayGeneralItemsReader
                :
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