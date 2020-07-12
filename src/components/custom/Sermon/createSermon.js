import React, { useEffect } from "react";
import axios from "axios";
// import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import FormError from "./formError";
// import Thumb from "../gpa/thumb";
import { Header, SideBar, BreadCrumb } from "../../Partials";
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(2),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(1) * 2,
  },
}));

const CreateSermon = () => {
  const classes = useStyles();
  useEffect(() => {
    document.getElementById("sermon").classList.add("active");
  });


  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_IMG_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
  ];
  const VIDEO_SIZE = 300000 * 1024;
  const SUPPORTED_FILE_FORMATS = [
    "video/mp4",
    "audio/mp3",
  ];

  const validationSchema = Yup.object().shape({
    coverimg: Yup
      .mixed()
      .required("cover image is required")
      .test(
        "fileSize",
        "File too large",
        value => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        value => value && SUPPORTED_IMG_FORMATS.includes(value.type)
      ),
    sermonfile: Yup
      .mixed()
      .required("sermon file is required")
      .test(
        "fileSize",
        "File too large",
        value => value && value.size <= VIDEO_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        value => value && SUPPORTED_FILE_FORMATS.includes(value.type)
      ),
    title: Yup.string().required("sermon title is required"),
    sermonType: Yup.string().required("sermon type required"),
    preacher: Yup.string().required("sermon preacher is required"),
  });

  const API_URL = process.env.REACT_APP_BASEURL;

  return (
    <div className="page">
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <BreadCrumb title="Dashboard" crumb="Sermon" />
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">Create Sermon</h3>
                    </div>
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          coverimg: undefined,
                          sermonfile: undefined,
                          title: "",
                          sermonType: "",
                          preacher: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
                          setSubmitting(true);
                          // alert(
                          //   JSON.stringify(
                          //     {
                          //       fileName: values.sermonfile.name,
                          //       type: values.sermonfile.type,
                          //     },
                          //     null,
                          //     2
                          //   )
                          // );
                          axios({
                            method: "POST",
                            url: `${API_URL}/sermon`,
                            data: {
                              id: uuid(),
                              sermontitle: values.title,
                              coverimg: values.coverimg.name,
                              sermontype: values.sermonType,
                              preacher: values.preacher,
                              preview: values.sermonfile.name,
                              sermonfile: values.sermonfile.name,
                              created: Date.now(),
                            },
                          })
                            .then((res) => {
                              resetForm();
                              setSubmitting(false);
                              toast.success("Sermon Created Successfully", {
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
                        }) => (
                            <form
                              onSubmit={handleSubmit}
                              encType="multipart/form-data"
                            >

                              <div className="row">

                                <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                  <div className="form-group">
                                    <FormControl className={classes.formControl}>
                                      <TextField
                                        fullWidth
                                        id="title"
                                        name="title"
                                        label="Sermon Title"
                                        margin="normal"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.title && touched.title}
                                        helperText={(errors.title && touched.title) && errors.title}
                                      />
                                    </FormControl>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
                                  <div className="form-group ">
                                    <FormControl className={classes.formControl}>
                                      <InputLabel htmlFor="sermontype">Sermon Type</InputLabel>
                                      <Select
                                        native
                                        fullWidth
                                        value={values.sermonType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='sermonType'
                                        id='sermontype'
                                        error={errors.sermonType && touched.sermonType}>
                                        <option value=""></option>
                                        <option value={"audio"}>Audio</option>
                                        <option value={"video"}>Video</option>
                                      </Select>
                                    </FormControl>

                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
                                  <div className="form-group ">
                                    <TextField
                                      fullWidth
                                      id="preacher"
                                      name="preacher"
                                      label="Sermon By"
                                      margin="normal"
                                      value={values.preacher}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={errors.preacher && touched.preacher}
                                      helperText={(errors.preacher && touched.preacher) && errors.preacher}
                                    >

                                    </TextField>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="form-control-label">
                                  Sermon Cover Image
                                  </label>
                                <input
                                  id="coverimg"
                                  name="coverimg"
                                  type="file"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "coverimg",
                                      event.currentTarget.files[0]
                                    );
                                  }}
                                  className={
                                    touched.coverimg && errors.coverimg
                                      ? "  form-control-file  is-invalid"
                                      : "form-control-file"
                                  }
                                  onBlur={handleBlur}
                                />
                                <FormError
                                  touched={touched.coverimg}
                                  message={errors.coverimg}
                                />
                              </div>
                              <div className="form-group">
                                <label className="form-control-label">
                                  {values.sermonType ? "Choose" + " " + values.sermonType + " " + "File" : "Choose File"}
                                </label>
                                <input
                                  id="sermonfile"
                                  name="sermonfile"
                                  type="file"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "sermonfile",
                                      event.currentTarget.files[0]
                                    );
                                  }}
                                  className={
                                    touched.sermonfile && errors.sermonfile
                                      ? "  form-control-file  is-invalid"
                                      : "form-control-file"
                                  }
                                  onBlur={handleBlur}
                                />
                                <FormError
                                  touched={touched.sermonfile}
                                  message={errors.sermonfile}
                                />
                              </div>

                              <div className="form-group">
                                <Button disabled={isSubmitting} color="primary" type="submit" variant="contained">Add Sermon</Button>
                              </div>
                            </form>
                          )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </section>
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );
};

export default CreateSermon;









