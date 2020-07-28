import React from "react";
import "./notfound.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"
const ErrorPage = () => {
  return (
    <div id="main">
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <div className="fof">
        <h1>Error 404</h1>
        <br />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
