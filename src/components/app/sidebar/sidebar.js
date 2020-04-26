import React, { Fragment } from "react";

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
                    <a href="#">
                      <i className="material-icons">person</i>Profile
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#">
                      <i className="material-icons">group</i>Followers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons">shopping_cart</i>Sales
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons">favorite</i>Likes
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#">
                      <i className="material-icons">input</i>Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- #User Info -->
<!-- Menu --> */}
          <div className="menu">
            <ul className="list">
              <li className="header">MAIN NAVIGATION</li>
              <li className="active">
                <a href="index.html">
                  <i className="material-icons">home</i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="pages/typography.html">
                  <i className="material-icons">text_fields</i>
                  <span>Events</span>
                </a>
              </li>
              <li>
                <a href="pages/helper-classes.html">
                  <i className="material-icons">layers</i>
                  <span>Lives Stream</span>
                </a>
              </li>
              <li>
                <a href="#" className="menu-toggle">
                  <i className="material-icons">widgets</i>
                  <span>Gallery</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <a href="#" className="menu-toggle">
                      <span>Sermon</span>
                    </a>
                    <ul className="ml-menu">
                      <li>
                        <a href="pages/widgets/cards/basic.html">Basic</a>
                      </li>
                      <li>
                        <a href="pages/widgets/cards/colored.html">Colored</a>
                      </li>
                      <li>
                        <a href="pages/widgets/cards/no-header.html">
                          No Header
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-toggle">
                      <span>Partner</span>
                    </a>
                    <ul className="ml-menu">
                      <li>
                        <a href="pages/widgets/infobox/infobox-1.html">
                          Infobox-1
                        </a>
                      </li>
                      <li>
                        <a href="pages/widgets/infobox/infobox-2.html">
                          Infobox-2
                        </a>
                      </li>
                      <li>
                        <a href="pages/widgets/infobox/infobox-3.html">
                          Infobox-3
                        </a>
                      </li>
                      <li>
                        <a href="pages/widgets/infobox/infobox-4.html">
                          Infobox-4
                        </a>
                      </li>
                      <li>
                        <a href="pages/widgets/infobox/infobox-5.html">
                          Infobox-5
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="menu-toggle">
                  <i className="material-icons">assignment</i>
                  <span>Sermon</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <a href="pages/forms/form-validation.html">Video</a>
                  </li>
                  <li>
                    <a href="pages/forms/form-wizard.html">Audio</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="menu-toggle">
                  <i className="material-icons">view_list</i>
                  <span>Partner</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <a href="pages/tables/normal-tables.html">Tithe</a>
                  </li>
                  <li>
                    <a href="pages/tables/jquery-datatable.html">Offering</a>
                  </li>
                  <li>
                    <a href="pages/tables/editable-table.html">Seed</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="menu-toggle">
                  <i className="material-icons">perm_media</i>
                  <span>Members</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <a href="pages/medias/image-gallery.html">Image Gallery</a>
                  </li>
                  <li>
                    <a href="pages/medias/carousel.html">Carousel</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="menu-toggle">
                  <i className="material-icons">pie_chart</i>
                  <span>Home Church</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <a href="pages/charts/morris.html">Location</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="menu-toggle">
                  <i className="material-icons">content_copy</i>
                  <span>Pastor Section</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <a href="pages/examples/profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="pages/examples/sign-in.html">Sign In</a>
                  </li>
                  <li>
                    <a href="pages/examples/sign-up.html">Sign Up</a>
                  </li>
                  <li>
                    <a href="pages/examples/forgot-password.html">
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a href="pages/examples/blank.html">Blank Page</a>
                  </li>
                  <li>
                    <a href="pages/examples/404.html">404 - Not Found</a>
                  </li>
                  <li>
                    <a href="pages/examples/500.html">500 - Server Error</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/first-timer">
                  <i className="material-icons">content_copy</i>
                  <span>First Timer</span>
                </a>
              </li>
              <li className="header">LABELS</li>
              <li>
                <a href="#">
                  <i className="material-icons col-red">donut_large</i>
                  <span>Important</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons col-amber">donut_large</i>
                  <span>Warning</span>
                  {/*   <!-- #User Info -->/* <!-- #User Info -->
<!-- Menu -->  
<!-- Menu --> */}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons col-light-blue">donut_large</i>
                  <span>Information</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- #Menu -->
<!-- Footer --> */}
          <div className="legal">
            <div className="copyright">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="http://www.gloryplusinternational.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glory Plus Admin
              </a>
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
            {/* <li role="presentation" ><a href="#skins" data-toggle="tab">SKINS</a></li> */}
            <li role="presentation" className="active">
              <a href="#settings" data-toggle="tab">
                SETTINGS
              </a>
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
