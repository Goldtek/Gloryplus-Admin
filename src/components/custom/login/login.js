import React from "react";
import TextField from '@material-ui/core/TextField'
import { Formik, Field } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

const API_URL = process.env.REACT_APP_BASEURL;
const Login = () => {
  let history = useHistory();

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


            <Formik
              initialValues={{ password: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                // const courseObj = {
                //   id: uuid(),
                //   file: values.file.name,
                //   coursetitle: values.coursetitle,
                //   type: values.file.type,
                // };

                console.log(values)

                axios({
                  method: "POST",
                  url: `${API_URL}/user`,
                  data: {
                    id: uuid(),
                    password: values.password,
                    email: values.email,
                    created: Date.now(),
                  },
                })
                  .then((res) => {
                    resetForm();
                    setSubmitting(false);
                    toast.success("course Successfully added", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    history.push("/dashboard", true);
                  })
                  .catch((err) => {
                    toast.error(`${err}`, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  });
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
                      <div className="row">

                        <div className="col-auto">
                          <a href="#!" className="form-text small text-muted">
                            Forgot password?
                                </a>
                        </div>
                      </div>

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
                    </div>
                    {/* <!-- Submit--> */}
                    <button
                      className="btn btn-lg btn-block btn-primary mb-3"
                    // onClick={() => {
                    //   window.location.href = "/dashboard";
                    // }}
                    >
                      Sign in
                          </button>
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
