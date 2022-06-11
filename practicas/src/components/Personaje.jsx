import React from "react";

const Personaje = ({ personaje }) => {
  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <img src={personaje.image} alt={`imagen - ${personaje.name}`} />
        <div className="card-body">
          <h5>{personaje.name}</h5>
          <p>{personaje.species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
