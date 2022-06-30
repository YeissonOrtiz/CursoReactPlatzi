import React from "react";
import { AppContext } from "../../AppContext";
import "./TodoSearch.css";

function TodoSearch(){

  const { searchValue, setSearchValue} = React.useContext(AppContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  };

  return(
    <input 
      className="todo__search" 
      placeholder="Buscar TODOs"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };