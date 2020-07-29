import React from "react";

const breadcrumb = ({ crumb, crumbItem }) => {
  return (
    <div className="col-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">{crumbItem}</a></li>
          <li className="breadcrumb-item"><a href="#">{crumb}</a></li>
        </ol>
      </nav>
    </div>

  );
};

export default breadcrumb;
