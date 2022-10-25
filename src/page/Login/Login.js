import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-5 ">
      <h2 className="text-center">Login Form</h2>
      <form className="mt-4">
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">
            Email address
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
                checked
              />
              <label className="form-check-label" for="form2Example34">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </div>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
