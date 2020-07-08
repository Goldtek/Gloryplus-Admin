import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField'
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import blue from '@material-ui/core/colors/blue';
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});


const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});


const API_URL = process.env.REACT_APP_BASEURL;

const Login = (props) => {

  // let history = useHistory();
  const { classes } = props;

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

            <ToastContainer />
            <Formik
              initialValues={{ password: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={({ password, email }, { setSubmitting, resetForm }) => {
                setSubmitting(true);


                // axios({
                //   method: "POST",
                //   url: `${API_URL}/user`,
                //   data: {
                //     id: uuid(),
                //     password: values.password,
                //     email: values.email,
                //     created: Date.now(),
                //   },
                // })
                //   .then((res) => {
                //     resetForm();
                //     setSubmitting(false);
                //     toast.success("course Successfully added", {
                //       position: "top-right",
                //       autoClose: 5000,
                //       hideProgressBar: false,
                //       closeOnClick: true,
                //       pauseOnHover: true,
                //       draggable: true,
                //       progress: undefined,
                //     });
                //     history.push("/dashboard", true);
                //   })
                //   .catch((err) => {
                //     toast.error(`${err}`, {
                //       position: "top-right",
                //       autoClose: 5000,
                //       hideProgressBar: false,
                //       closeOnClick: true,
                //       pauseOnHover: true,
                //       draggable: true,
                //       progress: undefined,
                //     });
                //   });
              }}
            >
              {({
                values,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                handleChange,
                touched,
                errors,
                handleBlur,
              }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">

                      <TextField
                        type="email"
                        fullWidth
                        id="email"
                        label="Email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        margin="normal"
                        name="email"
                        error={errors.email && touched.email}
                        helperText={(errors.email && touched.email) && errors.email}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <TextField
                        type="password"
                        fullWidth
                        id="Password"
                        label="Password"
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                        margin="normal"
                        name="password"
                        error={errors.password && touched.password}
                        helperText={(errors.password && touched.password) && errors.password}
                      />
                      <div className="row">

                        <div className="col-auto">
                          <a href="#!" className="form-text small text-muted">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Submit--> */}
                    {/* <button
                      className="btn btn-lg btn-block btn-primary mb-3"
                    // onClick={() => {
                    //   window.location.href = "/dashboard";
                    // }}
                    >
                      Sign in
                          </button> */}
                    <Button variant="contained" type="submit" fullWidth className={classes.root} disabled={isSubmitting}>
                      Sign In

                      {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </Button>
                    {/* <!-- Link--> */}
                    <p className="text-center">
                      <small className="text-muted text-center">
                        Don't have an account yet?
                             {" "} <a href="/register">Register</a>.
                            </small>
                    </p>
                  </form>

                )}
            </Formik>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
          {/* <!-- Image--> */}
          <div
            style={{
              backgroundImage:
                "url(images/background/gloryplus.png)",
            }}
            className="bg-cover h-100 mr-n3"
          ></div>
        </div>
      </div>
    </div>
  );
};


export default withStyles(styles)(Login);
