import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ program }) => {
  return (
    <div className="col-lg-6">
      <div className="card shadow-lg h-100">
        <img src={program.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-details d-flex justify-content-between">
            <h5 className="card-title fw-bold">{program.pragram_name}</h5>
            <span className="fw-bolder">Credit: {program.topic}</span>
          </div>
          <p className="card-text">{program.description}</p>
          <div className="card-footer d-flex justify-content-between">
            <span className="fw-bold">Students: {program.student}</span>
            <span className="fw-bold">price: {program.price}</span>
          </div>

          <div className="btn-container d-grid gap-2 mt-3">
            <Link
              to={`/programs/${program.id}`}
              className="btn btn-custom fw-bold"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
