import React from "react";
import { useSelector } from 'react-redux';

const SideBar = () => {

  const user = useSelector(state => state.user);
  const { countries, states, cities } = user;
  return (
    // <!-- Side Navbar -->
    <nav className="side-navbar">
      {/* <!-- Sidebar Header--> */}
      <div className="sidebar-header d-flex align-items-center">
        <a href="dashboard/profile">
          <div className="avatar">
            <img
              src="images/user.png"
              alt="..."
              className="img-fluid rounded-circle"
            />
          </div>
        </a>
        <div className="title">
          <h1 className="h4" style={{ color: "#fff" }}>
            Chisom Dike
          </h1>
          <p>Super Admin</p>
        </div>
      </div>

      <ul className="list-unstyled">
        <li id="home">
          <a href="/dashboard">
            {" "}
            <i className="fa fa-fire"></i> Dashboard{" "}
          </a>
        </li>
        <li id="branch">
          <a href="#branchDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="icon-padnote"></i>Branches
          </a>
          <ul id="branchDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/branch/create">Create New Branch</a>
            </li>
            <li>
              <a href="/dashboard/branches">List of Branches</a>
            </li>
          </ul>
        </li>

        <li id="cell">
          <a href="#cellDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="fa fa-home"></i>  Cell
          </a>
          <ul id="cellDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/cell/create">Create Cell</a>
            </li>
            <li>
              <a href="/dashboard/cells">List of Cells</a>
            </li>
          </ul>
        </li>


        <li id="livestream">
          <a
            href="#tablesDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="fa fa-video-camera"></i>  Livestream
          </a>
          <ul id="tablesDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/livestream">Create Livestream</a>
            </li>
          </ul>
        </li>
        <li id="gpa">
          <a
            href="#chartsDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="fa fa-certificate"></i> GPA
          </a>
          <ul id="chartsDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/gpa/create">Create Course</a>
            </li>
            <li>
              <a href="/dashboard/gpa/view">Course List</a>
            </li>
          </ul>
        </li>
        <li id="members">
          <a href="#formsDropdown" aria-expanded="false" data-toggle="collapse">
            <i className="icon-padnote"></i>Members
          </a>
          <ul id="formsDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/member/newuser">Create Admin Panel User</a> 
            </li>

            <li>
              <a href="/dashboard/first-timers">First Timer</a> {/** i dont think there should be  */}
            </li>

            <li>
              <a href="/dashboard/members">List of Members</a>
            </li>
          </ul>
        </li>
        <li id="gallery">
          <a
            href="#componentsDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="icon-page"></i>Gallery
          </a>
          <ul id="componentsDropdown" className="collapse list-unstyled">
            <li>
              <a href="/dashboard/gallery/create">Create Gallery</a>
            </li>
            <li>
              <a href="/dashboard/gallery/view">View Gallery</a>
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
      </ul>
    </nav>
  );
};

export default SideBar;
