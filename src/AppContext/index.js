import React from "react";
import { useLocalStorage } from "../CustomHooks/index";

const AppContext = React.createContext();

function AppProvider(props){
  const {element: todos, saveElement: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const todosFilter = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push(
      {
        id: newTodos.length,
        text: text,
        completed: false
      }
    )
    saveTodos(newTodos);
  };

  const toggleCompleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  return(
    <AppContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      todos,
      todosFilter,
      addTodo,
      toggleCompleteTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };