import React, { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import FormError from "./formError";
import Thumb from "./thumb";
import { Header, SideBar } from "../../Partials";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("image upload is required"),
  title: Yup.string().required("event title is required"),
  address: Yup.string().required("event address is required"),
  date: Yup.string().required("event date is required"),
  details: Yup.string().required("event details is required"),
});

const API_URL = process.env.REACT_APP_BASEURL;


const CreateEvent = () => {
  let history = useHistory()
  useEffect(() => {
    // document.getElementById("event").classList.add("active");
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>Create Event</title>
      </Helmet>
      <Header />
      <SideBar />
      <div className="page-content">

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="page-title">Create Event</h2>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button href="/dashboard/event/view" variant="contained" color="primary">View Events</Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Go Back</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Basic Example</h5>
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
                            type="date"
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
                          <label className="form-control-label">
                            Event Image
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

    </React.Fragment >
  );
};

export default CreateEvent;









