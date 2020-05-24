import React, { Fragment, useEffect } from "react";
import Thumb from "./thumb";
import FormError from "./formError";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
import { Header, Sidebar } from "../../partials";
import { Helmet } from "react-helmet";
import "./gpa.css";

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("image upload is required"),
  coursetitle: Yup.string().required("course title is required"),
});
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
            initialValues={{ file: "", coursetitle: "" }}
            validationSchema={validationSchema}
            // onSubmit={(values, { setSubmitting, resetForm }) => {
            //   setSubmitting(true);
            //   setTimeout(() => {
            //     console.log(JSON.stringify(values, null, 2));
            //     resetForm();
            //     setSubmitting(false);
            //   }, 500);
            // }}

            onSubmit={(values) => {
              alert(
                JSON.stringify(
                  {
                    fileName: values.file.name,
                    type: values.file.type,
                    size: `${values.file.size} bytes`,
                  },
                  null,
                  2
                )
              );
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
                                    : "form-line success"
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
                              <FormError
                                touched={touched.coursetitle}
                                message={errors.coursetitle}
                              />
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
                                      touched.file && errors.file
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
                                  <FormError
                                    touched={touched.file}
                                    message={errors.file}
                                  />
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
                            className="btn btn-primary waves-effect btn-md"
                            disabled={isSubmitting}
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
