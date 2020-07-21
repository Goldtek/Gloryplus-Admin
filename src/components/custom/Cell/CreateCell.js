import React from "react";
// import axios from "axios";
// import uuid from "react-uuid";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, BreadCrumb, Footer } from "../../Partials";
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"
//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const styles = theme => ({

    formControl: {
        margin: theme.spacing(2),
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(1) * 2,
    },
});


class CreateCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
        // document.getElementById("cell").classList.add("active");
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Header />
                <SideBar />

                {/* CLOSE SIDE BAR */}
                <ToastContainer />


                <div className="page-content">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#">Create Home Cell</a></li>
                                    </ol>
                                </nav>
                            </div>
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
                                        <h5 className="card-title">Basic Example</h5>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12 col-lg-8 col-xs-8">
                                                            <div className="form-group-material">

                                                                <TextField
                                                                    fullWidth
                                                                    margin="normal"
                                                                    id="cellLeader"
                                                                    label="Cell Leader"
                                                                    name="leader"

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
                                                                        id='gender'>
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
                                                                        id='country'>
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
                                                                        id='state'>
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

}


export default withStyles(styles)(CreateCell);
