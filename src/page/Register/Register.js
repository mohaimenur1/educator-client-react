import React from "react";
import { Link } from "react-router-dom";
import RegisterImg from "./register.jpg";

const Register = () => {
  return (
    <div className="mt-4  container">
      <div className="row">
        <div className="col-lg-6">
          <img src={RegisterImg} alt="" className="img-fluid mt-5" />
        </div>

        <div className="col-lg-6">
          <h3 className="text-center mt-4 text-decoration-underline">Form</h3>
          <form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form3Example1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form3Example3">
                Email address
              </label>
              <input type="email" id="form3Example3" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form3Example4">
                Password
              </label>
              <input
                type="password"
                id="form3Example4"
                className="form-control"
              />
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example33"
                checked
              />
              <label className="form-check-label" for="form2Example33">
                <Link to="/login">Already Have An Account?</Link>
              </label>
            </div>

            <div class="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
