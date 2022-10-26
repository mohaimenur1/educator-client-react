import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import NavImg from "./icon4.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

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
                <Link
                  to="/blogs"
                  className="nav-link fw-semibold text-uppercase"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item d-lg-flex justify-content-center align-items-center me-1 ms-1">
                <div
                  onClick={handleToggleClick}
                  className="form-check form-switch "
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {toggle ? <span>Dark</span> : <span>Light</span>}
                  </label>
                </div>
              </li>
              {/* <li className="nav-item">
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
              </li> */}
              <li className="nav-item d-lg-flex align-items-center">
                {user?.uid ? (
                  <div className="me-2">
                    <button className="btn btn-custom" onClick={handleLogOut}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="d-lg-flex">
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
                  </div>
                )}
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link>
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      style={{ height: "40px" }}
                      className="rounded-circle"
                      // type="button"
                      data-toggle="tooltip"
                      data-placement="right"
                      title={user?.displayName}
                    />
                  ) : null}
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
