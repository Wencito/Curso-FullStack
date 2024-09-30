import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Veterinaria
      </Link>
      <div className="navbar-right" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Mascotas<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/veterinarias">
              Veterinarios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/duenos">
              Dueños
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/consultas">
              Consultas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
