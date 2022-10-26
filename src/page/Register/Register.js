import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import RegisterImg from "./register.jpg";

const Register = () => {
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    register(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="mt-4  container">
      <div className="row">
        <div className="col-lg-6">
          <img src={RegisterImg} alt="" className="img-fluid mt-5" />
        </div>

        <div className="col-lg-6">
          <h3 className="text-center mt-4 text-decoration-underline">Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="form3Example3"
                className="form-control"
                required
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="form3Example4"
                className="form-control"
                required
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                id="form3Example4"
                className="form-control"
              />
            </div>

            <div className="form-check d-flex flex-column justify-content-center align-items-center mb-4">
              {/* <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example33"
                checked
              /> */}
              <label className="form-check-label" htmlFor="form2Example33">
                <span className="text-danger fw-bold">{error}</span>
              </label>
              <label className="form-check-label" htmlFor="form2Example33">
                <Link to="/login">Already Have An Account?</Link>
              </label>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
