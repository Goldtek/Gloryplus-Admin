import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
export default function sidebar() {
  return (
    <Fragment>
      <section>
        {/* <!-- Left Sidebar --> */}
        <aside id="leftsidebar" className="sidebar">
          {/* <!-- User Info --> */}
          <div className="user-info">
            <div className="image">
              <img src="images/user.png" width="48" height="48" alt="User" />
            </div>
            <div className="info-container">
              <div
                className="name"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                John Doe
              </div>
              <div className="email">john.doe@example.com</div>
              <div className="btn-group user-helper-dropdown">
                <i
                  className="material-icons"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  keyboard_arrow_down
                </i>
                <ul className="dropdown-menu pull-right">
                  <li>
                    <Link to="/dashboard/profile">
                      <i className="material-icons">person</i>Profile
                    </Link>
                  </li>

                  <li role="separator" className="divider"></li>
                  <li>
                    <Link to="#!">
                      <i className="material-icons">input</i>Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu">
            <ul className="list">
              <li>
                <NavLink to="/dashboard" exact={true}>
                  <i className="material-icons">home</i>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/livestream" exact={true}>
                  <i className="material-icons">movie</i>
                  <span>Livestream</span>
                </NavLink>
              </li>

              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">widgets</i>
                  <span>GPA</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <NavLink
                      to="/dashboard/create-course"
                      exact={true}
                      className="active"
                    >
                      <span>Create Course</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/create-course"
                      exact={true}
                      className="active"
                    >
                      <span>Course List</span>
                    </NavLink>
                  </li>
                  <li>
                    <Link to="#!">
                      <span></span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">widgets</i>
                  <span>Gallery</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="#!">
                      <span>Create Gallery</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#!">
                      <span>View Gallery</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">assignment</i>
                  <span>Sermon</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="#!">Video</Link>
                  </li>
                  <li>
                    <Link to="#!">Audio</Link>
                  </li>
                  <li>
                    <Link to="#!">View Sermon</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">view_list</i>
                  <span>Partner</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="#!">Tithe</Link>
                  </li>
                  <li>
                    <Link to="#!">Offering</Link>
                  </li>
                  <li>
                    <Link to="#!">Seed</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">perm_media</i>
                  <span>Members</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="#!">First Timers</Link>
                  </li>
                  <li>
                    <Link to="#!">Second Timers</Link>
                  </li>
                  <li>
                    <Link to="#!">View Members</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">pie_chart</i>
                  <span>Home Church</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="pages/charts/morris.html">Location</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!" className="menu-toggle">
                  <i className="material-icons">content_copy</i>
                  <span>Pastor Section</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="#!">Profile</Link>
                  </li>
                </ul>
              </li>

              <li className="header">LABELS</li>
              <li>
                <Link to="#!">
                  <i className="material-icons col-red">donut_large</i>
                  <span>Important</span>
                </Link>
              </li>
              <li>
                <Link to="#!">
                  <i className="material-icons col-amber">donut_large</i>
                  <span>Warning</span>
                  {/*   <!-- #User Info -->/* <!-- #User Info -->
<!-- Menu -->  
<!-- Menu --> */}
                </Link>
              </li>
              <li>
                <Link to="#!">
                  <i className="material-icons col-light-blue">donut_large</i>
                  <span>Information</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- #Menu -->
<!-- Footer --> */}
          <div className="legal">
            <div className="copyright">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                to="http://www.gloryplusinternational.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glory Plus Admin
              </Link>
              .
            </div>
            <div className="version">
              <b>Version: </b> 1.0
            </div>
          </div>
          {/* <!-- #Footer --> */}
        </aside>
        {/* <!-- #END# Left Sidebar -->
<!-- Right Sidebar --> */}
        <aside id="rightsidebar" className="right-sidebar">
          <ul className="nav nav-tabs tab-nav-right" role="tablist">
            {/* <li role="presentation" ><Link to="#skins" data-toggle="tab">SKINS</Link></li> */}
            <li role="presentation" className="active">
              <Link to="#settings" data-toggle="tab">
                SETTINGS
              </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane fade in active in active"
              id="settings"
            >
              <div className="demo-settings">
                <p>GENERAL SETTINGS</p>
                <ul className="setting-list">
                  <li>
                    <span>Report Panel Usage</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Email Redirect</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </li>
                </ul>
                <p>SYSTEM SETTINGS</p>
                <ul className="setting-list">
                  <li>
                    <span>Notifications</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Auto Updates</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </li>
                </ul>
                <p>ACCOUNT SETTINGS</p>
                <ul className="setting-list">
                  <li>
                    <span>Offline</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Location Permission</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        {/* <!-- #END# Right Sidebar --> */}
      </section>
    </Fragment>
  );
}
