import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import uuid from "react-uuid";
import FormError from "./formError";
// import Thumb from "./thumb";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import "./form.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  country: Yup.string().required("country is required"),
  city: Yup.string().required("city is required "),
  state: Yup.string().required("state is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function CreateBranch() {
  useEffect(() => {
    document.getElementById("branch").classList.add("active");
  });
  return (
    <div className="page">
      <Helmet>
        <title>Branches</title>
      </Helmet>
      <Header />


      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          <PageHeaderTitle title="Church Branch" currpg="branch" />
    
          {/* <!-- Forms Section--> */}
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        Church Branch - <small>New</small>
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
                          country: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                          try { 
                            await firestore.collection("branches").add(values);
                            toast.success("Church Branch Successfully added", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  });
                                } catch (error) {
                                  toast.error(`${error.message}`, {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  });
                                }
                          setTimeout(() => {

                            resetForm();
                            setSubmitting(false);
                          }, 500);

                        }
                      }
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
                                       Resident Pastor's Name -<small>surname first</small>
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
                                  <div className="col-sm-12 col-md-3 col-lg-6">
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
                                  <div className="col-md-8 col-sm-12 col-lg-8 col-xs-12">
                                    <div className="form-group-material">
                                      <Field
                                        className={
                                          touched.address && errors.address
                                          ? "input-material is-invalid"
                                          : "input-material "
                                        }
                                        placeholder=" Branch address"
                                        rows="1"
                                        name="address"
                                        onChange={handleChange}
                                        value={values.address}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.address}
                                        message={errors.address}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-3 col-sm-11 col-lg-3 col-xs-12">
                                    <div class="select input-material">
                                      <select
                                        className={
                                          touched.country && errors.country
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="country"
                                        onChange={handleChange}
                                        value={values.country}
                                        onBlur={handleBlur}
                                      >
                                        <option>Country</option>

                                        <option value="male">Nigeria</option>
                                        
                                      </select>
                                      <span class="select-highlight"></span>
                                      <span class="select-bar"></span>
                                      <FormError
                                        touched={touched.country}
                                        message={errors.country}
                                      />
                                      {/* <label class="select-label">state</label> */}
                                    </div>
                                  </div>

                                  <div className="col-md-4 col-sm-11 col-lg-4 col-xs-6">
                                    <div class="select input-material">
                                      <select
                                        className={
                                          touched.state && errors.state
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="state"
                                        onChange={handleChange}
                                        value={values.state}
                                        onBlur={handleBlur}
                                      >
                                        <option>State</option>

                                        <option value="male">Lagos</option>
                                        
                                      </select>
                                      <span class="select-highlight"></span>
                                      <span class="select-bar"></span>
                                      <FormError
                                        touched={touched.state}
                                        message={errors.state}
                                      />
                                      {/* <label class="select-label">state</label> */}
                                    </div>
                                  </div>

                                  <div className="col-md-6 col-sm-12 col-lg-6 col-xs-6">
                                    <div class="select input-material">
                                      <select
                                        className={
                                          touched.state && errors.state
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="city"
                                        onChange={handleChange}
                                        value={values.city}
                                        onBlur={handleBlur}
                                      >
                                        <option>City</option>

                                        <option value="male">Ikeja</option>

                                      </select>
                                      <span class="select-highlight"></span>
                                      <span class="select-bar"></span>
                                      <FormError
                                        touched={touched.city}
                                        message={errors.city}
                                      />
                                      {/* <label class="select-label">city</label> */}
                                    </div>
                                  </div>
                                  
                            
                                  <div className="row" style={{ marginTop: '60px'}}>
                                    <div className="col-lg-12">
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

export default CreateBranch;