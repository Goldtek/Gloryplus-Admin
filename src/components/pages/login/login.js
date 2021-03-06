import React, { useState, useEffect  } from "react";
import { useDispatch } from 'react-redux';
import serializeForm from 'form-serialize';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { ToastContainer, toast } from "react-toastify";
import { CustomAlert, auth, firestore } from "../../partials";
import { fetchCountry, fetchCells } from "../../util";
import { EmailRounded } from "@material-ui/icons";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    callFetchCountry();
    callFetchCells();
  },[]);

  const callFetchCountry = async () => {
    await fetchCountry(dispatch);
  }
  const callFetchCells = async () => {
    await fetchCells(dispatch);
  }


    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginValues = serializeForm(e.target, { hash: true });
      const { email, password } = loginValues;
      console.log('email', email);
  
      const res = await auth.signInWithEmailAndPassword(email,password);
      const { user: { uid } } = res;
      const doc = await firestore.collection('users').doc(uid).get();
      const user = doc.data();
      dispatch({type: 'USER_LOGGED_IN', user})
      history.push("/dashboard");
    } catch (error) {
      console.log('error logging in', error);
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
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
                  name="email"
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
                  name="password"
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
      <ToastContainer />
    </div>
  );
};

export default Login;
