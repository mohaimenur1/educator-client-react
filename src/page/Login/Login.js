import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Login.css";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5 ">
      <h2 className="text-center">Login Form</h2>
      <div className="card shadow">
        <form className="mt-4 p-5">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
          </div>

          <div className="row mb-4">
            {/* <div className="col d-flex justify-content-center">
              <div className="form-check link-text-color">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="form2Example34"
                  checked
                />
                <label className="form-check-label " for="form2Example34">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div> */}

            <div className="col">
              <Link className="link-text-color">Forgot password?</Link>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn login-btn-bg btn-block mb-4">
              Log In
            </button>
          </div>

          <div className="text-center">
            <p>
              Not a member?{" "}
              <Link to="/register" className="link-text-color">
                Register
              </Link>
            </p>
            <p>or sign up with:</p>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn login-btn-bg btn-floating mx-1"
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              className="btn login-btn-bg btn-floating mx-1"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
