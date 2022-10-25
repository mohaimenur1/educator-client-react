import React from "react";
import "./Home.css";
import DetailImg from "./exam2.jpg";

const Home = () => {
  return (
    <div>
      <header className="d-flex flex-column justify-content-center">
        <div className="container text-center d-flex flex-column justify-content-center align-items-center">
          <span className="text-white display-2 fw-bold lh-base">
            Admission Test Program.
          </span>
          <p className="text-white fw-bold lh-lg ">
            Easy to Learn any thing from the best courses with best selling tag
            courses. <br></br>The educators are well knowledge about thier
            learing and also well organised about their course structure.{" "}
          </p>
          <div className="d-flex text-center">
            <button className="btn btn-custom btn-lg ms-2 fw-bold">
              Bolgs
            </button>
            <button className="btn btn-outline-light btn-lg ms-2 fw-bold">
              Go To our Programs
            </button>
          </div>
        </div>
      </header>

      {/* main section */}
      <section className="-flex justify-content-centera align-iitems-center mt-5 container">
        <h1 className="text-center mb-4 text-secondary">Visit Our Programs</h1>
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid me-4" src={DetailImg} alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="details-section  ">
              <h2 className="text-secondary">
                Best Program for University Admission test.
              </h2>
              <p className="text-secondary">
                What do you think is better to receive after each lesson: a
                lovely looking badge or important skills you can immediately put
                into practice. There is really no magic to it
              </p>
              <button className="btn btn-custom fw-bold">Programs</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
