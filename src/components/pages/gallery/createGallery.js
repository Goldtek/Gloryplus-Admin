import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import DatePicker from "../event/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS
import "react-toastify/dist/ReactToastify.css";
import "./event.css";
// FILE
import FormError from "./formError";
import Thumb from "./thumb";
import { Header, SideBar, PageHeaderTitle, firestore, ProgressBar } from "../../partials";

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("image upload is required"),
  title: Yup.string().required("event title is required"),
  address: Yup.string().required("event address is required"),
  date: Yup.string().required("event date is required"),
  details: Yup.string().required("event details is required"),
});

const CreateGallery = () => {
    const [url, setUrl] = useState(null);
  useEffect(() => {
    document.getElementById("gallery").classList.add("active");
  });

  return (
    <div className="page">
      <Helmet>
        <title>Create Gallery</title>
      </Helmet>
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          <PageHeaderTitle title="Dashboard" currpg="Gallery" />

          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">Create Gallery</h3>
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
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);

                          axios({
                            method: "POST",
                            url: "http://localhost:3000/event",
                            data: {
                              url: url,
                              title: values.title,
                              details: values.details,
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
                            <div className="form-group-material">
                            
                              <Field
                                type="text"
                                className={
                                  touched.title && errors.title
                                    ? "  input-material  is-invalid"
                                    : "input-material"
                                }
                                name="title"
                                id="title"
                                onChange={handleChange}
                                value={values.title}
                                onBlur={handleBlur}
                              />
                              <label 
                               htmlFor="title"
                               className="label-material"
                              >
                                Enter Name of Gallery i.e Thanksgiving Service 2020
                              </label>
                              <FormError
                                touched={touched.title}
                                message={errors.title}
                              />
                            </div>

                            {/* EVENT DETAILS */}
                            <div className="form-group">
                              <textarea
                                className={
                                  touched.details && errors.details
                                    ? "  form-control  is-invalid"
                                    : "form-control"
                                }
                                placeholder="Event Details"
                                name="details"
                                onChange={handleChange}
                                value={values.details}
                                onBlur={handleBlur}
                              ></textarea>
                              <FormError
                                touched={touched.details}
                                message={errors.details}
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-control-label">
                                Course Image
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
                              {values.file && <ProgressBar file={values.file} setUrl={setUrl} directory="gallery" />}
                              <FormError
                                touched={touched.file}
                                message={errors.file}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Create Gallery"
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

export default CreateGallery;
