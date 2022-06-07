import React, { useState } from "react";
import PintarError from "./PintarError";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });
  const [error, setError] =  useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.todoDescripcion.trim() || !todo.todoName.trim()){
        setError(true)
        return
    }
    setError(false)
    
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setTodo({
      ...todo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <>
      <h2>Form Controlado</h2>
      {error && <PintarError />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          placeholder="Ingrese descripcion del todo"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />

        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendientes</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="flexCheckDefault"
            checked={todo.todoCheck}
            name="todoCheck"
            onChange={handleChange}
          />
          <label htmlFor="flexCheckDefault" className="form-check-label">
            Dar prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
