import React, { Fragment } from "react";

const breadcrumb = ({ title, crumb }) => {
  return (
    <Fragment>
      <header className="page-header">
        <div className="container-fluid">
          <h2 className="no-margin-bottom">{title}</h2>
        </div>
      </header>
      <div className="breadcrumb-holder container-fluid">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/dashboard">Home</a>
          </li>
          <li className="breadcrumb-item active">{crumb}</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default breadcrumb;
