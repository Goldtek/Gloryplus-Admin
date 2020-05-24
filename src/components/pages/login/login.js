import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

class login extends React.Component {
  componentDidMount() {
    //add class to the body tag on page load
    document.getElementById("page-body").classList.add("signup-page");
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4 signup-box">
        <div className="login-box">
          <div className="logo">
            <Link to="#!">
              <b>Glory Plus Admin</b>
            </Link>
            {/* <small>Admin BootStrap Based - Material Design</small> */}
          </div>
          <div className="card">
            <div className="body">
              <form id="sign_in" method="POST">
                <div className="msg">Sign in to start your session</div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">person</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      required
                      autofocus
                    />
                  </div>
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">lock</i>
                  </span>
                  <div className="form-line">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-8 p-t-5">
                    <input
                      type="checkbox"
                      name="rememberme"
                      id="rememberme"
                      className="filled-in chk-col-pink"
                    />
                    <label for="rememberme">Remember Me</label>
                  </div>
                  <div className="col-xs-4">
                    <button
                      className="btn btn-block btn-primary waves-effect"
                      type="button"
                      onClick={() => {
                        window.location.href = "/dashboard";
                      }}
                    >
                      SIGN IN
                    </button>
                  </div>
                </div>
                <div className="row m-t-15 m-b--20">
                  <div className="col-xs-6">
                    <a href="/contactus">Contact Us</a>
                  </div>
                  <div className="col-xs-6 align-right">
                    <a href="/recover">Forgot Password?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// login.propTypes = {};

export default login;
