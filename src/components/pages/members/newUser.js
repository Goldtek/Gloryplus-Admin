import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import uuid from "react-uuid";
import FormError from "./formError";
// import Thumb from "./thumb";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
// import Content from "../main";
import "./form.css";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  cell: Yup.string().required("cell is required"),
  city: Yup.string().required("city is required "),
  state: Yup.string().required("state is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function NewUser() {
  useEffect(() => {
    document.getElementById("members").classList.add("active");
  });

  const validateEmail = e => {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }

  const getStyle = () => {
    return {
      height: 600,
      width: 350,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    }
  }

  return (
    <div className="page">
      <Helmet>
        <title>New User</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="New Admin User" currpg="New User" />
          {/* FIRST TIMER CONTENT */}
          {/* <!-- Forms Section--> */}
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        <small>New Admin User</small>
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
                            url: "http://localhost:3000/firstTimer",
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
                                      <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        className={
                                          touched.name && errors.name
                                            ? "input-material is-invalid"
                                            : "input-material"
                                        }
                                        onChange={handleChange}
                                        value={values.name}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.name}
                                        message={errors.name}
                                      />
                                      <label
                                        htmlFor="name"
                                        className="label-material"
                                      >
                                        Full Name -<small>surname first</small>
                                      </label>
                                    </div>
                                  </div>

                                  <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                    <div class="select input-material">
                                      <select
                                        className={
                                          touched.gender && errors.gender
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="gender"
                                        onChange={handleChange}
                                        value={values.gender}
                                        onBlur={handleBlur}
                                      >
                                        <option>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                      </select>
                                      <span class="select-highlight"></span>
                                      <span class="select-bar"></span>
                                      <FormError
                                        touched={touched.gender}
                                        message={errors.gender}
                                      />
                                      {/* <label class="select-label">Gender</label> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group-material">
                                      <Field
                                        id="email"
                                        type="email"
                                        name="email"
                                        className={
                                          touched.gender && errors.gender
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.email}
                                        message={errors.email}
                                      />
                                      <label
                                        htmlFor="email"
                                        className="label-material"
                                      >
                                        Email
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group-material">
                                      <Field
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        className={
                                          touched.phone && errors.phone
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.phone}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.phone}
                                        message={errors.phone}
                                      />
                                      <label
                                        htmlFor="phone"
                                        className="label-material"
                                      >
                                        Phone
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
                                    <div className="form-group-material">
                                      <textarea
                                        className={
                                          touched.address && errors.address
                                            ? "form-control is-invalid"
                                            : "form-control "
                                        }
                                        placeholder="address"
                                        rows="1"
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
                                  </div>
                                  <div className="col-sm-12 col-md-2 col-lg-2">
                                    <div className="form-group-material">
                                      <Field
                                        id="city"
                                        type="text"
                                        name="city"
                                        className={
                                          touched.city && errors.city
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.city}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.city}
                                        message={errors.city}
                                      />
                                      <label
                                        htmlFor="city"
                                        className="label-material"
                                      >
                                        City
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-2 col-lg-2">
                                    <div className="form-group-material">
                                      <Field
                                        id="state"
                                        type="text"
                                        name="state"
                                        className={
                                          touched.state && errors.state
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.state}
                                        onBlur={handleBlur}
                                      />
                                      <label
                                        htmlFor="state"
                                        className="label-material"
                                      >
                                        <FormError
                                          touched={touched.state}
                                          message={errors.state}
                                        />
                                        State
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-2 col-lg-2">
                                    <div className="form-group-material">
                                      <Field
                                        id="cell"
                                        type="text"
                                        name="cell"
                                        className={
                                          touched.cell && errors.cell
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.cell}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.cell}
                                        message={errors.cell}
                                      />
                                      <label
                                        htmlFor="cell"
                                        className="label-material"
                                      >
                                        Cell
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group-material">
                                      <Field
                                        id="comment"
                                        type="text"
                                        name="comment"
                                        className="input-material"
                                        onChange={handleChange}
                                        value={values.comment}
                                        onBlur={handleBlur}
                                      />
                                      <label
                                        htmlFor="comment"
                                        className="label-material"
                                      >
                                        Comment - <small>optional</small>
                                      </label>
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

export default NewUser;
