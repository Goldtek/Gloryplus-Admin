import React from "react";
import axios from "axios";
import * as Yup from "yup";
// import uuid from "react-uuid";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { Header, SideBar, Breadcrumb } from "../../Partials";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  address: Yup.string().required("required"),
  phone: Yup.number("must be a phone number").required("required"),
  zip: Yup.string().nullable(),
  role: Yup.string().required("required"),
  state: Yup.string().required("required "),
  country: Yup.string().required("required"),
  email: Yup.string().email("Invalid email").required("required"),
});

const styles = (theme) => ({
  formControl: {
    marginTop: "18px",
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1) * 2,
  },
});

const Create_Member_MVP = (props) => {
  //   console.log(props.User.brId);
  let history = useHistory();
  const alert = useAlert();
  const { classes } = props;
  // useEffect(() => {
  //     document.getElementById("members").classList.add("active");
  // });
  return (
    <React.Fragment>
      <Helmet>
        <title>MVP</title>
      </Helmet>
      <ToastContainer />
      <Header />
      <SideBar />
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#">Create New Member</a></li>
                                </ol>
                            </nav> */}
              <Breadcrumb crumbItem={"MVP"} crumb={"Create Member"} />{" "}
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button
                    href="/dashboard/member/view"
                    variant="contained"
                    color="primary"
                  >
                    View Members
                  </Button>{" "}
                  <Button
                    onClick={() => history.goBack()}
                    variant="contained"
                    color="secondary"
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Create Users</h5>
                  <Formik
                    initialValues={{
                      name: "",
                      gender: "",
                      gender: "",
                      role: "",
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
                        url: `${API_URL}/users`,
                        data: {
                          //   id: uuid(),
                          name: values.name,
                          gender: values.gender,
                          email: values.email,
                          role: values.role,
                          phone: values.phone,
                          address: values.address,
                          state: values.state,
                          country: values.country,
                          zip: values.zip,
                          comment: values.comment,
                          brId: props.User.brId,
                          status: "disabled",
                        },
                      })
                        .then((res) => {
                          resetForm();
                          setSubmitting(false);
                          //   toast.success(" User Successfully Created", {
                          //     position: "top-right",
                          //     autoClose: 5000,
                          //     hideProgressBar: false,
                          //     closeOnClick: true,
                          //     pauseOnHover: true,
                          //     draggable: true,
                          //     progress: undefined,
                          //   });
                          alert.success("User Created");
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
                          <div className="col-md-8 col-sm-12 col-lg-8 col-xs-12">
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
                                helperText={
                                  errors.name && touched.name && errors.name
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-2 col-sm-12 col-lg-2 col-xs-12">
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
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                              </Select>
                            </FormControl>
                          </div>

                          <div className="col-md-2 col-sm-12 col-lg-2 col-xs-12">
                            <FormControl className={classes.formControl}>
                              <InputLabel htmlFor="sermontype">Role</InputLabel>
                              <Select
                                native
                                fullWidth
                                name="role"
                                id="role"
                                value={values.role}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.role && touched.role}
                              >
                                <option value=""></option>
                                <option value={"MVP"}>MVP</option>
                                <option value={"HSF"}>
                                  House Fellowship Leader
                                </option>
                              </Select>
                            </FormControl>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6">
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
                              helperText={
                                errors.email && touched.email && errors.email
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
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
                              helperText={
                                errors.phone && touched.phone && errors.phone
                              }
                            />
                          </div>
                          <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
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
                              helperText={
                                errors.address &&
                                touched.address &&
                                errors.address
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-2 col-lg-2">
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
                              helperText={
                                errors.country &&
                                touched.country &&
                                errors.country
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-2 col-lg-2">
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
                              helperText={
                                errors.state && touched.state && errors.state
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-2 col-lg-2">
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
                              helperText={
                                errors.zip && touched.zip && errors.zip
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
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
                              helperText={
                                errors.comment &&
                                touched.comment &&
                                errors.comment
                              }
                            />
                          </div>
                          <div className="form-group row">
                            <br />
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
                                disabled={isSubmitting}
                              >
                                Create Member
                              </button>
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
};

Create_Member_MVP.propTypes = {
  User: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  User: state.User.user,
});
export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Create_Member_MVP));
