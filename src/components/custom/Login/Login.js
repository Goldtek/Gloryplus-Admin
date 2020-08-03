import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// import CircularProgress from '@material-ui/core/CircularProgr
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { userLogin, userLogout } from "../../../Redux/actions/userActions";
// import { ToastContainer, toast } from "react-toastify";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
// import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  image: {
    backgroundImage: "url(images/background/gloryplus.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  snackbar: {
    margin: theme.spacing(1),
    backgroundColor: "#d32f2f",
  },
}));

const Login = (props) => {
  // console.log(props.location.state);
  const classes = useStyles();
  const [status, setStatus] = useState("");
  const { userLogout } = props;
  // console.log(props.User.errorMessage);
  useEffect(() => {
    setStatus(props.location.state);
    userLogout();
  }, [userLogout]);

  return (
    <Grid container component="main" className={classes.root}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper} style={{ marginTop: "15vh" }}>
          <img
            src="img/brand/logo.png"
            alt="..."
            style={{ maxWidth: "6rem" }}
            className="img-fluid mb-4"
          />
          <Typography variant="h5" style={{ fontSize: "2rem" }}>
            Login <i className="fa fa-lock" aria-hidden="true"></i>
          </Typography>
          <Formik
            initialValues={{ password: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              const data = {
                email: values.email,
                password: values.password,
                role: "ADMIN",
                brId: "lagos",
              };
              props.userLogin(data);
              resetForm();
              setSubmitting(false);
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
              <form onSubmit={handleSubmit} className={classes.form}>
                {status ? (
                  <SnackbarContent
                    className={classes.snackbar}
                    message={status}
                  />
                ) : props.User.errorMessage !== "" ? (
                  <SnackbarContent
                    className={classes.snackbar}
                    message={`${props.User.errorMessage} Check Your Connection`}
                  />
                ) : (
                  ""
                )}

                <div className="form-group">
                  <TextField
                    autoFocus={true}
                    type="email"
                    fullWidth
                    id="email"
                    label="Email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    margin="normal"
                    name="email"
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </div>
                <div className="form-group mb-4">
                  <TextField
                    autoFocus={false}
                    type="password"
                    fullWidth
                    id="Password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    margin="normal"
                    name="password"
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                  <div className="row">
                    <div className="col-auto">
                      <a href="/recover" className="form-text small text-muted">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  className={classes.submit}
                >
                  LogIn
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Grid>

      <Grid item xs={false} sm={4} md={9} className={classes.image} />
    </Grid>
  );
};

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  User: PropTypes.object.isRequired,
  userLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => {
      dispatch(userLogin(data));
    },

    userLogout: () => {
      dispatch(userLogout());
    },
  };
};

const mapStateToProps = (state) => ({
  User: state.User,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(withStyles)(Login));
