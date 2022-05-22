import React from "react";
import '../styles/Testimonio.css'

function Testimonio(props) {
  return (
    <>
      <div className="contenedor-testimonio">
        <img 
        className="imagen-testimonio" alt="foto" 
        src={props.imagen} />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">{props.nombre} in {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} in {props.empresa}</p>
          <p className="texto-testimonio">'{props.testimonio}'</p>
        </div>
      </div>
    </>
  );
}

export default Testimonio;
