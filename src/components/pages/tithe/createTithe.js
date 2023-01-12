import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import FormError from "../Sermon/formError";
import { Header, SideBar, ProgressBar, Thumb, firestore } from "../../partials";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: '18px',
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1) * 2,
  },
}));

const CreateTithe = () => {
  const [sermonUrl, setSermonUrl] = useState('');
  const [sermonImage, setSermonImage] = useState('');
  const [coverType, setCoverType] = useState('image');
  const classes = useStyles();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const years = [
    2019, 2020, 2021,2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040
  ];

  useEffect(() => {
    // document.getElementById("sermon").classList.add("active");
  });


  let history = useHistory()


  const validationSchema = Yup.object().shape({

    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    phone: Yup.string().required("Phone number is required"),
    month: Yup.string().required("Month tithe was paid is required"),
    amount: Yup.number().required("Amount is required"),
    year: Yup.number().required("Year is required"),
  });

  return (
    <React.Fragment>
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

            <div className="content-inner">
          <div className="page-content">
            <ToastContainer />
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                      <li className="breadcrumb-item"><a href="#">Upload Tithe Record</a></li>
                    </ol>
                  </nav>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <Button variant="contained" href="dashboard/tithes/view" color="primary">
                        View Tithe Records
              </Button>
                      {" "}
                      <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          firstname: "",
                          lastname: "",
                          othername: "",
                          amount: '',
                          month: "",
                          year: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, resetForm, setFieldValue }) => {
                          try { 
                            setSubmitting(true);
                            
                          
                            const data = {
                              firstname: values.firstname,
                                lastname: values.lastname,
                                othername: values.othername,
                                amount: parseInt(values.amount),
                                month: values.month,
                                phone: values.phone,
                                year: values.year
                            };

                            await firestore.collection("titherecords").add(data);
                            
                            resetForm();
                            setSubmitting(false);
                            toast.success("Tithe Record Uploaded Successfully", {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                            });
                          
                          } catch (err) {
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

                              <div className="row">

                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group">
                                    <FormControl className={classes.formControl}>
                                      <TextField
                                        fullWidth
                                        id="firstname"
                                        name="firstname"
                                        label="Firstname"
                                        margin="normal"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.firstname && touched.firstname}
                                        helperText={(errors.firstname && touched.firstname) && errors.firstname}
                                      />
                                    </FormControl>
                                  </div>
                                </div>

                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group">
                                    <FormControl className={classes.formControl}>
                                      <TextField
                                        fullWidth
                                        id="lastname"
                                        name="lastname"
                                        label="Lastname"
                                        margin="normal"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.lastname && touched.lastname}
                                        helperText={(errors.lastname && touched.lastname) && errors.lastname}
                                      />
                                    </FormControl>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group">
                                    <FormControl className={classes.formControl}>
                                      <TextField
                                        fullWidth
                                        id="othername"
                                        name="othername"
                                        label="Other Name"
                                        margin="normal"
                                        value={values.othername}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                    </FormControl>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group">
                                    <FormControl className={classes.formControl}>
                                      <TextField
                                        fullWidth
                                        id="amount"
                                        name="amount"
                                        label="Amount"
                                        margin="normal"
                                        value={values.amount}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.amount && touched.amount}
                                        helperText={(errors.amount && touched.amount) && errors.amount}
                                      />
                                    </FormControl>
                                  </div>
                                </div>

                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group">
                                    <FormControl className={classes.formControl}>
                                      <TextField
                                        fullWidth
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        margin="normal"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.phone && touched.phone}
                                        helperText={(errors.phone && touched.phone) && errors.phone}
                                      />
                                    </FormControl>
                                  </div>
                                </div>

                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group ">
                                    <FormControl className={classes.formControl}>
                                      <InputLabel htmlFor="sermontype">Month</InputLabel>
                                      <Select
                                        native
                                        fullWidth
                                        value={values.sermonType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='month'
                                        id='month'
                                        error={errors.month && touched.month}
                                        >
                                        <option value=""></option>
                                        {months.map(m =>  <option value={m}>{m}</option>)}
                          
                                      </Select>
                                    </FormControl>
                                  </div>
                                </div>

                                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                                  <div className="form-group ">
                                    <FormControl className={classes.formControl}>
                                      <InputLabel htmlFor="sermontype">Year</InputLabel>
                                      <Select
                                        native
                                        fullWidth
                                        value={values.sermonType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='year'
                                        id='year'
                                        error={errors.year && touched.year}
                                        >
                                        <option value=""></option>
                                        {years.map(yr =>  <option value={yr}>{yr}</option>)}
                          
                                      </Select>
                                    </FormControl>
                                  </div>
                                </div>
                              
                              </div>
                             

                              <div className="form-group">
                                <Button color="primary" type="submit" variant="contained">Add Tithe Record</Button>
                              </div>
                            </form>
                          )}
                      </Formik>
                    </div>
                  </div>






                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateTithe;









