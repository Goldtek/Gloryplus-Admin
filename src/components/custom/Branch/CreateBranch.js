import React from "react";
import axios from "axios";
// import uuid from "react-uuid";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb } from "../../Partials";
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet'
import { Formik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    leader: Yup.string().required("required"),
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

const styles = theme => ({

    formControl: {
        marginTop: '18px',
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(1) * 2,
    },
});


const CreateBranch = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.state = { value: '' };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    // componentDidMount() {
    //     document.getElementById("cell").classList.add("active");
    // }

    const { classes } = props;
    return (
        <React.Fragment>
            <Helmet><title>Create Branch</title></Helmet>
            <Header />
            <SideBar />

            {/* CLOSE SIDE BAR */}
            <ToastContainer />

            <div className="page-content">

                <div className="container-fluid">
                    <div className="row">
                        <Breadcrumb crumbItem={'Branch'} crumb={'Create Branch'} />
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <Button variant="contained" href="dashboard/sermon/view" color="primary" style={{ textDecoration: 'none', color: 'white' }}>
                                        View Branches
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
                                    <h5 className="card-title">Create Branch</h5>
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <Formik

                                                    initialValues={{
                                                        leader: "",
                                                        address: "",
                                                        gender: "",
                                                        email: "",
                                                        country: "",
                                                        state: "",
                                                        lga: "",
                                                        comment: "",
                                                    }}
                                                    validationSchema={validationSchema}
                                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                                        setSubmitting(true);
                                                        alert(
                                                            JSON.stringify(
                                                                {
                                                                    values
                                                                },
                                                                null,
                                                                2
                                                            )
                                                        );
                                                        axios({
                                                            method: "POST",
                                                            url: `${API_URL}/event`,
                                                            data: {
                                                                // id: uuid(),
                                                                img: values.file.name,
                                                                type: values.file.type,
                                                                title: values.title,
                                                                date: values.date,
                                                                details: values.details,
                                                                address: values.address,
                                                                created: Date.now(),
                                                            },
                                                        })
                                                            .then((res) => {
                                                                resetForm();
                                                                setSubmitting(false);
                                                                toast.success("Event Created Successfully", {
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
                                                        setFieldValue,
                                                        handleChange,
                                                        touched,
                                                        errors,
                                                        handleBlur,
                                                        isValid
                                                    }) => (
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="row">
                                                                    <div className="col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                                                        <div className="form-group-material">

                                                                            <TextField
                                                                                fullWidth
                                                                                margin="normal"
                                                                                id="cellLeader"
                                                                                label="Branch Pastor"
                                                                                name="leader"
                                                                                value={values.leader}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                error={errors.leader && touched.leader}
                                                                                helperText={(errors.leader && touched.leader) && errors.leader}

                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-12 col-sm-12 col-lg-4 col-xs-4">
                                                                        <div className="input-material">
                                                                            <FormControl className={classes.formControl}>
                                                                                <InputLabel htmlFor="sermontype">Gender</InputLabel>
                                                                                <Select
                                                                                    native
                                                                                    fullWidth
                                                                                    name='gender'
                                                                                    id='gender'
                                                                                    value={values.gender}
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    error={errors.gender && touched.gender}
                                                                                    helperText={(errors.gender && touched.gender) && errors.gender}

                                                                                >
                                                                                    <option value=""></option>
                                                                                    <option value={"male"}>Male</option>
                                                                                    <option value={"female"}>Female</option>


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
                                                                                value={values.phone}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                error={errors.phone && touched.phone}
                                                                                helperText={(errors.phone && touched.phone) && errors.phone}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-sm-12 col-lg-3 col-xs-12">
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
                                                                                helperText={(errors.address && touched.address) && errors.address}

                                                                            />

                                                                        </div>
                                                                    </div>

                                                                    <div className="col-sm-12 col-md-2 col-lg-2">
                                                                        <div className="form-group-material">

                                                                            <FormControl className={classes.formControl}>
                                                                                <InputLabel htmlFor="sermontype">Country</InputLabel>
                                                                                <Select
                                                                                    native
                                                                                    fullWidth
                                                                                    name='country'
                                                                                    id='country'
                                                                                    value={values.country}
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    error={errors.country && touched.country}
                                                                                    helperText={(errors.country && touched.country) && errors.country}
                                                                                >
                                                                                    <option value=""></option>
                                                                                    <option value={"audio"}>Audio</option>
                                                                                    <option value={"video"}>Video</option>
                                                                                </Select>
                                                                            </FormControl>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 col-md-2 col-lg-2">
                                                                        <div className="form-group-material">

                                                                            <FormControl className={classes.formControl}>
                                                                                <InputLabel htmlFor="sermontype">State</InputLabel>
                                                                                <Select
                                                                                    native
                                                                                    fullWidth
                                                                                    name='state'
                                                                                    id='state'
                                                                                    value={values.state}
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    error={errors.state && touched.state}
                                                                                    helperText={(errors.state && touched.state) && errors.state}
                                                                                >
                                                                                    <option value=""></option>
                                                                                    <option value={"audio"}>Audio</option>
                                                                                    <option value={"video"}>Video</option>
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
                                                                                helperText={(errors.lga && touched.lga) && errors.lga}
                                                                            />

                                                                        </div>
                                                                    </div>

                                                                    <div className="col-sm-12 col-md-2 col-lg-2">
                                                                        <div className="form-group-material">
                                                                            <TextField
                                                                                fullWidth
                                                                                margin="normal"
                                                                                id="zip"
                                                                                label="zip"
                                                                                name="zip"
                                                                                value={values.zip}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                error={errors.zip && touched.zip}
                                                                                helperText={(errors.zip && touched.zip) && errors.zip}

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
                                                                            <button
                                                                                type="reset"
                                                                                className="btn btn-secondary"
                                                                            >
                                                                                Cancel
</button>{" "}
                                                                            <Button type="submit" variant="contained" color="primary" >
                                                                                Create Branch
</Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        )}

                                                </Formik>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );


}

export default withStyles(styles)(CreateBranch);
