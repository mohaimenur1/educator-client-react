import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_cg9lvxff.json"
        background="transparent"
        speed="1"
        style={{ width: "500px", height: "500px" }}
        loop
        autoplay
      ></lottie-player>
      <div className="details">
        <h3>OPPS! SOMETHING WENT WRONG</h3>
      </div>
      <div className="button-error mt-4">
        <Link to="/" className="btn btn-custom fw-bold">
          Go Back to Home Page!!!
        </Link>
      </div>
    </div>
  );
};

export default Error;
