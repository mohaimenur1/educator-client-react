import React from "react";
import { useLoaderData } from "react-router-dom";
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
  //   console.log(detailsData);
  //   const {
  //     id,
  //     pragram_name,
  //     image,
  //     topic,
  //     student,
  //     price,
  //     description,
  //     vision,
  //   } = detailsData;
  const { curriculum } = detailsData;
  console.log(curriculum);

  return (
    <div className="container">
      <div className="card shadow mt-3">
        <div className="card-footer heading-bg">
          <h5 className="card-title text-center mt-5 text-decoration-underline display-4 ">
            {detailsData?.pragram_name}
          </h5>
          <div className="d-flex justify-content-center">
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
                  className="img-fluid shadow"
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
            Description {detailsData?.pragram_name}
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
                  <div>
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
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
