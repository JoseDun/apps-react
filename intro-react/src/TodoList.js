//*  maquetar aqui el html del todoItem que es el children 
import './TodoList.css'
import React from "react";

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}
export default TodoList