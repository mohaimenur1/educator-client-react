import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./ProgramDetails.css";
import Pdf from "react-to-pdf";
import PdfImg from "./img/1.png";

const ref = React.createRef();

const options = {
  orientation: "potrait",
  unit: "in",
  format: [15, 15],
};

const ProgramDetails = () => {
  const detailsData = useLoaderData();
  const { curriculum } = detailsData;
  console.log(curriculum);

  return (
    <div className="container">
      <div className="card shadow mt-3">
        <div className="card-footer heading-bg d-flex justify-content-center align-items-center">
          <h5 className="card-title text-center me-3 fw-semibold  display-4 ">
            {detailsData?.pragram_name}
          </h5>
          <div className="">
            <Pdf
              targetRef={ref}
              filename="code-example.pdf"
              options={options}
              x={1}
              y={1}
              scale={1}
            >
              {({ toPdf }) => (
                <img
                  className="img-fluid pdf-icon"
                  src={PdfImg}
                  onClick={toPdf}
                  alt=""
                />
              )}
            </Pdf>
          </div>
        </div>
        <img
          src={detailsData?.image}
          style={{ height: 600 }}
          className="card-img-top img-fluid p-3"
          alt="..."
        />
        <div className="card-body" ref={ref}>
          <h4 className="text-center mb-2 tw-bold text-dark">
            Description : {detailsData?.pragram_name}
          </h4>
          <p className="card-text">{detailsData?.description}</p>
          <div className="card-footer d-flex justify-content-between">
            <span className="fw-bold">
              {" "}
              Number of Students Complete: {detailsData?.student}
            </span>
            <span className="fw-bold">price: {detailsData?.price}</span>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <span className="fw-bold">topic: {detailsData?.topic}</span>
          </div>
          <div className="program-curiculum">
            <span>
              <h4 className="text-center mt-4">
                Curriculum / Number of Courses
              </h4>
              {curriculum.map((c) => {
                return (
                  <div key={c}>
                    <li>{c}</li>
                  </div>
                );
              })}
            </span>
          </div>
          <div className="card-footer mt-4 text-center">
            <h4>Our Vision</h4>
            <p>{detailsData?.vision}</p>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to={`/checkout/${detailsData.id}`}
              type="button"
              className="shadow btn btn-custom btn-lg mt-3"
            >
              Get premium access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
