import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">{user ? "Juanito" : "Sin conexion"}</Link>
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">
          blog
        </NavLink>
        <NavLink to="/contacto" className="btn btn-outline-primary">
          contacto
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
