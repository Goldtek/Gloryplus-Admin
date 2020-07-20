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
        document.getElementById("cell").classList.add("active");
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="page">
                <Header />
                <div className="page-content d-flex align-items-stretch">
                    <SideBar />

                    <div className="content-inner">
                        <BreadCrumb title="First Timer" crumb="Membership" />
                        <section className="forms">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center">
                                                <h3 className="h4">
                                                    New Cell Location - <small>Create Cell</small>
                                                </h3>
                                            </div>
                                            <div className="card-body">
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

}


export default withStyles(styles)(CreateCell);
