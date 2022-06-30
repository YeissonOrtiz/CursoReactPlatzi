import React from "react";
import { AppContext } from "../../AppContext";
import "./form.css";

function TodoForm() {
  const [newTodoText, setNewTodoText] = React.useState('')

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(AppContext)

  const onChange = (event) => {
    setNewTodoText(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoText)
    setOpenModal(false)
  }

  return(
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        placeholder="Study at Platzi"
        value={newTodoText}
        onChange={onChange}
      ></textarea>
      <div className="todoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >Cancelar</button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };