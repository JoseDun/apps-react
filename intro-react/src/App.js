import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import React from "react";
import { TodoContext } from "./TodoContext";
import { Modal } from "./modal";
import TodoForm from "./TodoForm";

/* const defaulTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "comer", completed: false },
  { text: "correr", completed: false },
]; */

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter /*  total={totalTodos} completed={completedTodos}  */ />

      <TodoSearch /* searchValue={searchValue} setSearchValue={setSearchValue}  */
      />

      <TodoList>
        {error && <p>Error...!</p>}
        {loading && <p>Caragndo...!</p>}
        {!loading && !searchedTodos.length && <h2>Crea tu primer Todo!</h2>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
         <TodoForm>
           
         </TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
