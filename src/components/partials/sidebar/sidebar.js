import React from "react";

const SideBar = () => {
  return (
    // <!-- Side Navbar -->
    <nav className="side-navbar">
      {/* <!-- Sidebar Header--> */}
      <div className="sidebar-header d-flex align-items-center">
        <a href="pages-profile.html">
          <div className="avatar">
            <img
              src="img/avatar-1.jpg"
              alt="..."
              className="img-fluid rounded-circle"
            />
          </div>
        </a>
        <div className="title">
          <h1 className="h4">Mark Stephen</h1>
          <p>Web Designer</p>
        </div>
      </div>
      {/* <!-- Sidebar Navidation Menus--> */}
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
          <a
            href="#chartsDropdown"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <i className="fa fa-certificate"></i>GPA
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
              <a href="/dashboard/first-timers">Create New Member</a>
            </li>
            <li>
              <a href="forms-advanced.html">List of Members</a>
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
              <a href="components-cards.html">Create Gallery</a>
            </li>
            <li>
              <a href="components-calendar.html">View Gallery</a>
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
              <a href="pages-invoice.html">View Events</a>
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
              <a href="pages-contacts.html">Create Testimony</a>
            </li>
            <li>
              <a href="pages-invoice.html">View Testimony</a>
            </li>
          </ul>
        </li>
      </ul>
      <span className="heading">Extras</span>
      <ul className="list-unstyled">
        <li>
          <a href="#">
            {" "}
            <i className="icon-flask"></i>Pator Corner{" "}
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
