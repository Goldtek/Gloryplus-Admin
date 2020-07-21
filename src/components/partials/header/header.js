import React, { Fragment } from "react";
import { Helmet } from "react-helmet"
const Header = ({ title }) => {

  const slideIn = (e) => {
    e.preventDefault()
  }
  return (
    // <!-- Main Navbar-->
    <React.Fragment>
      <div className="page-header">
        <nav className="navbar navbar-expand primary">
          <section className="material-design-hamburger navigation-toggle" onClick={slideIn}>
            <a href="#" data-activates="slide-out"
              className="button-collapse material-design-hamburger__icon">
              <span className="material-design-hamburger__layer"></span>
            </a>
          </section>
          <a className="navbar-brand" href="#">GLory Plus Int'l</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link right-sidebar-link" href="/dashboard/user/1234"><i
                  className="material-icons">person</i></a>
              </li>

              <li className="nav-item dropdown d-none d-lg-block">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">notifications_none</i>
                  <span className="badge">4</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dd-notifications"
                  aria-labelledby="navbarDropdown">
                  <li className="notification-drop-title">Today</li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle cyan"><i
                          className="material-icons">done</i></div>
                        <div className="notification-text">
                          <p><b>Alan Grey</b> uploaded new theme</p><span>7 min ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle deep-purple"><i
                          className="material-icons">cached</i></div>
                        <div className="notification-text">
                          <p><b>Tom</b> updated status</p><span>14 min ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle red"><i
                          className="material-icons">delete</i></div>
                        <div className="notification-text">
                          <p><b>Amily Lee</b> deleted account</p><span>28 min ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle cyan"><i
                          className="material-icons">person_add</i></div>
                        <div className="notification-text">
                          <p><b>Tom Simpson</b> registered</p><span>2 hrs ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle green"><i
                          className="material-icons">file_upload</i></div>
                        <div className="notification-text">
                          <p>Finished uploading files</p><span>4 hrs ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-drop-title">Yestarday</li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle green"><i
                          className="material-icons">security</i></div>
                        <div className="notification-text">
                          <p>Security issues fixed</p><span>16 hrs ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle indigo"><i
                          className="material-icons">file_download</i></div>
                        <div className="notification-text">
                          <p>Finished downloading files</p><span>22 hrs ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="notification">
                        <div className="notification-icon circle cyan"><i
                          className="material-icons">code</i></div>
                        <div className="notification-text">
                          <p>Code changes were saved</p><span>1 day ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment >
  );
};

export default Header;
