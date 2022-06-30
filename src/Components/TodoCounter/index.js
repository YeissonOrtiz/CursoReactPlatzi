import React from "react";
import "./TodoCounter.css";
import { AppContext } from "../../AppContext";

function TodoCounter(){
  const { completedTodos, totalTodos } = React.useContext(AppContext)

  return (
    <h2 className="todo__counter">Has completado {completedTodos} TODOs de {totalTodos}</h2>
  );
}

export { TodoCounter };