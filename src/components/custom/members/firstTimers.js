import React, { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import uuid from "react-uuid";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  cell: Yup.string().required("cell is required"),
  city: Yup.string().required("city is required "),
  state: Yup.string().required("state is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function FirstTimers() {
  useEffect(() => {
    document.getElementById("members").classList.add("active");
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
          <PageHeaderTitle title="First Timer" currpg="First Timer" />
          {/* FIRST TIMER CONTENT */}
          {/* <!-- Forms Section--> */}
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        New Convert - <small>First Timer</small>
                      </h3>
                    </div>
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          name: "",
                          gender: "",
                          email: "",
                          phone: "",
                          address: "",
                          city: "",
                          state: "",
                          cell: "",
                          comment: "",
                        }}
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
                            url: `${API_URL}/firstTimer`,
                            data: {
                              id: uuid(),
                              name: values.name,
                              gender: values.gender,
                              email: values.email,
                              phone: values.phone,
                              address: values.address,
                              city: values.city,
                              state: values.state,
                              cell: values.cell,
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
                              {/* <div className="line"></div> */}

                              <div className="row">
                                {/* <label className="col-sm-3 form-control-label">
   Material Inputs
 </label> */}
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
                                          <MenuItem value="femle">Femle</MenuItem>


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
                                          label="Lesson Title"
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
                                          id="city"
                                          label="City"
                                          name="city"
                                          onChange={handleChange}
                                          value={values.city}
                                          onBlur={handleBlur}
                                          error={errors.city && touched.city}
                                          helperText={(errors.city && touched.city) && errors.city}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-2 col-lg-2">
                                      <div className="form-group-material">
                                        <TextField
                                          fullWidth
                                          margin="normal"
                                          id="cell"
                                          label="Cell"
                                          name="cell"
                                          onChange={handleChange}
                                          value={values.cell}
                                          onBlur={handleBlur}
                                          error={errors.cell && touched.cell}
                                          helperText={(errors.cell && touched.cell) && errors.cell}
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
                                      <div className="col-sm-12 offset-sm-3">
                                        <button
                                          type="reset"
                                          className="btn btn-secondary"
                                        >
                                          Cancel
                                      </button>{" "}
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          Save changes
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
          </section>
          <Footer />
          {/* <!-- Page Footer--> */}
          {/* FIRST TIMER CONTENT */}
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
      <ToastContainer />
    </div>
  );
}

export default FirstTimers;
