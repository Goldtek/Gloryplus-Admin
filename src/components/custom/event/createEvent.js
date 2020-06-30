import React, { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import FormError from "./formError";
import { Thumb } from "../gpa/thumb";
import { Header, SideBar, PageHeaderTitle } from "../../partials";
import TextField from '@material-ui/core/TextField';


const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("image upload is required"),
  title: Yup.string().required("event title is required"),
  address: Yup.string().required("event address is required"),
  date: Yup.string().required("event date is required"),
  details: Yup.string().required("event details is required"),
});

const API_URL = process.env.REACT_APP_BASEURL;


const CreateEvent = () => {
  useEffect(() => {
    document.getElementById("event").classList.add("active");
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
          <PageHeaderTitle title="Dashboard" currpg="Event" />

          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">Create Event</h3>
                    </div>
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          file: "",
                          address: "",
                          date: "",
                          details: "",
                          title: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
                          setSubmitting(true);
                          alert(
                            JSON.stringify(
                              {
                                values
                              },
                              null,
                              2
                            )
                          );
                          axios({
                            method: "POST",
                            url: `${API_URL}/event`,
                            data: {
                              id: uuid(),
                              img: values.file.name,
                              type: values.file.type,
                              title: values.title,
                              date: values.date,
                              details: values.details,
                              address: values.address,
                              created: Date.now(),
                            },
                          })
                            .then((res) => {
                              resetForm();
                              setSubmitting(false);
                              toast.success("Event Created Successfully", {
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
                                <TextField
                                  fullWidth
                                  id="title"
                                  name="title"
                                  label="Event Title"
                                  margin="normal"
                                  value={values.title}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.title && touched.title}
                                  helperText={(errors.title && touched.title) && errors.title}
                                />
                              </div>

                              <div className="form-group ">
                                <TextField
                                  fullWidth
                                  id="datetime-local"
                                  label="Next appointment"
                                  type="datetime-local"
                                  defaultValue="2020-07-24T10:30"
                                  name="date"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.date && touched.date}
                                  helperText={(errors.date && touched.date) && errors.date}
                                />
                              </div>

                              <div className="form-group ">
                                <TextField
                                  fullWidth
                                  id="address"
                                  name="address"
                                  label="Event Location"
                                  margin="normal"
                                  value={values.address}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.address && touched.address}
                                  helperText={(errors.address && touched.address) && errors.address}
                                />
                              </div>

                              {/* EVENT DETAILS */}
                              <div className="form-group">
                                <TextField
                                  fullWidth
                                  id="details"
                                  name="details"
                                  multiline
                                  label="Event Details"
                                  margin="normal"
                                  value={values.details}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.details && touched.details}
                                  helperText={(errors.details && touched.details) && errors.details}
                                />

                              </div>
                              <div className="form-group">
                                <TextField
                                  fullWidth
                                  margin="dense"
                                  id="file"
                                  label="Event Image"
                                  type="file"
                                  name="file"
                                  value={values.file}
                                  // onChange={handleChange}
                                  onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                  }}
                                  onBlur={handleBlur}
                                  error={errors.file && touched.file}
                                  helperText={(errors.file && touched.file) && errors.file}

                                />
                                <Thumb file={values.file} />
                              </div>
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Create Event"
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

export default CreateEvent;
