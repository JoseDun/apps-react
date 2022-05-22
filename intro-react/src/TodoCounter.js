import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos }= React.useContext(TodoContext)
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} todos
    </h2>
  );
}

export default TodoCounter;
