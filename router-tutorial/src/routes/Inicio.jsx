import { useState } from "react";

const Inicio = () => {
  const [user, setUser] = useState(false);

  return (
    <div>
      <h1>Inicio</h1>
      <h2>{user ? "Conectado" : "Desconectado"}</h2>
      {user ? (
        <button 
          className="btn btn-danger" 
          onClick={() => setUser(false)}
        >
          Desconectado
        </button>
      ) : (
          <button 
            className="btn btn-primary" 
            onClick={() => setUser(true)}>
          Acceder
          </button>
      )}
    </div>
  );
};

export default Inicio;
