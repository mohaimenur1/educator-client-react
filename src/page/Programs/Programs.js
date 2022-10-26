import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/SideBar/Sidebar";

const Programs = () => {
  const programs = useLoaderData();
  return (
    <div className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mt-4">
            <h4 className="mb-2 text-center blog-heading">Programs</h4>
            {programs.map((category) => {
              return <Sidebar key={category.id} category={category} />;
            })}
          </div>
          <div className="col-lg-9">
            <div className="row g-3">
              <h3 className="text-center mb-2 blog-heading">
                Archives Programs
              </h3>
              {programs.map((program) => {
                return <Card key={program.id} program={program} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
