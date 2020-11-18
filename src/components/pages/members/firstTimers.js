import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import FormError from "./formError";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

import { Header, SideBar, PageHeaderTitle, Footer, firestore, Map } from "../../partials";
import { geocoder } from '../../util';
import "./form.css";

const validationSchema = Yup.object().shape({
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
    firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  bustop: Yup.string().required("Nearest bustop is required"),
  city: Yup.string().required("city is required "),
  state: Yup.string().required("state is required"),
  country: Yup.string().required("country is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.string().required("Age is Required"),
});

function FirstTimers() {

  const [currentLocation, setLocation] = useState({lat: 6.589953434977126, lng: 3.375679742065203 });
  const [value, setValue] = useState({});
  const locations = [{ lat: 6.605874, lng: 3.349149, name: 'chisom dike', address:'mylocation', rating: 5}, { lat: 6.6289, lng: 3.338,  name: 'chisom dike', address:'mylocation',rating: 5}, 
  { lat: 6.6388, lng: 6.6388,  name: 'chisom dike', address:'mylocation', rating: 5}, 
  { lat: 6.4664, lng: 3.2835, name: 'chisom dike', address:'mylocation', rating: 4}, { lat: 6.5749, lng: 3.3918,  name: 'chisom dike', address:'mylocation', rating: 2}, {lat: 6.589953434977126, lng: 3.375679742065203,  name: 'chisom dike', address:'mylocation', rating: 3 }]

  useEffect(() => {
    document.getElementById("members").classList.add("active");

    // navigator.geolocation.getCurrentPosition(function(position) {
    //   setLocation({
    //    lat: position.coords.latitude,
    //    lng: position.coords.longitude, 
    //   })
    // });

  },[navigator]);

 
  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  
  return (
    <div className="page">
      <Helmet>
        <title>First Timer</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          <PageHeaderTitle title="First Timer" currpg="First Timer" />
          
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        MVP - <small>First Timer</small>
                      </h3>
                    </div>
                    <div className="card-body">
                    <Map locations={locations} zoomLevel={11} currentLocation={currentLocation} memberLocation={value}/> {/* include it here */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                                    <GooglePlacesAutocomplete
                                        apiKey={process.env.REACT_APP_MAPKEY}
                                        selectProps={{
                                          value,
                                          onChange: setValue,
                                        }}
                                      />
                                </div>
                      <Formik
                        initialValues={{
                          firstname: "",
                          gender: "",
                          email: "",
                          phone: "",
                          address: "",
                          city: "",
                          state: "",
                          cell: "",
                          comment: "",
                          surname: '',
                          age: "",
                          location: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                        
                          try{

                           return console.log('locations', await geocoder.geocode(values.address))
                            const user =  {
                              firstname: values.name,
                              gender: values.gender,
                              email: values.email,
                              phone: values.phone,
                              address: values.address,
                              city: values.city,
                              state: values.state,
                              country: values.country,
                              bustop: values.bustop,
                              comment: values.comment,
                              role: 'firstTimer',
                              surname: values.surname,
                              age: values.age
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
                            {/* <div className="line"></div> */}

                            <div className="row">
                
                              <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row">

                              

                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                    <div className="form-group-material">
                                      <Field
                                        id="surname"
                                        type="text"
                                        name="surname"
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


                                  <div className="col-md-4 col-sm-12 col-lg-4 col-xs-8">
                                    <div className="form-group-material">
                                      <Field
                                        id="firstname"
                                        type="text"
                                        name="firstname"
                                        className={
                                          touched.name && errors.name
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
                                      {/* <label class="select-label">Gender</label> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="form-group-material">
                                      <Field
                                        id="age"
                                        type="text"
                                        name="age"
                                        className={
                                          touched.age && errors.age
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.age}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.age}
                                        message={errors.age}
                                      />
                                      <label
                                        htmlFor="email"
                                        className="label-material"
                                      >
                                        Age
                                      </label>
                                    </div>
                                  </div>


                                  <div className="col-sm-12 col-md-4 col-lg-4">
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


                                  <div className="col-sm-12 col-md-4 col-lg-4">
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
                                  <div className="col-md-6 col-sm-12 col-lg-7 col-xs-12">
                                    <div className="form-group-material">
                                      <Field
                                        className={
                                          touched.address && errors.address
                                            ? "input-material is-invalid"
                                            : "input-material"
                                        }
                                      
                                        name="address"
                                        onChange={handleChange}
                                        value={values.address}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.address}
                                        message={errors.address}
                                      />
                                       <label
                                        htmlFor="phone"
                                        className="label-material"
                                      >
                                        Home Address
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


                                  <div className="col-md-4 col-sm-12 col-lg-4 col-xs-6">
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

                                  <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="form-group-material">
                                      <Field
                                        id="bustop"
                                        type="text"
                                        name="bustop"
                                        className={
                                          touched.cell && errors.cell
                                            ? "input-material is-invalid"
                                            : "input-material "
                                        }
                                        onChange={handleChange}
                                        value={values.bustop}
                                        onBlur={handleBlur}
                                      />
                                      <FormError
                                        touched={touched.bustop}
                                        message={errors.bustop}
                                      />
                                      <label
                                        htmlFor="cell"
                                        className="label-material"
                                      >
                                        Nearest bustop
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
                                        Comment - <small>about the church</small>
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

export default FirstTimers;
