import React from "react";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";

const FormToUseEffect = ({setNombrePersonaje}) => {
  const [inputs, handleChange, reset] = useForm({
    nombre: "",
  });
  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);

    if (!nombre.trim()) {
        return Swal.fire({
            title: 'Error',
            text:'Escribre algo',
            icon:'error',
        })
    }


    setNombrePersonaje(nombre.trim().toLowerCase())
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Personaje"
          className="form-control mb-2"
          onChange={handleChange}
          value={nombre}
          name="nombre"
        />
        <button 
        type="submit"
        className="btn btn-dark">
            Buscar
        </button>
      </form>

    </>
  );
};

export default FormToUseEffect;
