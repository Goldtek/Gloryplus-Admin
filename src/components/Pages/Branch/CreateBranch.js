import React from "react";
import axios from "axios";
// import uuid from "react-uuid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb } from "../../Partials";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  brnchPst: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
  phone: Yup.string().required("required"),
  address: Yup.string().required("required"),
  country: Yup.string().required("required"),
  state: Yup.string().required("required"),
  lga: Yup.string().required("required"),
  zip: Yup.string().nullable(),
  comment: Yup.string().nullable(),
});

const API_URL = process.env.REACT_APP_BASEURL;

const styles = (theme) => ({
  formControl: {
    marginTop: "18px",
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1) * 2,
  },
});

const CreateBranch = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Helmet>
        <title>Create Branch</title>
      </Helmet>
      <Header />
      <SideBar />

      {/* CLOSE SIDE BAR */}
      <ToastContainer />
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <Breadcrumb crumbItem={"Branch"} crumb={"Create Branch"} />
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button
                    variant="contained"
                    href="dashboard/branch/view"
                    color="primary"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Branches
                  </Button>{" "}
                  <Button variant="contained" color="secondary">
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Create Branch</h5>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <Formik
                        initialValues={{
                          brnchPst: "",
                          address: "",
                          gender: "",
                          email: "",
                          phone: "",
                          country: "",
                          state: "",
                          lga: "",
                          comment: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);

                          axios({
                            method: "POST",
                            url: `${API_URL}/branches`,
                            data: {
                              // id: uuid(),
                              //   img: values.file.name,
                              //   type: values.file.type,
                              brnchPst: values.brnchPst,
                              gender: values.gender,
                              email: values.email,
                              phone: values.phone,
                              address: values.address,
                              country: values.country,
                              state: values.state,
                              zip: values.zip,
                              created: Date.now(),
                            },
                          })
                            .then((res) => {
                              resetForm();
                              setSubmitting(false);
                              toast.success("Branch Created Successfully", {
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
                          handleChange,
                          touched,
                          errors,
                          handleBlur,
                        }) => (
                          <Form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                <div className="form-group-material">
                                  <TextField
                                    fullWidth
                                    margin="normal"
                                    id="branchpPstor"
                                    label="Branch Pastor"
                                    name="brnchPst"
                                    value={values.brnchPst}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.brnchPst && touched.brnchPst}
                                  />
                                </div>
                              </div>

                              <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                <div className="input-material">
                                  <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="sermontype">
                                      Gender
                                    </InputLabel>
                                    <Select
                                      native
                                      fullWidth
                                      name="gender"
                                      id="gender"
                                      value={values.gender}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={errors.gender && touched.gender}
                                    >
                                      <option value=""></option>
                                      <option value={"Male"}>Male</option>
                                      <option value={"Female"}>Female</option>
                                    </Select>
                                  </FormControl>
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
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email && touched.email}
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
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.phone && touched.phone}
                                  />
                                </div>
                              </div>
                              <div className="col-md-5 col-sm-12 col-lg-5 col-xs-12">
                                <div className="form-group-material">
                                  <TextField
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    id="Address"
                                    label="Address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.address && touched.address}
                                  />
                                </div>
                              </div>

                              <div className="col-sm-12 col-md-2 col-lg-2">
                                <div className="form-group-material">
                                  <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="sermontype">
                                      Country
                                    </InputLabel>
                                    <Select
                                      native
                                      fullWidth
                                      name="country"
                                      id="country"
                                      value={values.country}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={errors.country && touched.country}
                                    >
                                      <option value=""></option>
                                      <option value={"Nigeria"}>Nigeria</option>
                                      <option value={"South Africa"}>
                                        South Africa
                                      </option>
                                      <option value={"Canada"}>Canada</option>
                                      <option value={"USA"}>USA</option>
                                    </Select>
                                  </FormControl>
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-2 col-lg-2">
                                <div className="form-group-material">
                                  <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="sermontype">
                                      State/Province
                                    </InputLabel>
                                    <Select
                                      native
                                      fullWidth
                                      name="state"
                                      id="state"
                                      value={values.state}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={errors.state && touched.state}
                                    >
                                      <option value=""></option>
                                      <option value={"Abuja"}>Abuja</option>
                                      <option value={"Cape Town"}>
                                        Cape Town
                                      </option>
                                      <option value={"Ontario"}>Ontario</option>
                                      <option value={"Texas"}>Texas</option>
                                    </Select>
                                  </FormControl>
                                </div>
                              </div>

                              <div className="col-md-3 col-sm-12 col-lg-3 col-xs-12">
                                <div className="form-group-material">
                                  <TextField
                                    fullWidth
                                    margin="normal"
                                    id="lga"
                                    label="LGA"
                                    name="lga"
                                    value={values.lga}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.lga && touched.lga}
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
                                  />
                                </div>
                              </div>

                              <div className="form-group row">
                                <br />
                                <div className="col-sm-12 offset-sm-3">
                                  {/* <button
                                    type="reset"
                                    className="btn btn-secondary"
                                  >
                                    Cancel
                                  </button>{" "} */}
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                  >
                                    Create Branch
                                  </Button>
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
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(CreateBranch);
