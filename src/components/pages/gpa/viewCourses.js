import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { Header, Sidebar, PageHeaderTitle } from "../../partials";
// import Content from "../main";
const ViewCourses = () => {
  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
  });
  return (
    <div className="page">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div class="page-content d-flex align-items-stretch">
        <Sidebar />

        <div class="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="GPA" currpg="List Course" />
          <div className="container-fluid">
            {/* <!-- end row--> */}
            <h4 class="mt-5 mb-4">GPA Coourses</h4>
            <div class="row">
              <div class="col-md-12 col-xs-12 col-lg-12">
                <div class="card-deck-wrapper">
                  <div class="card-deck">
                    <div class="card">
                      <img
                        src="img/mockup7.jpg"
                        alt="Card  cap"
                        class="card-img-top img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card">
                      <img
                        src="img/mockup6.jpg"
                        alt="Card  cap"
                        class="card-img-top img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card">
                      <img
                        src="img/mockup4.jpg"
                        alt="Card  cap"
                        class="card-img-top img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row--> */}
          </div>
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );
};

export default ViewCourses;
