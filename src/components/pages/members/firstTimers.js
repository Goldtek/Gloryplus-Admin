import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import FormError from "./formError";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { Header, SideBar, PageHeaderTitle, Footer, firestore, Map, PlacesAutocomplete } from "../../partials";
import { fetchStates, fetchCities  } from '../../util';
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { handleError } from "../../util";

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
  homecell: Yup.string().required("Cell is Required"),
});

function FirstTimers() {
  const dispatch = useDispatch();
  const userStore = useSelector(state => state.user);
  const Cellstore = useSelector(state => state.cell);

  // const { locations } = Cellstore;
  const { countries, states, cities } = userStore;
  const [homecell, setCell] = useState('');
  const [locations, setLocations] = useState([]);
  const [currentLocation, setLocation] = useState({lat: 6.589953434977126, lng: 3.375679742065203 });

  useEffect(() => {
    document.getElementById("members").classList.add("active");
    fetchCells();
  },[]);

  const fetchCells = async () => {
    await firestore.collection('cells')
    .onSnapshot((querySnapshot) => {
      const results = [];
      const restructured = [];
      querySnapshot.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()});
      });
  
      for(let cell of results) {
        restructured.push({coordinator: cell.coordinator, address: cell.address, lng: cell.coordinates.lng, lat: cell.coordinates.lat, id: cell.id, phone: cell.phone });
      }
      setLocations(restructured);
    }, handleError);
  }

  const setHomeCell = (id) => {
    setCell(id);
    toast.success("Cell has been successfully assigned to user.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const convertAddressToLatLng = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_MAPKEY}`;
    const { data } = await axios.get(url);
    const coords = data.results[0].geometry.location;
    setLocation(coords);
  
    // geocode.fromAddress(address).then(
    //   response => {
    //   const coordinates = response.results[0].geometry.location;
    //   console.log('coords', coordinates);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  };

  const onselectCountry = ({ target }) => {
     fetchStates(dispatch, target.value);
  };
  
  const onselectState = ({ target }) => {
      fetchCities(dispatch, target.value);
  };
  
  
  return (
    <div className="page">
      <Helmet>
        <title>First Timer</title>
      </Helmet>
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          <PageHeaderTitle title="First Timer" currpg="Add First Timer" />
          
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        MVP - <small>Plan Cell for First Timer</small>
                      </h3>
                    </div>
                    <div className="card-body">
                    <Map locations={locations} zoomLevel={11} currentLocation={currentLocation} setHomeCell={setHomeCell}/> 
          
                      <Formik
                        initialValues={{
                          firstname: "",
                          gender: "",
                          email: "",
                          phone: "",
                          address: "",
                          city: "",
                          state: "",
                          homecell: "",
                          comment: "",
                          surname: '',
                          age: "",
                          location: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                        
                          try{
                            const user =  {
                              firstname: values.firstname,
                              gender: values.gender,
                              email: values.email,
                              phone: values.phone,
                              address: values.address,
                              city: values.city,
                              state: values.state,
                              country: values.country,
                              bustop: values.bustop,
                              comment: values.comment,
                              role: 'CellLeader',
                              surname: values.surname,
                              age: values.age,
                              cell: values.homecell
                              };
                              console.log('user', user);
                            
                                await firestore.collection('users').add(user);
                                resetForm();
                                setSubmitting(false);
                                toast.success("Cell Successfully added", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  });

                        } catch (error) {
                          console.log('error', error);
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
                            <div className="line"></div>

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
                                    <div className="select input-material">
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
                                      <span className="select-highlight"></span>
                                      <span className="select-bar"></span>
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


                                  <div className="col-sm-12 col-md-3 col-lg-3">
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
                                        onBlur={(value) => {
                                          handleBlur(value)
                                          convertAddressToLatLng(value.target.value)}}
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
                                    <div className="select input-material">
                                      <select
                                        className={
                                          touched.country && errors.country
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="country"
                                        onChange={(value) => {
                                          handleChange(value)
                                          onselectCountry(value)
                                      }}
                                        value={values.country}
                                        onBlur={handleBlur}
                                      >
                                        <option>Country</option>
                                        {countries.map((country)=> ( <option value={country.id} key={country.id}>{country.name}</option> ))}
                                        
                                        
                                      </select>
                                      <span className="select-highlight"></span>
                                      <span className="select-bar"></span>
                                      <FormError
                                        touched={touched.country}
                                        message={errors.country}
                                      />
                                      {/* <label class="select-label">state</label> */}
                                    </div>
                                  </div>
                 

                                  <div className="col-md-4 col-sm-11 col-lg-4 col-xs-6">
                                    <div className="select input-material">
                                      <select
                                        className={
                                          touched.state && errors.state
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="state"
                                        onChange={(value) => {
                                          handleChange(value)
                                          onselectState(value)
                                      }}
                                        value={values.state}
                                        onBlur={handleBlur}
                                      >
                                        <option>State</option>
                                        {states.map((state)=> ( <option value={state.id} key={state.id}>{state.name}</option> ))}
                                      </select>
                                      <span className="select-highlight"></span>
                                      <span className="select-bar"></span>
                                      <FormError
                                        touched={touched.state}
                                        message={errors.state}
                                      />
                                      {/* <label class="select-label">state</label> */}
                                    </div>
                                  </div>


                                  <div className="col-md-4 col-sm-12 col-lg-4 col-xs-6">
                                    <div className="select input-material">
                                      <select
                                        className={
                                          touched.city && errors.city
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="city"
                                        onChange={handleChange}
                                        value={values.city}
                                        onBlur={handleBlur}
                                      >
                                        <option>City</option>
                                        {cities.map((city)=> ( <option value={city.id} key={city.id}>{city.name}</option> ))}
                                      </select>
                                      <span className="select-highlight"></span>
                                      <span className="select-bar"></span>
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
                                          touched.bustop && errors.bustop
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
                                        htmlFor="bustop"
                                        className="label-material"
                                      >
                                        Nearest bustop
                                      </label>
                                    </div>
                                  </div>
                                 
                                  <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                    <div className="select input-material">
                                      <select
                                        className={
                                          touched.homecell && errors.homecell
                                            ? "input-material select-text is-invalid"
                                            : "input-material select-text"
                                        }
                                        name="homecell"
                                        onChange={handleChange}
                                        value={homecell}
                                        onBlur={handleBlur}
                                      >
                                        <option>Cell</option>
                                        {locations.map((location)=> ( <option value={location.id} key={location.id} selected="">{location.coordinator}</option> ))}
                                      </select>
                                      <span className="select-highlight"></span>
                                      <span className="select-bar"></span>
                                      <FormError
                                        touched={touched.homecell}
                                        message={errors.homecell}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <div className="col-sm-12 col-md-12 col-lg-12 offset-sm-3">
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
