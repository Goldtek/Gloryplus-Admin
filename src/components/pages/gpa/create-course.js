import React, { Fragment, useEffect } from "react";
import Thumb from "./thumb";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik } from "formik";
import * as yup from "yup";
// import { Link } from "react-router-dom";

import { Header, Sidebar } from "../../partials";
import { Helmet } from "react-helmet";
import "./gpa.css";
function CreateCourse() {
  useEffect(() => {
    document.getElementById("page-body").classList.add("theme-red");
  });
  return (
    <Fragment>
      <Helmet>
        <title>create course</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <Sidebar />
      {/* CLOSE SIDE BAR */}

      {/*OPEN GPA  CONTENT */}
      <section className="content">
        <div className="container-fluid">
          <Formik
            initialValues={{ file: null, coursetitle: "" }}
            validationSchema={yup.object().shape({
              file: yup.mixed().required("image upload is required"),
              coursetitle: yup.string().required("course title is required"),
            })}
          >
            {({
              values,
              handleSubmit,
              setFieldValue,
              handleChange,
              touched,
              errors,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                {/* COURSE INFORMATION  */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                      <div className="header">
                        <h2>
                          Enter Course Name
                          <small className="font-bold col-pink">
                            All Fields Are Required*
                          </small>
                        </h2>
                      </div>
                      <div className="body">
                        <div className="row clearfix">
                          <div className="col-md-6 ">
                            <p>{/* <b>Course Title</b> */}</p>
                            <div className="input-group">
                              <div
                                className={
                                  touched.coursetitle && errors.coursetitle
                                    ? " focused error form-line"
                                    : "form-line"
                                }
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="e.g Foundation Class"
                                  name="coursetitle"
                                  id="coursetitle"
                                  onChange={handleChange}
                                  value={values.coursetitle}
                                  onBlur={handleBlur}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COURSE INFORMATION  */}

                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                      <div className="header">
                        <h2>
                          Upload Image
                          <small className="font-bold col-pink">
                            Please ensure the video is not more than 20mb
                          </small>
                        </h2>
                      </div>
                      {/* IMAGE UPLOAD  ############*/}
                      <div className="container center">
                        <div className="container py-5">
                          <div className="row py-4">
                            <div className="col-lg-6 mx-auto">
                              {/* <!-- Upload image input--> */}

                              {/* <!-- Uploaded image area--> */}

                              <div
                                className="col-md-4"
                                style={{ marginBottom: "10px" }}
                              >
                                <p>{/* <b>Course Title</b> */}</p>
                                <div className="form-group">
                                  <div
                                    className={
                                      touched.coursetitle && errors.coursetitle
                                        ? " focused error form-line"
                                        : "form-line"
                                    }
                                  >
                                    <label htmlFor="file">
                                      <i
                                        className="fa fa-upload fa-3x text-center"
                                        aria-hidden="true"
                                      ></i>
                                    </label>
                                    <input
                                      id="file"
                                      name="file"
                                      type="file"
                                      onChange={(event) => {
                                        setFieldValue(
                                          "file",
                                          event.currentTarget.files[0]
                                        );
                                      }}
                                      onBlur={handleBlur}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                {" "}
                                <Thumb file={values.file} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* IMAGE UPLOAD ############*/}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                      <div className="header">
                        <h2>Submit Course</h2>
                      </div>
                      <div className="body">
                        <div className="button-demo">
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect btn-md "
                          >
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
      {/* CLOSE GPA CONTENT */}
    </Fragment>
  );
}

export default CreateCourse;
