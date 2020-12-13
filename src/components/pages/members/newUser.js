import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import FormError from "./formError";
import { Formik, Form, Field } from "formik";
import TextField from '@material-ui/core/TextField';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import "./form.css";


const validationSchema = Yup.object().shape({
  firstname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("name is required"),
  surname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  role: Yup.string().required("User Role is required"),
  city: Yup.string().required("city is required "),
  state: Yup.string().required("state is required"),
  country: Yup.string().required("country is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function NewUser() {
  const dispatch = useDispatch();
  const userStore = useSelector(state => state.user);
  const { countries, states, cities } = userStore;

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
      <Header />
      
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          <PageHeaderTitle title="New User" currpg="New User" />
    
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        <small>New User</small>
                      </h3>
                    </div>
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          firstname: "",
                          surname: "",
                          gender: "",
                          email: "",
                          phone: "",
                          address: "",
                          city: "",
                          state: "",
                          cell: "",
                          role: "",
                          country: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                            try{

                                const user =  {
                                    id: uuidv4(),
                                    firstname: values.firstname,
                                    surname: values.surname,
                                    gender: values.gender,
                                    email: values.email,
                                    phone: values.phone,
                                    address: values.address,
                                    city: values.city,
                                    state: values.state,
                                    country: values.country,
                                    cell: values.cell,
                                    role: values.role,
                                  };
                                
                                    await firestore.collection('users').add(user);
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

                            } catch (error) {
                                toast.error(`${error}`, {
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
                          handleChange,
                          touched,
                          errors,
                          handleBlur,
                        }) => (
                          <Form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row">
                                  <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                    <div className="form-group-material">
                                      <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        className={
                                          touched.surname && errors.surname
                                            ? "input-material is-invalid"
                                            : "input-material"
                                        }
                                        onChange={handleChange}
                                        value={values.surname}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.surname}
                                        message={errors.surname}
                                      />
                                      <label
                                        htmlFor="name"
                                        className="label-material"
                                      >
                                        Surname
                                      </label>
                                    </div>
                                  </div>


                                  <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                    <div className="form-group-material">
                                      <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        className={
                                          touched.firstname && errors.firstname
                                            ? "input-material is-invalid"
                                            : "input-material"
                                        }
                                        onChange={handleChange}
                                        value={values.firstname}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.firstname}
                                        message={errors.firstname}
                                      />
                                      <label
                                        htmlFor="name"
                                        className="label-material"
                                      >
                                        Firstname 
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
                                    </div>
                                  </div>

                                  <div className="col-sm-12 col-md-6 col-lg-8">
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


                                  <div className="col-md-5 col-sm-11 col-lg-4 col-xs-12">
                                    <div class="select input-material">
                                      <select
                                        className={
                                          touched.role && errors.role
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="role"
                                        onChange={handleChange}
                                        value={values.role}
                                        onBlur={handleBlur}
                                      >
                                        <option>User Role</option>

                                        <option value="male">Admin</option>
                                        
                                      </select>
                                      <span class="select-highlight"></span>
                                      <span class="select-bar"></span>
                                      <FormError
                                        touched={touched.role}
                                        message={errors.role}
                                      />
                                      {/* <label class="select-label">state</label> */}
                                    </div>
                                  </div>


                                  <div className="col-sm-12 col-md-8 col-lg-8 col-lg-6">
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


                                  <div className="col-md-4 col-sm-11 col-lg-4 col-xs-12">
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
                                        {countries.map((country) => ( <option value={country.id} key={country.id}> {country.name} </option> ))}
                                      </select>
                                      <span class="select-highlight"></span>
                                      <span class="select-bar"></span>
                                      <FormError
                                        touched={touched.country}
                                        message={errors.country}
                                      />
                                    </div>
                                  </div>


                                  <div className="col-md-8 col-sm-12 col-lg-8 col-xs-12">
                                    <div className="form-group-material">
                                      <Field
                                        className={
                                          touched.address && errors.address
                                            ?  "input-material is-invalid"
                                            : "input-material "
                                        }
                                        
                                        name="address"
                                        onChange={handleChange}
                                        value={values.address}
                                        onBlur={handleBlur}
                                      />
                                       <label
                                        htmlFor="address"
                                        className="label-material"
                                      >
                                        Address
                                      </label>
                                      <FormError
                                        touched={touched.address}
                                        message={errors.address}
                                      />
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
                                        {states.map((state) => ( <option value={state.id} key={state.id}> {state.name} </option> ))} 
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
                                        {cities.map((city) => ( <option value={city.id} key={city.id}> {city.name} </option> ))}
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
                                 
                                 <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group-material">
                                      
                                      
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
