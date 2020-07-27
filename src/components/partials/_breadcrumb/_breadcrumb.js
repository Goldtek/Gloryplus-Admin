import React from "react";

const breadcrumb = ({ crumb }) => {
  return (
    <div className="col-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
          <li className="breadcrumb-item"><a href="#">{crumb}</a></li>
        </ol>
      </nav>
    </div>

  );
};

export default breadcrumb;
