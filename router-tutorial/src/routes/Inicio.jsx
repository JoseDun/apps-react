import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Inicio = () => {
  const { user, singIn, singOut } = useContext(UserContext);

  return (
    <div>
      <h1>Inicio</h1>
      <h2>{user ? "Conectado" : "Desconectado"}</h2>
      {user ? (
        <>
          <button className="btn btn-danger" onClick={singOut}>
            Desconectado
          </button>
          <Link to='/protegida' className="btn btn-warning">
            Ruta Protegida
          </Link>
        </>
      ) : (
        <button className="btn btn-primary" onClick={singIn}>
          Acceder
        </button>
      )}
    </div>
  );
};

export default Inicio;
