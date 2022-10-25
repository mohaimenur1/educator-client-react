import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ category }) => {
  return (
    <div>
      <div className="col-lg-12 mt-3">
        <div className="list-group" id="list-tab" role="tablist">
          <Link
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-bs-toggle="list"
            // href="#list-home"
            role="tab"
            aria-controls="list-home"
          >
            {category.pragram_name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
