import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const Form = ({ agregarTodo }) => {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };
  const [todo, setTodo] = useState(initialState);  //* se puede cambiar por  el hook
  const { nombre, descripcion, estado, prioridad } = todo;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setTodo((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  }; //* se puede cambiar por  el hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "Escribe un nombre",
        icon: "error",
      });
      return;
    }
    if (!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error!",
        text: "Escribe una descripcion",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Exito!",
      text: "Agregaste un Todo",
      icon: "success",
    });

    agregarTodo({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id:uuidv4()
    });
    setTodo(initialState)
    console.log("escribiste<!");
  };

  return (
    <>
      <h3>Agregar TODO</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Ingrese nombre del TODO"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          placeholder="Ingresa la tarea"
          className="form-control mb-2"
          value={descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            id="flexCheckDefault"
            className="form-check-input"
            checked={prioridad}
            onChange={handleChange}
          />
          <label htmlFor="flexCheckDefault">Prioritario</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Form;
