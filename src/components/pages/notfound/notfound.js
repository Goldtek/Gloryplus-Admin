import React from "react";
import { Helmet } from "react-helmet";
import "./notfound.css";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
// import Content from "../main";
const Notfound = () => {
  // componentDidMount() {
  //   document.getElementById("home").classList.add("active");
  // }

  return (
    <div className="page notfound">
      <Helmet>
        <title>404</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="Dashboard" currpg="404" />

          {/* <!-- Dashboard Counts Section--> */}
          <section className="dashboard-counts no-padding-bottom ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="error-template">
                    <h1>Oops!</h1>
                    <h2>404 Not Found</h2>
                    <div className="error-details">
                      Sorry, an error has occured, Requested page not found!
                    </div>
                    <div className="error-actions">
                      <a href="/dashboard" className="btn btn-primary btn-lg">
                        <span className="fa fa-home"></span> Take Me Home{" "}
                      </a>
                      <a href="#!" className="btn btn-default btn-lg">
                        <span className="fa fa-envelope"></span> Contact Support{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          {/* <!-- Dashboard Header Section    --> */}
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );
};

export default Notfound;
