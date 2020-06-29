import React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
// import Content from "../main";
class dashboard extends React.Component {
  componentDidMount() {
    document.getElementById("home").classList.add("active");
  }
  render() {
    return (
      <div className="page">
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
            {/* <!-- Page Header--> */}
            <PageHeaderTitle title="Profile" currpg="profile" />

            {/* <!-- Dashboard Counts Section--> */}
            <section className="dashboard-counts no-padding-bottom">
              <div className="container-fluid">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card card-profile">
                        <div
                          style={{
                            backgroundImage:
                              "url(img/photos/paul-morris-116514-unsplash.jpg)",
                          }}
                          className="card-header"
                        ></div>
                        <div className="card-body text-center">
                          <img
                            src="img/avatar-7.jpg"
                            className="card-profile-img"
                            alt="s"
                          />
                          <h3 className="mb-3">Elemson Ifeanyi</h3>
                          <p className="mb-4">
                            One morning, when Gregor Samsa woke from troubled{" "}
                          </p>
                          <button className="btn btn-outline-dark btn-sm">
                            <span className="fa fa-twitter"></span> Follow
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <form className="card">
                        <div className="card-body">
                          <h3 className="card-title">Edit Profile</h3>
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group mb-4">
                                <label className="form-label">Company</label>
                                <input
                                  type="text"
                                  placeholder="Company"
                                  value="Elemson &amp; Ifeanyi"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <div className="form-group mb-4">
                                <label className="form-label">Username</label>
                                <input
                                  type="text"
                                  placeholder="Username"
                                  value="ielemson"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                              <div className="form-group mb-4">
                                <label className="form-label">
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control"
                                  value="ielemson@gmail.com"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group mb-4">
                                <label className="form-label">First Name</label>
                                <input
                                  type="text"
                                  placeholder="First name"
                                  className="form-control"
                                  value="Ifeanyi"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group mb-4">
                                <label className="form-label">Last Name</label>
                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  className="form-control"
                                  value="Elemson"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mb-4">
                                <label className="form-label">Address</label>
                                <input
                                  type="text"
                                  placeholder="Home Address"
                                  className="form-control"
                                  value="Lagos Nigeria"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                              <div className="form-group mb-4">
                                <label className="form-label">City</label>
                                <input
                                  type="text"
                                  placeholder="City"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                              <div className="form-group mb-4">
                                <label className="form-label">ZIP</label>
                                <input
                                  type="number"
                                  placeholder="ZIP"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="form-group mb-4">
                                <label className="form-label">Country</label>
                                <select className="form-control custom-select">
                                  <option value="">UK</option>
                                  <option value="">US</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mb-0">
                                <label className="form-label">About Me</label>
                                <textarea
                                  rows="5"
                                  placeholder="Here can be your description"
                                  value="Mike"
                                  className="form-control"
                                >
                                  The bedding was hardly able to cover it and
                                  seemed ready to slide off any moment. His many
                                  legs, pitifully thin compared with the size of
                                  the rest of him, waved about helplessly as he
                                  looked. &quot;What's happened to me?&quot; he
                                  thought. It wasn't a dream.
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-right">
                          <button type="submit" className="btn btn-primary">
                            Update Profile
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
            {/* <!-- Dashboard Header Section    --> */}
          </div>
        </div>
        {/* CLOSE SIDE BAR */}
      </div>
    );
  }
}

export default dashboard;
