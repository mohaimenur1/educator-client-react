import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ category }) => {
  //   const handleClick = (id) => {
  //     console.log("sidebar buttn click" + id);
  //   };
  console.log(category.id);
  return (
    <div>
      <div className="col-lg-12 mt-3">
        <div
          className="list-gp list-group-hover"
          //   id="list-tab"
          //   role="tablist"
        >
          <Link
            to={`/programs/${category.id}`}
            className="list-group-item list-group-item-action"
            // id="list-home-list"
            // data-bs-toggle="list"
            // // href="#list-home"
            // role="tab"
            // aria-controls="list-home"
          >
            {category.pragram_name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
