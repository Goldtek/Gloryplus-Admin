import React from "react";

const Login = () => {
  return (
    <div className="container-fluid px-3">
      <div className="row min-vh-100">
        <div className="col-md-5 col-lg-6 col-xl-4 px-lg-5 d-flex align-items-center">
          <div className="w-100 py-5">
            <div className="text-center">
              <img
                src="img/brand/logo.png"
                alt="..."
                style={{ maxWidth: "6rem" }}
                className="img-fluid mb-4"
              />
              <h1 className="display-4 mb-3">Sign in</h1>
            </div>
            <form className="form-validate">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="loginUsername"
                  type="email"
                  autocomplete="off"
                  required
                  data-msg="Please enter your email"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-4">
                <div className="row">
                  <div className="col">
                    <label>Password</label>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="form-text small text-muted">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input
                  name="loginPassword"
                  type="password"
                  required
                  data-msg="Please enter your password"
                  className="form-control"
                />
              </div>
              {/* <!-- Submit--> */}
              <button
                className="btn btn-lg btn-block btn-primary mb-3"
                onClick={() => {
                  window.location.href = "/dashboard";
                }}
              >
                Sign in
              </button>
              {/* <!-- Link--> */}
              <p className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet?
                  <a href="register-2.html">Register</a>.
                </small>
              </p>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
          {/* <!-- Image--> */}
          <div
            style={{
              backgroundImage:
                "url(img/photos/victor-ene-1301123-unsplash.jpg)",
            }}
            className="bg-cover h-100 mr-n3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
