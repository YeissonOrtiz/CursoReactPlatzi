import React from "react";
import { AppContext } from "../../AppContext";
import "./TodoCreateButton.css";

function TodoCreateButton(){
  const {
    openModal,
    setOpenModal
  } = React.useContext(AppContext)

  const onClickButton = msg => {
    setOpenModal(!openModal)
  };

  return(
    <button
      className={`todo__button-create ${openModal && 'opened'}`}
      onClick={() => onClickButton()}>
      Create ToDo
    </button>
  );
}

export { TodoCreateButton };