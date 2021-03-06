import React, { useEffect, useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb, firestore } from "../../partials";
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';
import { fetchCities, fetchStates, geocode } from '../../util'

import FormError from "./formError";

const validationSchema = Yup.object().shape({
    coordinator: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("name is required"),
    gender: Yup.string().required("gender is required"),
    address: Yup.string().required("address is required"),
    phone: Yup.number("must be a phone number").required("phone is required"),
    country: Yup.string().required("country is required"),
    city: Yup.string().required("city is required "),
    state: Yup.string().required("state is required"),
   // email: Yup.string().email("Invalid email").required("Required"),
  });


const CreateCell = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [coordinates, setCoordinates] = useState(null);
    const user = useSelector(state => state.user);
    const { countries, states, cities } = user;

    const onselectCountry = ({ target }) => {
        //   console.log('target', target.uid);
        //  const obj = JSON.parse(JSON.stringify(target.value));
        // return console.log('object', Object.assign({}, obj));
         fetchStates(dispatch, target.value);
    };
      
    const onselectState = ({ target }) => {
        fetchCities(dispatch, target.value);
    };

    const convertAddressToLatLng = async (address) => {
        geocode.fromAddress(address).then(
          response => {
          const coordinates = response.results[0].geometry.location;
          setCoordinates(coordinates);
          },
          error => {
            console.error(error);
          }
        );
      };
      


    useEffect(()=> {
         document.getElementById("cell").classList.add("active");
    },[]);

        return (
            <React.Fragment>
                <Helmet><title>Create Cell</title></Helmet>
                <Header />
               

                <div className="page-content d-flex align-items-stretch">
                    <SideBar />
                    <div className="content-inner">
                           
                            <div className="page-content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <Breadcrumb crumbItem={'Home'} crumb={'Cell'} />
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <Button variant="contained" href="dashboard/sermon/view" color="primary">
                                                        View Home Cell
                                                        </Button>
                                                    {" "}
                                                    <Button variant="contained" color="secondary">Back</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Create New HomeCell</h5>
                                                    <Formik
                                                        initialValues={{
                                                        coordinator: "",
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
                                                            if(coordinates == null){
                                                                return;
                                                            }
                                                        setSubmitting(true);
                                                        // get the coordinates of the homecell and also store it
                                                        try { 
                                                            await firestore.collection("cells").add({...values, coordinates });
                                                            toast.success("Church Branch Successfully added", {
                                                                    position: "top-right",
                                                                    autoClose: 5000,
                                                                    hideProgressBar: false,
                                                                    closeOnClick: true,
                                                                    pauseOnHover: true,
                                                                    draggable: true,
                                                                    progress: undefined,
                                                                });
                                                                history.push("/dashboard/cells");
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
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                                <div className="row">
                                                                    <div className="col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                                                        <div className="form-group-material">
                                                                        <Field
                                                                            id="coordinator"
                                                                            type="text"
                                                                            name="coordinator"
                                                                            className={
                                                                            touched.coordinator && errors.coordinator
                                                                                ? "input-material is-invalid"
                                                                                : "input-material"
                                                                            }
                                                                            onChange={handleChange}
                                                                            value={values.coordinator}
                                                                            onBlur={handleBlur}
                                                                        />
                                                                        <FormError
                                                                            touched={touched.coordinator}
                                                                            message={errors.coordinator}
                                                                        />
                                                                        <label
                                                                            htmlFor="coordinator"
                                                                            className="label-material"
                                                                        >
                                                                            Cell Coordinator
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
                                                                        <label class="select-label">Gender</label>
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
                                                                            onBlur={(value) => {
                                                                                handleBlur(value);
                                                                                convertAddressToLatLng(value.target.value)
                                                                            }}
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
                                                                                onChange={(value) => {
                                                                                    handleChange(value)
                                                                                    onselectCountry(value)
                                                                                }}
                                                                                value={values.country}
                                                                                onBlur={handleBlur}
                                                                            >
                                                                                <option>Country</option>
                                                                                {countries.map((country)=>( <option value={country.id}>{country.name}</option> ))}    
                                                                            </select>
                                                                            <span class="select-highlight"></span>
                                                                            <span class="select-bar"></span>
                                                                            <FormError
                                                                                touched={touched.country}
                                                                                message={errors.country}
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
                                                                            onChange={(value) => {
                                                                                handleChange(value)
                                                                                onselectState(value)
                                                                            }}
                                                                            value={values.state}
                                                                            onBlur={handleBlur}
                                                                        >
                                                                            <option>State</option>

                                                                            {states.map((state)=>( <option value={state.id}>{state.name}</option> ))}
                                                                            
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
                                                                            {cities.map((city)=>( <option value={city.id}>{city.name}</option> ))}
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
                                                                            <TextField
                                                                                fullWidth
                                                                                multiline
                                                                                margin="normal"
                                                                                id="comment"
                                                                                label="Comment- optional"
                                                                                name="comment"

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
                            </div>
                    </div>
                    <ToastContainer />
                </div>

            </React.Fragment>
        );

}


export default CreateCell;
