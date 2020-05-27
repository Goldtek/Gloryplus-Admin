import React, { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormError from "./formError";
import Thumb from "./thumb";
import { Formik } from "formik";
import * as Yup from "yup";
import { Header, Sidebar, PageHeaderTitle } from "../../partials";
import uuid from "react-uuid";

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("image upload is required"),
  coursetitle: Yup.string().required("course title is required"),
});

// const api = axios.create({ baseURL: `http://localhost:3000/course` });
const CreateCourse = ({ match }) => {
  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const courseObj = serializeForm(e.target, { hash: true });
  //   console.log(courseObj);
  // };
  return (
    <div className="page">
      <Helmet>
        <title>Create Course</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <Sidebar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="Dashboard" currpg="GPA" />

          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">Create Course</h3>
                    </div>
                    <div className="card-body">
                      <Formik
                        initialValues={{ file: "", coursetitle: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                          // const courseObj = {
                          //   id: uuid(),
                          //   file: values.file.name,
                          //   coursetitle: values.coursetitle,
                          //   type: values.file.type,
                          // };

                          axios({
                            method: "POST",
                            url: "http://localhost:3000/course",
                            data: {
                              id: uuid(),
                              file: values.file.name,
                              coursetitle: values.coursetitle,
                              type: values.file.type,
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
                          <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                          >
                            <div className="form-group">
                              <label className="form-control-label">
                                Course Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Course Name"
                                className={
                                  touched.coursetitle && errors.coursetitle
                                    ? "  form-control  is-invalid"
                                    : "form-control"
                                }
                                name="coursetitle"
                                id="coursetitle"
                                onChange={handleChange}
                                value={values.coursetitle}
                                onBlur={handleBlur}
                              />
                              <FormError
                                touched={touched.coursetitle}
                                message={errors.coursetitle}
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-control-label">
                                Course Image
                              </label>
                              <input
                                id="file"
                                name="file[]"
                                type="file"
                                onChange={(event) => {
                                  setFieldValue(
                                    "file",
                                    event.currentTarget.files[0]
                                  );
                                }}
                                className={
                                  touched.file && errors.file
                                    ? "  form-control  is-invalid"
                                    : "form-control"
                                }
                                onBlur={handleBlur}
                              />
                              <Thumb file={values.file} />
                              <FormError
                                touched={touched.file}
                                message={errors.file}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Upload Course"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                              />
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </section>
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );
};

export default CreateCourse;
