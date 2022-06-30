import React from "react";
import { AppContext } from "../AppContext";
import { TodoCounter } from "../Components/TodoCounter/";
import { TodoSearch } from "../Components/TodoSearch/";
import { TodoList } from "../Components/TodoList/";
import { TodoItem } from "../Components/TodoItem/";
import { TodoCreateButton } from "../Components/TodoCreateButton/";
import { Modal } from "../Modales/ModalCreate/index";
import { TodoForm } from "../Components/TodoForm";
import { LoadingTodos } from "../Components/LoadingTodos";

function AppUI(){
  const {
    loading,
    error,
    todosFilter,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(AppContext)

  return(
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>
      <TodoCreateButton
        setOpenModal={setOpenModal}
      />
      <TodoList>
        {error}
        {loading && <LoadingTodos/>}
      
        {(!loading && !todosFilter.length) && <p>Crea tu primer ToDo</p>}
      
        {todosFilter.map(todo => (
          <TodoItem key={todo.id} text={todo.text} status={todo.completed} todoId={todo.id} onDelete={() => deleteTodo(todo.id)}/>
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };