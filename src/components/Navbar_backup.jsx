import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo.jpeg";
import { CartWidget } from "./CartWidget";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-topnav bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="45" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="nav-link dropdown-item"
                      to="/productos/categoria/women's clothing"
                    >
                      Mujer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link dropdown-item"
                      to="/productos/categoria/men's clothing"
                    >
                      Hombre
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  categoria
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  Carrito
                  <CartWidget />
                </Link>
              </li>
              {/* <li>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
