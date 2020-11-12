import React, { useState,  } from "react";
import { useHistory } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { CustomAlert, auth, firestore } from "../../partials";

const Login = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const loginValues = serializeForm(e.target, { hash: true });
      const { email, password } = loginValues;
  
      const res = await auth.signInWithEmailAndPassword(email,password);
      const { user } = res;
  
      if (user) {
       // query firestore and dispatch to redux
      }
    } catch (error) {
      console.log('error logging in', error);
      setErrorMessage(error.message);
      
    }
  };

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
              <h1 className="display-4 mb-3">Admin Panel</h1>
              {(errorMessage !== "") ? ( <CustomAlert severity="error" message={errorMessage} variant="filled" />) : null}
            </div>
            <form className="form-validate" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="loginUsername"
                  type="email"
                  autocomplete="off"
                  required
                  data-msg="Please enter your email"
                  className="input-material"
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
                  className="input-material"
                />
              </div>

              <input
                className="btn btn-lg btn-block btn-primary mb-3"
                type="submit"
                value="Sign in"
              />
                
              
              
            </form>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
          {/* <!-- Image--> */}
          <div
            style={{
              backgroundImage:
                "url(images/gloryplus.png)",
            }}
            className="bg-cover h-100 mr-n3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
