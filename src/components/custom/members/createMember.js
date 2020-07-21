import React, { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import uuid from "react-uuid";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from "react-toastify";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
import { Formik, Form } from "formik";
import { Header, SideBar, BreadCrumb, Footer } from "../../Partials";

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  zip: Yup.string().required("zip is required"),
  state: Yup.string().required("state is required "),
  country: Yup.string().required("country is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const CreateMember = () => {
  let history = useHistory()
  useEffect(() => {
    // document.getElementById("members").classList.add("active");
  });
  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      <SideBar />
      <div className="page-content">

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="#">Create New Member</a></li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button href="/dashboard/member/view" variant="contained" color="primary">View Members</Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Go Back</Button>
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
                      name: undefined,
                      gender: "",
                      email: "",
                      phone: "",
                      address: "",
                      state: "",
                      country: "",
                      zip: "",
                      comment: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      axios({
                        method: "POST",
                        url: `${API_URL}/members`,
                        data: {
                          id: uuid(),
                          name: values.name,
                          gender: values.gender,
                          email: values.email,
                          phone: values.phone,
                          address: values.address,
                          state: values.state,
                          country: values.country,
                          zip: values.zip,
                          comment: values.comment,
                        },
                      })
                        .then((res) => {
                          resetForm();
                          setSubmitting(false);
                          toast.success("First Timers Successfully added", {
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
                      handleChange,
                      touched,
                      errors,
                      handleBlur,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <div className="row">
                                <div className="col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                  <div className="form-group-material">

                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="Full Name"
                                      label="Full Name"
                                      name="name"
                                      onChange={handleChange}
                                      value={values.name}
                                      onBlur={handleBlur}
                                      error={errors.name && touched.name}
                                      helperText={(errors.name && touched.name) && errors.name}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                  <div className="input-material">
                                    <TextField
                                      fullWidth
                                      id="gender"
                                      name="gender"
                                      select
                                      label="Gender"
                                      margin="normal"
                                      value={values.gender}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={errors.gender && touched.gender}
                                      helperText={(errors.gender && touched.gender) && errors.gender}
                                    >
                                      <MenuItem value="male">Male</MenuItem>
                                      <MenuItem value="female">Femle</MenuItem>


                                    </TextField>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="email"
                                      label="Email"
                                      name="email"
                                      onChange={handleChange}
                                      value={values.email}
                                      onBlur={handleBlur}
                                      error={errors.email && touched.email}
                                      helperText={(errors.email && touched.email) && errors.email}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="phone"
                                      label="Phone Number"
                                      name="phone"
                                      onChange={handleChange}
                                      value={values.phone}
                                      onBlur={handleBlur}
                                      error={errors.phone && touched.phone}
                                      helperText={(errors.phone && touched.phone) && errors.phone}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="Address"
                                      label="Address"
                                      name="address"
                                      onChange={handleChange}
                                      value={values.address}
                                      onBlur={handleBlur}
                                      error={errors.address && touched.address}
                                      helperText={(errors.address && touched.address) && errors.address}
                                    />

                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-2 col-lg-2">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="country"
                                      label="Country"
                                      name="country"
                                      onChange={handleChange}
                                      value={values.country}
                                      onBlur={handleBlur}
                                      error={errors.country && touched.country}
                                      helperText={(errors.country && touched.country) && errors.country}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-2 col-lg-2">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="state"
                                      label="State"
                                      name="state"
                                      onChange={handleChange}
                                      value={values.state}
                                      onBlur={handleBlur}
                                      error={errors.state && touched.state}
                                      helperText={(errors.state && touched.state) && errors.state}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-2 col-lg-2">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      margin="normal"
                                      id="zip"
                                      label="zip"
                                      name="zip"
                                      onChange={handleChange}
                                      value={values.zip}
                                      onBlur={handleBlur}
                                      error={errors.zip && touched.zip}
                                      helperText={(errors.zip && touched.zip) && errors.zip}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                  <div className="form-group-material">
                                    <TextField
                                      fullWidth
                                      multiline
                                      margin="normal"
                                      id="comment"
                                      label="Comment- optional"
                                      name="comment"
                                      onChange={handleChange}
                                      value={values.comment}
                                      onBlur={handleBlur}
                                      error={errors.comment && touched.comment}
                                      helperText={(errors.comment && touched.comment) && errors.comment}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <br />
                                  <div className="col-sm-12 offset-sm-1">
                                    <button
                                      type="reset"
                                      className="btn btn-secondary"
                                    >
                                      Cancel
                                </button>{" "}
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    // disable={isSubmitting}
                                    >
                                      Create Member
                                </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form>
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
}

export default CreateMember;
