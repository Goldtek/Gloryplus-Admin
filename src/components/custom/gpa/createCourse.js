import React, { useEffect } from "react";
import axios from "axios";
import FormError from "./formError";
import TextField from '@material-ui/core/TextField'
import { Formik, Field } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// const FILE_SIZE = 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("A file is required"),
  coursetitle: Yup.string().required("course title is required"),
});


const API_URL = process.env.REACT_APP_BASEURL;

const CreateCourse = () => {
  let history = useHistory();
  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
  });

  return (
    <div className="page">
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
                          axios({
                            method: "POST",
                            url: `${API_URL}/course`,
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
                              history.push("/dashboard/gpa/view", true);
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
                              <div className="form-group-material">
                                <TextField
                                  fullWidth
                                  id="CourseName"
                                  label="Course Name"
                                  onChange={handleChange}
                                  value={values.coursetitle}
                                  onBlur={handleBlur}
                                  margin="normal"
                                  name="coursetitle"
                                  error={errors.coursetitle && touched.coursetitle}
                                  helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
                                />
                              </div>
                              <div className="form-group">
                                <label className="form-control-label">
                                  Course Image
                              </label>
                                <Field
                                  id="file"
                                  name="file"
                                  type="file"
                                  className={
                                    touched.file && errors.file
                                      ? "  form-control-file  is-invalid"
                                      : "form-control-file"
                                  }
                                  onBlur={handleBlur}
                                />

                                <FormError
                                  touched={touched.file}
                                  message={errors.file}
                                />
                              </div>
                              <div className="form-group">
                                <Field
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
            <Footer />
          </section>
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );
};

export default CreateCourse;
