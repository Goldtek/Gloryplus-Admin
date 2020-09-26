import React, { useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchGalleryCoverList } from "../../../Redux/actions/galleryActions";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb } from "../../Partials";
import { LoaderCard, InfoCard } from "../Helpers";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Moment from "react-moment";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { Formik } from "formik";
import * as yup from "yup";

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CustomDialog from "../Modal/CustomDialog";
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const API_URL = process.env.REACT_APP_BASEURL;

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    // height: 450,
    border: "2px solid red",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  name_error_text: {
    color: "red",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
  },
});

const CreateGallery = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  let history = useHistory();
  const coverImage = useSelector((state) => state.coverGallery);
  const [isOpen, setIsOPen] = React.useState(false);
  const handleDialogOpen = () => {
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };

  const delGalleryCover = (id) => {
    confirmAlert({
      title: "This action will remove gallery content",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert(`Click Yes Image Id: ${id}`),
        },
        {
          label: "No",
          onClick: () => alert(`Click No Image Id: ${id}`),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(fetchGalleryCoverList());
    return () => {
      dispatch(fetchGalleryCoverList());
    };
  }, [dispatch]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Create Gallery</title>
      </Helmet>
      <Header />
      <SideBar />

      {/* CLOSE SIDE BAR */}
      <ToastContainer />
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <Breadcrumb crumbItem={"Gallery"} crumb={"Create Gallery"} />
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={handleDialogOpen}
                  >
                    Create Cover Image
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={history.goBack}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {coverImage.loading ? (
              <LoaderCard />
            ) : coverImage.error ? (
              <InfoCard error={coverImage.error} />
            ) : (
              <React.Fragment>
                {coverImage.galleryCoverItems.length ? (
                  coverImage.galleryCoverItems.map((coverItem) => (
                    <div className="col-md-3 mt-4">
                      <div className="card profile-card-5">
                        <div className="card-img-block">
                          <img
                            className="card-img-top"
                            src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c"
                            alt="Card image cap"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{coverItem.title}</h5>

                          <div
                            className="btn-group btn-group-sm "
                            role="group"
                            aria-label="Gallery Buttons"
                          >
                            <a
                              href={`/dashboard/${coverItem.id}/gallery`}
                              type="button"
                              className="btn btn-primary"
                            >
                              view gallery
                            </a>
                            {/* <button type="button" className="btn btn-warning">
                              edit
                            </button> */}
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => delGalleryCover(coverItem.id)}
                            >
                              delete
                            </button>
                          </div>
                        </div>
                        <div className="card-footer text-muted">
                          <Moment fromNow>{coverItem.created}</Moment>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <InfoCard info="No Gallery Cover Available , Please Create One." />
                )}
              </React.Fragment>
            )}
          </div>
        </div>
        <CustomDialog
          OpenModal={isOpen}
          handleClose={handleDialogClose}
          title={"Create Gallery Cover"}
          dialogWidth="sm"
        >
          <Formik
            initialValues={{ file: null, title: "" }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios({
                method: "POST",
                url: `${API_URL}/galleryCover`,
                data: {
                  id: uuid(),
                  title: values.title,
                  coverImg: values.file.name,
                  created: Date.now(),
                },
              })
                .then(() => {
                  resetForm();
                  setSubmitting(false);
                  toast.success("Gallery Cover Created Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  dispatch(fetchGalleryCoverList());
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
            validationSchema={yup.object().shape({
              title: yup.mixed().required(),
              file: yup.mixed().required(),
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              handleBlur,
              handleChange,
              touched,
              errors,
            }) => {
              return (
                <form onSubmit={handleSubmit} encType="">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField
                        id="outlined-email-input-required"
                        label="Gallery Title"
                        name="title"
                        autoComplete="title"
                        margin="normal"
                        fullWidth
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.title && touched.title}
                        helperText={
                          errors.title && touched.title && errors.title
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className="form-group">
                        <label htmlFor="file">Gallery Cover upload</label>
                        <input
                          id="file"
                          name="file"
                          type="file"
                          onChange={(event) => {
                            setFieldValue("file", event.currentTarget.files[0]);
                          }}
                          className="form-control"
                        />
                        <span className={classes.name_error_text}>
                          {errors.file && touched.file && errors.file}
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    type="submit"
                  >
                    {/* <SaveIcon className={classes.rightIcon} />  */}
                    Create Gallery Cover
                  </Button>{" "}
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    type="button"
                    onClick={handleDialogClose}
                  >
                    {/* <DeleteIcon className={classes.rightIcon} /> */}
                    Close
                  </Button>
                </form>
              );
            }}
          />
        </CustomDialog>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(CreateGallery);
