import React from "react";
import FaqImg from "./img/faq.png";

const Faq = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center p-2">
          <span className="display-2 fw-semibold link-text-color">FAQ</span>
          <p className="fs-5">
            Here is Faq Section where you can connected with our experts to
            asking some frequently ask questions.
          </p>
          <button className="btn btn-custom rounded-pill">Read More</button>
        </div>
        <div className="col-lg-6 ">
          <img src={FaqImg} className="img-fluid p-5" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
