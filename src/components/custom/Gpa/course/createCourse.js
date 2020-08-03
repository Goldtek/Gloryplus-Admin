import React, { useEffect } from "react";
import axios from "axios";
import FormError from "../formError";
import TextField from "@material-ui/core/TextField";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import { Header, SideBar } from "../../../Partials";
import Button from "@material-ui/core/Button";
import Thumb from "../thumb";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";

// const FILE_SIZE = 1024 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("A file is required"),
  coursetitle: Yup.string().required("course title is required"),
});

const API_URL = process.env.REACT_APP_BASEURL;

const CreateCourse = () => {
  let history = useHistory();
  // useEffect(() => {
  //   document.getElementById("gpa").classList.add("active");
  // });

  return (
    <React.Fragment>
      <ToastContainer />
      <Helmet>
        <title>Create Course</title>
      </Helmet>
      <Header />
      <SideBar />
      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/dashboard/">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Create Course</a>
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Button
                    variant="contained"
                    href="/dashboard/gpa/view"
                    color="primary"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Course
                  </Button>{" "}
                  <Button
                    onClick={() => history.goBack()}
                    variant="contained"
                    color="secondary"
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    Kindly fill the form below to create a course
                  </h5>
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
                          brId: "2",
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
                          // history.push("/dashboard/gpa/view", true);
                          window.location.href = "/dashboard/gpa/view";
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
                            label="Enter Course Name"
                            onChange={handleChange}
                            value={values.coursetitle}
                            onBlur={handleBlur}
                            margin="normal"
                            name="coursetitle"
                            error={errors.coursetitle && touched.coursetitle}
                            helperText={
                              errors.coursetitle &&
                              touched.coursetitle &&
                              errors.coursetitle
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">
                            Select Course Image
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
                          <Field
                            type="submit"
                            value="Create Course"
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
      </div>
    </React.Fragment>
  );
};

export default CreateCourse;
