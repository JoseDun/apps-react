import React from "react";
import { Link } from "react-router-dom";

const NoEncontrado = () => {
  return (
    <>
      <h1>¡Error 404, pagina no encontrada!</h1>
      <Link to="/" className="btn btn-outline-primary">
        Inicio
      </Link>
    </>   
  );
};

export default NoEncontrado;
