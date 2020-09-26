import React, { useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchGalleryList } from "../../../Redux/actions/galleryActions";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb } from "../../Partials";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { LoaderCard, InfoCard } from "../Helpers";
// import Moment from "react-moment";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { Formik } from "formik";
import * as yup from "yup";

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import Grid from "@material-ui/core/Grid";
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
  let params = useParams();
  const galleryArr = useSelector((state) => state.galleries);
  const [isOpen, setIsOPen] = React.useState(false);
  const handleDialogOpen = () => {
    setIsOPen(true);
  };

  const handleDialogClose = () => {
    setIsOPen(false);
  };

  useEffect(() => {
    dispatch(fetchGalleryList(params.id));
    return () => {
      dispatch(fetchGalleryList(params.id));
    };
  }, [dispatch]);

  const delGallery = (id) => {
    confirmAlert({
      title: "Confirm to delete",
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
                    Create Gallery
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
          {galleryArr.loading ? (
            <LoaderCard />
          ) : galleryArr.error ? (
            <InfoCard error={galleryArr.error} />
          ) : (
            <div className="row">
              {galleryArr.galleryItems.length ? (
                galleryArr.galleryItems.map((gallery) => (
                  <div className="col-lg-3 mt-3" key={gallery.id}>
                    <div className="hover hover-2 text-white rounded">
                      <img
                        src="https://res.cloudinary.com/mhmd/image/upload/v1570786261/hoverSet-1_pha5qe.jpg"
                        alt=""
                      />
                      <div className="hover-overlay"></div>
                      <div className="hover-2-content px-5 py-4">
                        <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
                          {" "}
                          <span className="font-weight-light">Image </span>
                          Caption
                        </h3>
                        <p
                          className="hover-2-description text-uppercase mb-0 text-danger"
                          onClick={() => delGallery(gallery.id)}
                        >
                          <i className="fa fa-trash "> </i> Delete
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <InfoCard info="No Gallery Available, Please Upload Image" />
              )}
            </div>
          )}
        </div>
        <CustomDialog
          OpenModal={isOpen}
          handleClose={handleDialogClose}
          title={"Create Gallery Cover"}
          dialogWidth="sm"
        >
          <Formik
            initialValues={{ file: null }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios({
                method: "POST",
                url: `${API_URL}/galleries`,
                data: {
                  id: uuid(),
                  img: values.file.name,
                  coverId: params.id,
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
                  dispatch(fetchGalleryList(params.id));
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
              file: yup.mixed().required(),
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,

              touched,
              errors,
            }) => {
              return (
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className="form-group">
                        <input
                          id="file"
                          name="file"
                          type="file"
                          onChange={(event) => {
                            setFieldValue("file", event.currentTarget.files[0]);
                          }}
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
                    Upload Image
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
