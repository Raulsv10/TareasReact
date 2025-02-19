import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo.jpeg";
import { CartWidget } from "./CartWidget";

function navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-topnav bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src={Logo} alt="Logo" width="45" height="40" />
          </a>
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
                <a className="nav-link" aria-current="page" href="">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Carrito
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Consulta tu pedido
                </a>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default navbar;
