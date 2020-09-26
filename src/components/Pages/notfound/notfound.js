import React from "react";
import "./notfound.css";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  return (
    <div id="main">
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <div className="fof">
        <h1>Error 404</h1>
        <br />
        <a href="/dashboard">Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
