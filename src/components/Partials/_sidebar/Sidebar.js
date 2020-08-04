import React from "react";
import { connect } from "react-redux";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
const SideBar = ({ curUser }) => {
  const { email, role, id } = curUser;
  const eventPrevent = (e) => {
    e.preventDefault();
  };

  return role === "SA" ? (
    <React.Fragment>
      <div className="page-sidebar">
        <div className="page-sidebar-inner">
          <div className="page-sidebar-profile">
            <div className="sidebar-profile-image">
              <img src="./assets/images/avatars/avatar1.png" />
            </div>
            <div className="sidebar-profile-info">
              <a
                href="#"
                className="account-settings-link"
                onClick={eventPrevent}
              >
                <p>David Doe</p>
                <span>
                  {email}
                  <i className="material-icons float-right">arrow_drop_down</i>
                </span>
              </a>
            </div>
          </div>
          <div className="page-sidebar-menu">
            <div className="page-sidebar-settings hidden">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard/user/${id}`}
                    className="waves-effect waves-grey"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-accordion-menu">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard`}
                    className="waves-effect waves-grey active"
                  >
                    <DashboardIcon /> Dashboard
                  </a>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Branch
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/branch/create">Create Branch</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/branch/view">View Branches</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">event</i>Events
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/event/create">Create Event</a>
                    </li>
                    <li>
                      <a href="/dashboard/event/view">View Event</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">photo_camera</i>Gallery
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="plugins-code-editor.html">Create Gallery</a>
                    </li>
                    <li>
                      <a href="plugins-nestable.html">View Gallery</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">movie_creation</i>GPA
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/gpa/create">Create Course</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/view">Course List</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/candidates">Candidates</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Home Cell
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Create Home Cell</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Home Cell</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">live_tv</i>Live Stream
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/livestream/create">Create Live Stream</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">group</i>Membership
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/member/create">Create Member</a>
                    </li>
                    <li>
                      <a href="/dashboard/member/create">List of Members</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>MVP
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/create">Create Users</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer">
                        Create First Timers
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer/id">
                        View First Timers
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Prayer
                    Requests
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">airplay</i>Sermon
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/create">Create Sermon</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/view">View Sermon</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Testimony
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/" className="waves-effect waves-grey">
                    <i className="material-icons text-danger">exit_to_app</i>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <p className="copyright">
              GloryPlus Int'l &copy; {new Date().getFullYear()}{" "}
            </p>
            <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : // CHECK IF ROLE IS ADMIN STARTS:::::::::::::::::::::::::::::::::::::::::::
  role === "ADMIN" ? (
    <React.Fragment>
      <div className="page-sidebar">
        <div className="page-sidebar-inner">
          <div className="page-sidebar-profile">
            <div className="sidebar-profile-image">
              <img src="./assets/images/avatars/avatar1.png" />
            </div>
            <div className="sidebar-profile-info">
              <a
                href="#"
                className="account-settings-link"
                onClick={eventPrevent}
              >
                <p>David Doe</p>
                <span>
                  {email}
                  <i className="material-icons float-right">arrow_drop_down</i>
                </span>
              </a>
            </div>
          </div>
          <div className="page-sidebar-menu">
            <div className="page-sidebar-settings hidden">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard/user/${id}`}
                    className="waves-effect waves-grey"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-accordion-menu">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard`}
                    className="waves-effect waves-grey active"
                  >
                    <DashboardIcon /> Dashboard
                  </a>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Branch
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/branch/create">Create Branch</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/branch/view">View Branches</a>
                    </li>
                  </ul>
                </li>

                {/* <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">event</i>Events
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/event/create">Create Event</a>
                    </li>
                    <li>
                      <a href="/dashboard/event/view">View Event</a>
                    </li>
                  </ul>
                </li> */}

                {/* <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">photo_camera</i>Gallery
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="plugins-code-editor.html">Create Gallery</a>
                    </li>
                    <li>
                      <a href="plugins-nestable.html">View Gallery</a>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">movie_creation</i>GPA
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/gpa/create">Create Course</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/view">Course List</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/candidates">Candidates</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Home Cell
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Create Home Cell</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Home Cell</a>
                    </li>
                  </ul>
                </li>
                {/* 
                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">live_tv</i>Live Stream
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/livestream/create">Create Live Stream</a>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">group</i>Membership
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/member/create">Create Member</a>
                    </li>
                    <li>
                      <a href="/dashboard/member/create">List of Members</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>MVP
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/create">Create Users</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer">
                        Create First Timers
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer/id">
                        View First Timers
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Prayer
                    Requests
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li> */}

                {/* <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">airplay</i>Sermon
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/create">Create Sermon</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/view">View Sermon</a>
                    </li>
                  </ul>
                </li> */}

                {/* <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Testimony
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <a href="/" className="waves-effect waves-grey">
                    <i className="material-icons text-danger">exit_to_app</i>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <p className="copyright">
              GloryPlus Int'l &copy; {new Date().getFullYear()}{" "}
            </p>
            <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : //  CHECK IF ROLE ADMIN ENDS ::::::::::::::::::::::::::::::::::::::::::::::
  role === "MEDIA" ? (
    // CHECK IF ROLE IS MEDIA STARTS HERE :::::::::::::::::::::::::::::::::::::
    <React.Fragment>
      <div className="page-sidebar">
        <div className="page-sidebar-inner">
          <div className="page-sidebar-profile">
            <div className="sidebar-profile-image">
              <img src="./assets/images/avatars/avatar1.png" />
            </div>
            <div className="sidebar-profile-info">
              <a
                href="#"
                className="account-settings-link"
                onClick={eventPrevent}
              >
                <p>David Doe</p>
                <span>
                  {email}
                  <i className="material-icons float-right">arrow_drop_down</i>
                </span>
              </a>
            </div>
          </div>
          <div className="page-sidebar-menu">
            <div className="page-sidebar-settings hidden">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard/user/${id}`}
                    className="waves-effect waves-grey"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-accordion-menu">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard`}
                    className="waves-effect waves-grey active"
                  >
                    <DashboardIcon /> Dashboard
                  </a>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">event</i>Events
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/event/create">Create Event</a>
                    </li>
                    <li>
                      <a href="/dashboard/event/view">View Event</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">photo_camera</i>Gallery
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="plugins-code-editor.html">Create Gallery</a>
                    </li>
                    <li>
                      <a href="plugins-nestable.html">View Gallery</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">live_tv</i>Live Stream
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/livestream/create">Create Live Stream</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">airplay</i>Sermon
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/create">Create Sermon</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/view">View Sermon</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/" className="waves-effect waves-grey">
                    <i className="material-icons text-danger">exit_to_app</i>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <p className="copyright">
              GloryPlus Int'l &copy; {new Date().getFullYear()}{" "}
            </p>
            <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : // CHECK IF ROLE IS MEDIA ENDS ::::::::::::::::::::::::::::::::::::::::::::

  //CHECK IF ROLE IS MVP STARTS ::::::::::::::::::::::::::::::::::::::::::::::::
  role === "MVP" ? (
    <React.Fragment>
      <div className="page-sidebar">
        <div className="page-sidebar-inner">
          <div className="page-sidebar-profile">
            <div className="sidebar-profile-image">
              <img src="./assets/images/avatars/avatar1.png" />
            </div>
            <div className="sidebar-profile-info">
              <a
                href="#"
                className="account-settings-link"
                onClick={eventPrevent}
              >
                <p>David Doe</p>
                <span>
                  {email}
                  <i className="material-icons float-right">arrow_drop_down</i>
                </span>
              </a>
            </div>
          </div>
          <div className="page-sidebar-menu">
            <div className="page-sidebar-settings hidden">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard/user/${id}`}
                    className="waves-effect waves-grey"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-accordion-menu">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard`}
                    className="waves-effect waves-grey active"
                  >
                    <DashboardIcon /> Dashboard
                  </a>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>MVP
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/create">Create Users</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer">
                        Create First Timers
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer/id">
                        View First Timers
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/" className="waves-effect waves-grey">
                    <i className="material-icons text-danger">exit_to_app</i>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <p className="copyright">
              GloryPlus Int'l &copy; {new Date().getFullYear()}{" "}
            </p>
            <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : //CHECK IF ROLE IS MVP ENDS HERE :::::::::::::::::::::::::::::::::::::::::::::::

  // CHECK IF ROLE IS HFL STARTS :::::::::::::::::::::::::::::::::::::::::::::::::::::
  role === "HFL" ? (
    <React.Fragment>
      <div className="page-sidebar">
        <div className="page-sidebar-inner">
          <div className="page-sidebar-profile">
            <div className="sidebar-profile-image">
              <img src="./assets/images/avatars/avatar1.png" />
            </div>
            <div className="sidebar-profile-info">
              <a
                href="#"
                className="account-settings-link"
                onClick={eventPrevent}
              >
                <p>David Doe</p>
                <span>
                  {email}
                  <i className="material-icons float-right">arrow_drop_down</i>
                </span>
              </a>
            </div>
          </div>
          <div className="page-sidebar-menu">
            <div className="page-sidebar-settings hidden">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard/user/${id}`}
                    className="waves-effect waves-grey"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-accordion-menu">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard`}
                    className="waves-effect waves-grey active"
                  >
                    <DashboardIcon /> Dashboard
                  </a>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Branch
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/branch/create">Create Branch</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/branch/view">View Branches</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">event</i>Events
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/event/create">Create Event</a>
                    </li>
                    <li>
                      <a href="/dashboard/event/view">View Event</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">photo_camera</i>Gallery
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="plugins-code-editor.html">Create Gallery</a>
                    </li>
                    <li>
                      <a href="plugins-nestable.html">View Gallery</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">movie_creation</i>GPA
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/gpa/create">Create Course</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/view">Course List</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/candidates">Candidates</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Home Cell
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Create Home Cell</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Home Cell</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">live_tv</i>Live Stream
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/livestream/create">Create Live Stream</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">group</i>Membership
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/member/create">Create Member</a>
                    </li>
                    <li>
                      <a href="/dashboard/member/create">List of Members</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>MVP
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/create">Create Users</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer">
                        Create First Timers
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer/id">
                        View First Timers
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Prayer
                    Requests
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">airplay</i>Sermon
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/create">Create Sermon</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/view">View Sermon</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Testimony
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/" className="waves-effect waves-grey">
                    <i className="material-icons text-danger">exit_to_app</i>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <p className="copyright">
              GloryPlus Int'l &copy; {new Date().getFullYear()}{" "}
            </p>
            <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : //CHECK IF ROLE IS HFL ENDS ::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // CHECK IF ROLE IS SEC STARTS HERE :::::::::::::::::::::::::::::::::::::::::::::::::
  role === "SEC" ? (
    <React.Fragment>
      <div className="page-sidebar">
        <div className="page-sidebar-inner">
          <div className="page-sidebar-profile">
            <div className="sidebar-profile-image">
              <img src="./assets/images/avatars/avatar1.png" />
            </div>
            <div className="sidebar-profile-info">
              <a
                href="#"
                className="account-settings-link"
                onClick={eventPrevent}
              >
                <p>David Doe</p>
                <span>
                  {email}
                  <i className="material-icons float-right">arrow_drop_down</i>
                </span>
              </a>
            </div>
          </div>
          <div className="page-sidebar-menu">
            <div className="page-sidebar-settings hidden">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard/user/${id}`}
                    className="waves-effect waves-grey"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-accordion-menu">
              <ul className="sidebar-menu list-unstyled">
                <li>
                  <a
                    href={`/dashboard`}
                    className="waves-effect waves-grey active"
                  >
                    <DashboardIcon /> Dashboard
                  </a>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Branch
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/branch/create">Create Branch</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/branch/view">View Branches</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">event</i>Events
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/event/create">Create Event</a>
                    </li>
                    <li>
                      <a href="/dashboard/event/view">View Event</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">photo_camera</i>Gallery
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="plugins-code-editor.html">Create Gallery</a>
                    </li>
                    <li>
                      <a href="plugins-nestable.html">View Gallery</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">movie_creation</i>GPA
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/gpa/create">Create Course</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/view">Course List</a>
                    </li>
                    <li>
                      <a href="/dashboard/gpa/candidates">Candidates</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">home</i>Home Cell
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Create Home Cell</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Home Cell</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">live_tv</i>Live Stream
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/livestream/create">Create Live Stream</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">group</i>Membership
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      <a href="/dashboard/member/create">Create Member</a>
                    </li>
                    <li>
                      <a href="/dashboard/member/create">List of Members</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>MVP
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/create">Create Users</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer">
                        Create First Timers
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/mvp/firsttimer/id">
                        View First Timers
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Prayer
                    Requests
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">airplay</i>Sermon
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/create">Create Sermon</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/sermon/view">View Sermon</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect waves-grey">
                    <i className="material-icons">accessibility</i>Testimony
                    <i className="material-icons sub-arrow">
                      keyboard_arrow_right
                    </i>
                  </a>
                  <ul className="accordion-submenu list-unstyled">
                    <li>
                      {" "}
                      <a href="/dashboard/cell/create">Publish</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/dashboard/cell/view">View Testimonies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/" className="waves-effect waves-grey">
                    <i className="material-icons text-danger">exit_to_app</i>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <p className="copyright">
              GloryPlus Int'l &copy; {new Date().getFullYear()}{" "}
            </p>
            <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : (
    // CHECK IF ROLE IS SEC ENDS HERE ::::::::::::::::::::::::::::::::::::::::::::::::
    // REDIRECT IF NO ROLE WAS FOUND
    <Redirect
      push
      to={{
        pathname: "/",
        state: "You are not authorized, Contact Admin",
      }}
    />
  );
};

SideBar.propTypes = {
  curUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  curUser: state.User.user,
});
export default connect(mapStateToProps, null)(SideBar);
