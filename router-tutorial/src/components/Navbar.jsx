import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
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
