import React, { useEffect, useState, use } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
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

const CreateEvent = () => {
  const [imageFile, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  useEffect(() => {
    document.getElementById("event").classList.add("active");
  });

  const storeImage = (e) => {
    const selectedFile = e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)){
      setImage(selectedFile);
    } else {
      setImage(null);
      toast.error("The file selected is not an image, Please an image", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }  
  }


  return (
    <div className="page">
      <Helmet>
        <title>Create Event</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="" currpg="Event" />

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
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                          if(url == null){
                            return;
                          }
                          try {
                            const data = {
                                img: url,
                                title: values.title,
                                date: values.date,
                                details: values.details,
                                address: values.address,
                                created: Date.now(), 
                              };
                              await firestore.collection("events").add(data);
                          
                              toast.success("course Successfully added", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                              resetForm();
                              setSubmitting(false);
                            } catch(err){
                              toast.error(`${err}`, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                            }
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
                              <input
                                type="text"
                                placeholder="Enter Event Title"
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
                              <FormError
                                touched={touched.title}
                                message={errors.title}
                              />
                            </div>

                            <div className="form-group ">
                              <label className="form-control-label">
                                Event Date
                              </label>

                              <DatePicker
                                className={
                                  touched.date && errors.date
                                    ? "input-material  is-invalid date"
                                    : "input-material date"
                                }
                                name="date"
                                showTimeSelect
                                dateFormat="Pp"
                              />
                            </div>

                            <div className="form-group col-12">
                              <label className="form-control-label">
                                Address where the Event will take place
                              </label>
                              <textarea
                                className={
                                  touched.address && errors.address
                                    ? "  form-control  is-invalid"
                                    : "form-control"
                                }
                                placeholder="address"
                                name="address"
                                onChange={handleChange}
                                value={values.address}
                                onBlur={handleBlur}
                              ></textarea>
                              <FormError
                                touched={touched.address}
                                message={errors.address}
                              />
                            </div>

                            {/* EVENT DETAILS */}
                            <div className="form-group">
                              <label className="form-control-label">
                                Event Details
                              </label>
                              <textarea
                                className={
                                  touched.details && errors.details
                                    ? "  form-control  is-invalid"
                                    : "form-control"
                                }
                                placeholder="address"
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
                                  storeImage(event);
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
                              {values.file && <ProgressBar file={values.file} setFile={setImage} setUrl={setUrl} directory="events" />}
                              <FormError
                                touched={touched.file}
                                message={errors.file}
                              />
                            </div>
                            <div className="form-group">
                             
                              <input
                                type="submit"
                                value="Create Event"
                                className="btn btn-primary"
                                disabled={isSubmitting || url === null}
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
