import React from "react";
import "./Home.css";
import DetailImg from "./exam2.jpg";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="d-flex flex-column justify-content-center">
        <div className="container text-center d-flex flex-column justify-content-center align-items-center">
          <span className="text-white display-2 fw-bold lh-base">
            University Program.
          </span>
          <p className="text-white fw-semibold lh-lg fs-6">
            Easy to Learn any thing from the best courses with best selling tag
            courses. <br></br>The educators are well knowledge about thier
            learing and also well organised about their course structure.{" "}
          </p>
          <div className="d-flex text-center">
            <Link to="/blogs" className="btn btn-custom btn-lg ms-2 fw-bold">
              Blogs
            </Link>
            <Link
              to="/programs"
              className="btn btn-outline-light btn-lg ms-2 fw-bold"
            >
              Go To our Programs
            </Link>
          </div>
        </div>
      </header>

      {/* main section */}
      <section className="flex justify-content-centera align-iitems-center mt-5 mb-4 container">
        <h1 className="text-center mb-4  blog-heading">Visit Our Programs</h1>
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid me-4" src={DetailImg} alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="details-section  ">
              <h2 className="">Best Program for University Student.</h2>
              <p className="">
                What do you think is better to receive after each lesson: a
                lovely looking badge or important skills you can immediately put
                into practice. There is really no magic to it
              </p>
              <Link to="/programs" className="btn btn-custom fw-bold">
                Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
