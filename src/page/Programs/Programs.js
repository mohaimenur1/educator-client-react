import React from "react";
import demoImg from "../Home/exam2.jpg";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

const Programs = () => {
  const programs = useLoaderData();
  return (
    <div className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h3 className="mb-2 text-center">sidebar</h3>
          </div>
          <div className="col-lg-9">
            <div className="row g-3">
              <h1 className="text-center mb-2">Archives Programs</h1>
              {programs.map((program) => {
                return <Card key={program.id} program={program} />;
              })}
              {/* card 2 */}
              {/* <div className="col-lg-6">
                <div className="card">
                  <img src={demoImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
              {/* card 3 */}
              {/* <div className="col-lg-6">
                <div className="card">
                  <img src={demoImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
              {/* card 4 */}
              {/* <div className="col-lg-6">
                <div className="card">
                  <img src={demoImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
              {/* card 5 */}
              {/* <div className="col-lg-6">
                <div className="card">
                  <img src={demoImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
              {/* card 6 */}
              {/* <div className="col-lg-6">
                <div className="card">
                  <img src={demoImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
