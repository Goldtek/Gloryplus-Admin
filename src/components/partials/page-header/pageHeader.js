import React, { Fragment } from "react";

const pageHeader = ({ title, currpg }) => {
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
          <li className="breadcrumb-item active">{currpg}</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default pageHeader;
