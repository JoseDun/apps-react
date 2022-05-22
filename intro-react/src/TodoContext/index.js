import React from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const { todos, saveTodos, loading, error } = useLocalStorage("TodosV1", []);
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchtext = searchValue.toLowerCase();
      return todoText.includes(searchtext);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        addTodo,
        loading,
        error,
        totalTodos,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
