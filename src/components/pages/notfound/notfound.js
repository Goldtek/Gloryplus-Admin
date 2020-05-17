
import React, {useEffect, Fragment } from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet"
function Notfound() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
 document.getElementById("page-body").classList.add("four-zero-four");
  });

  return (
    <Fragment>
         <Helmet>
<title>Error 404</title>
</Helmet>
    <div className="four-zero-four-container">
    <div className="error-code">404</div>
    <div className="error-message">This page doesn't exist</div>
    <div className="button-place">
        <Link to="/" className="btn btn-default btn-lg waves-effect">GO TO HOMEPAGE</Link>
    </div>
</div>
</Fragment>
  );
}

export default Notfound