import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header, Sidebar } from "../../partials";
import Content from "../main";
class dashboard extends React.Component {
  componentDidMount() {
    //add class to the body tag on page load
    document.getElementById("page-body").classList.add("theme-red");
  }
  render() {
    return (
      <Fragment>
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <Sidebar />
        {/* CLOSE SIDE BAR */}

        {/* CONTENT */}
        <Content title="">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">help</i>
                </div>
                <div className="content">
                  <div className="text">NEW TICKETS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="257"
                    data-speed="1000"
                    data-fresh-interval="20"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="info-box bg-light-green hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">forum</i>
                </div>
                <div className="content">
                  <div className="text">NEW COMMENTS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="243"
                    data-speed="1000"
                    data-fresh-interval="20"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="info-box bg-orange hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">person_add</i>
                </div>
                <div className="content">
                  <div className="text">NEW VISITORS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="1225"
                    data-speed="1000"
                    data-fresh-interval="20"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="header bg-red">
                  <h2>
                    Red - Title <small>Description text here...</small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <Link to="#">Action</Link>
                        </li>
                        <li>
                          <Link to="#">Another action</Link>
                        </li>
                        <li>
                          <Link to="#">Something else here</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  Quis pharetra a pharetra fames blandit. Risus faucibus velit
                  Risus imperdiet mattis neque volutpat, etiam lacinia netus
                  dictum magnis per facilisi sociosqu. Volutpat. Ridiculus
                  nostra.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="header bg-cyan">
                  <h2>
                    Cyan - Title <small>Description text here...</small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li>
                      <Link to="#">
                        <i className="material-icons">mic</i>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <Link to="#">Action</Link>
                        </li>
                        <li>
                          <Link to="#">Another action</Link>
                        </li>
                        <li>
                          <Link to="#">Something else here</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  Quis pharetra a pharetra fames blandit. Risus faucibus velit
                  Risus imperdiet mattis neque volutpat, etiam lacinia netus
                  dictum magnis per facilisi sociosqu. Volutpat. Ridiculus
                  nostra.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="header bg-green">
                  <h2>
                    Green - Title <small>Description text here...</small>
                  </h2>
                  <ul className="header-dropdown m-r-0">
                    <li>
                      <Link to="#">
                        <i className="material-icons">info_outline</i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="material-icons">help_outline</i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  Quis pharetra a pharetra fames blandit. Risus faucibus velit
                  Risus imperdiet mattis neque volutpat, etiam lacinia netus
                  dictum magnis per facilisi sociosqu. Volutpat. Ridiculus
                  nostra.
                </div>
              </div>
            </div>
          </div>
        </Content>
        {/* CLOSE CONTENT */}
      </Fragment>
    );
  }
}

export default dashboard;
