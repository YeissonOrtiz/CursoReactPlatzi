import React from "react";
import "./TodoList.css";

function TodoList(props){
  return(
    <section className="todo__container">
      <ul className="todo__container-list">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
