import React from "react";
import { Link } from "react-router-dom";
import NavImg from "./icon4.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand">
            {" "}
            <img src={NavImg} style={{ width: 55, height: 44 }} />{" "}
            <span className="fw-bold h2 text-secondary">Educator</span>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link fw-semibold text-uppercase active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/programs"
                  className="nav-link fw-semibold text-uppercase"
                >
                  Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-uppercase">Faq</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-uppercase">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link fw-semibold text-uppercase"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link fw-semibold text-uppercase"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
