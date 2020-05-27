import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header, SideBar } from "../../partials";
import Content from "../main";

const Profile = () => {
  useEffect(() => {
    document.getElementById("page-body").classList.add("theme-red");
  });
  return (
    <Fragment>
      <Helmet>
        <title>LiveStream video upload</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <SideBar />
      {/* CLOSE SIDE BAR */}

      {/* CONTENT */}
      <Content title="">
        <div className="row clearfix">
          <div className="col-xs-12 col-sm-3">
            <div className="card profile-card">
              <div className="profile-header">&nbsp;</div>
              <div className="profile-body">
                <div className="image-area">
                  <img src="images/user-lg.jpg" alt="AdminBSB - Profile " />
                </div>
                <div className="content-area">
                  <h3>Marc K. Hammond</h3>
                  <p>Web Software Developer</p>
                  <p>Administrator</p>
                </div>
              </div>
              <div className="profile-footer">
                {/* <ul>
                  <li>
                    <span>Followers</span>
                    <span>1.234</span>
                  </li>
                  <li>
                    <span>Following</span>
                    <span>1.201</span>
                  </li>
                  <li>
                    <span>Friends</span>
                    <span>14.252</span>
                  </li>
                </ul> */}
                <button className="btn btn-info btn-lg waves-effect btn-block">
                  <strong> Sign Out</strong>
                </button>
              </div>
            </div>

            <div className="card card-about-me">
              <div className="body">
                <ul>
                  <li>
                    <div className="title">
                      <i className="material-icons">library_books</i>
                      Education
                    </div>
                    <div className="content">
                      B.S. in Computer Science from the University of Tennessee
                      at Knoxville
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <i className="material-icons">location_on</i>
                      Location
                    </div>
                    <div className="content">Malibu, California</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="card">
              <div className="body">
                <div>
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <Link
                        to="#home"
                        aria-controls="home"
                        role="tab"
                        data-toggle="tab"
                      >
                        Home
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        to="#profile_settings"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                      >
                        Profile Settings
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        to="#change_password_settings"
                        aria-controls="settings"
                        role="tab"
                        data-toggle="tab"
                      >
                        Change Password
                      </Link>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="home"
                    >
                      <div className="panel panel-default panel-post">
                        <div className="panel-heading">
                          <div className="media">
                            <div className="media-left">
                              <Link to="#">
                                <img src="images/user-lg.jpg" alt="profile" />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <Link to="#">Marc K. Hammond</Link>
                              </h4>
                              Shared publicly - 26 Oct 2018
                            </div>
                          </div>
                        </div>
                        <div className="panel-body">
                          <div className="post">
                            <div className="post-heading">
                              <p>
                                I am a very simple wall post. I am good at
                                containing{" "}
                                <Link Link to="#!">
                                  #small
                                </Link>{" "}
                                bits of <Link Link="#">#information</Link>. I
                                require little more information to use
                                effectively.
                              </p>
                            </div>
                            <div className="post-content">
                              <img
                                src="images/profile-post-image.jpg"
                                className="img-responsive"
                                alt="profile"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="panel-footer">
                          <ul>
                            <li>
                              <Link to="#">
                                <i className="material-icons">thumb_up</i>
                                <span>12 Likes</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="material-icons">comment</i>
                                <span>5 Comments</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="material-icons">share</i>
                                <span>Share</span>
                              </Link>
                            </li>
                          </ul>

                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Type a comment"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="profile_settings"
                    >
                      <form className="form-horizontal">
                        <div className="form-group">
                          <label
                            for="NameSurname"
                            className="col-sm-2 control-label"
                          >
                            Name Surname
                          </label>
                          <div className="col-sm-10">
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control"
                                id="NameSurname"
                                name="NameSurname"
                                placeholder="Name Surname"
                                value="Marc K. Hammond"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="Email" className="col-sm-2 control-label">
                            Email
                          </label>
                          <div className="col-sm-10">
                            <div className="form-line">
                              <input
                                type="email"
                                className="form-control"
                                id="Email"
                                name="Email"
                                placeholder="Email"
                                value="example@example.com"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            for="InputExperience"
                            className="col-sm-2 control-label"
                          >
                            Experience
                          </label>

                          <div className="col-sm-10">
                            <div className="form-line">
                              <textarea
                                className="form-control"
                                id="InputExperience"
                                name="InputExperience"
                                rows="3"
                                placeholder="Experience"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                            <input
                              type="checkbox"
                              id="terms_condition_check"
                              className="chk-col-red filled-in"
                            />
                            <label for="terms_condition_check">
                              I agree to the{" "}
                              <Link Link to="#">
                                terms and conditions
                              </Link>
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-danger">
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="change_password_settings"
                    >
                      <form className="form-horizontal">
                        <div className="form-group">
                          <label
                            for="OldPassword"
                            className="col-sm-3 control-label"
                          >
                            Old Password
                          </label>
                          <div className="col-sm-9">
                            <div className="form-line">
                              <input
                                type="password"
                                className="form-control"
                                id="OldPassword"
                                name="OldPassword"
                                placeholder="Old Password"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            for="NewPassword"
                            className="col-sm-3 control-label"
                          >
                            New Password
                          </label>
                          <div className="col-sm-9">
                            <div className="form-line">
                              <input
                                type="password"
                                className="form-control"
                                id="NewPassword"
                                name="NewPassword"
                                placeholder="New Password"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            for="NewPasswordConfirm"
                            className="col-sm-3 control-label"
                          >
                            New Password (Confirm)
                          </label>
                          <div className="col-sm-9">
                            <div className="form-line">
                              <input
                                type="password"
                                className="form-control"
                                id="NewPasswordConfirm"
                                name="NewPasswordConfirm"
                                placeholder="New Password (Confirm)"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-offset-3 col-sm-9">
                            <button type="submit" className="btn btn-danger">
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      {/* CLOSE CONTENT */}
    </Fragment>
  );
};

export default Profile;
