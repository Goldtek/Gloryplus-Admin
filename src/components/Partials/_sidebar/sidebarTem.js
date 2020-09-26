import React from "components/Partials/_sidebar/node_modules/react";
import { useHistory } from "components/Partials/_sidebar/node_modules/react-router-dom";
import { authenticationService } from "components/Partials/_sidebar/node_modules/_services";
const userId = "ab4ce6fff3582810";

const SideBar = () => {
  const history = useHistory();

  const userLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <nav className="side-navbar">
      <div className="sidebar-header d-flex align-items-center">
        <a href={`dashboard/user/${userId}`}>
          <div className="avatar">
            <img
              src="img/avatar-7.jpg"
              alt="user"
              className="img-fluid rounded-circle"
            />
          </div>
        </a>
        <div className="title">
          <h1 className="h4" style={{ color: "#fff" }}>
            Elemson Ifeanyi
          </h1>
          <p>Super Admin</p>
        </div>
      </div>
      <span className="heading">Main</span>
      <ul className="list-unstyled">
        <li id="home">
          <a href="/dashboard">
            {" "}
            <i className="fa fa-fire"></i>Home{" "}
          </a>
        </li>
        <li id="livestream">
          <a
            href="#tablesDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="fa fa-video-camera"></i>Livestream
          </a>
          <ul id="tablesDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/livestream">Create Livestream</a>
            </li>
          </ul>
        </li>
        <li id="gpa">
          <a href="#gpaDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="fa fa-certificate"></i>GPA
          </a>
          <ul id="gpaDropdown" className="collapse list-unstyled">
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
        <li id="members">
          <a href="#formsDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="icon-padnote"></i>Members
          </a>
          <ul id="formsDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/member/create">Create New Member</a>
            </li>
            <li>
              <a href="#!">List of Members</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#componentsDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="icon-page"></i>Gallery
          </a>
          <ul id="componentsDropdown" className="collapse list-unstyled">
            <li>
              <a href="#!">Create Gallery</a>
            </li>
            <li>
              <a href="#!">View Gallery</a>
            </li>
          </ul>
        </li>
        <li id="event">
          <a href="#pagesDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="icon-interface-windows"></i>Event
          </a>
          <ul id="pagesDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/event/create">Create Event</a>
            </li>
            <li>
              <a href="/dashboard/event/view">View Events</a>
            </li>
          </ul>
        </li>
        <li id="sermon">
          <a
            href="#sermonDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="icon-interface-windows"></i>Sermon
          </a>
          <ul id="sermonDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/sermon/create">Create Sermon</a>
            </li>
            <li>
              <a href="/dashboard/sermon/view">View Sermon</a>
            </li>
          </ul>
        </li>
        <li id="cell">
          <a href="#cellDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="icon-interface-windows"></i>Cell Location
          </a>
          <ul id="cellDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/cell/create">Create Location</a>
            </li>
            <li>
              <a href="/dashboard/cell/view">View Location</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#TestimonialDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="icon-interface-windows"></i>Testimony
          </a>
          <ul id="TestimonialDropdown" className="collapse list-unstyled">
            <li>
              <a href="#!">Publish Testimony</a>
            </li>
            <li>
              <a href="#!">View Testimony</a>
            </li>
          </ul>
        </li>
      </ul>
      <span className="heading">Extras</span>
      <ul className="list-unstyled">
        <li>
          <a href="#">
            {" "}
            <i className="icon-flask"></i>Pastor's Corner{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i className="icon-screen"></i>Email{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i className="icon-mail"></i>Report Issue{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i className="fa fa-sign-out text-danger" onClick={userLogout}></i>
            Logout{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
