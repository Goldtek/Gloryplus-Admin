import React, { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import FormError from "./formError";
import Thumb from "./thumb";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import { Header, SideBar, PageHeaderTitle } from "../../partials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const validationSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),

  coursetitle: Yup.string().required("course title is required"),
});

// const api = axios.create({ baseURL: `http://localhost:3000/course` });
const CreateCourse = ({ match }) => {
  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
  });

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
        <SideBar />

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
                              title: values.coursetitle,
                              type: values.file.type,
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
                            <div class="form-group-material">
                              <input
                                className={
                                  touched.coursetitle && errors.coursetitle
                                    ? "  input-material is-invalid"
                                    : "input-material"
                                }
                                name="coursetitle"
                                id="coursetitle"
                                onChange={handleChange}
                                value={values.coursetitle}
                                onBlur={handleBlur}
                              />
                              <label
                                for="register-email"
                                class="label-material"
                              >
                                Course Name
                              </label>
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
                                    ? "  form-control-file  is-invalid"
                                    : "form-control-file"
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
