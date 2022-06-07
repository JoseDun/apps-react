import React, { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);
  const handleSubmit = (e) => {
    console.log("procesando...");
    e.preventDefault();
    const datos = new FormData(formulario.current);
    console.log(...datos.entries());
    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)

    const {todoName,todoDescripcion,todoEstado} = objetoDatos

    if (!todoName.trim()) {
      console.log('escribe algo')
      return
    }
    console.log('bien')
  };


  return (
    <>
      <h2>Form No Controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
        />
        <textarea
          name="todoDescripcion"
          placeholder="Ingrese descripcion del todo"
          className="form-control mb-2"
        />

        <select name="todoEstado" className="form-control mb-2">
          <option value="pendiente">Pendientes</option>
          <option value="completada">Completada</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormNoControlado;
