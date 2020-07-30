import React, { useEffect } from "react";
import axios from "axios";
// import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import FormError from "./formError";
import { Header, SideBar } from "../../Partials";
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

const CreateSermon = () => {
  const classes = useStyles();
  useEffect(() => {
    // document.getElementById("sermon").classList.add("active");
  });

  let history = useHistory()

  const IMAGE_SIZE = 160 * 1024;
  const SUPPORTED_IMG_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
  ];
  const FILE_SIZE = 300000 * 1024;
  const SUPPORTED_FILE_FORMATS = [
    "video/mp4",
    "audio/mp3",
    "audio/mpeg",
  ];

  const validationSchema = Yup.object().shape({
    coverimg: Yup
      .mixed()
      .required("cover image is required")
      .test(
        "fileSize",
        "File too large",
        value => value && value.size <= IMAGE_SIZE
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
        value => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Only mp3/mp4 files are supported",
        value => value && SUPPORTED_FILE_FORMATS.includes(value.type)
      ),
    title: Yup.string().required("sermon title is required"),
    sermonType: Yup.string().required("sermon type required"),
    preacher: Yup.string().required("sermon preacher is required"),
  });

  const API_URL = process.env.REACT_APP_BASEURL;

  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <div className="page-content">
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="#">Create Sermon</a></li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button variant="contained" href="dashboard/sermon/view" color="primary">
                    View Sermon
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

      </div>
    </React.Fragment>
  );
};

export default CreateSermon;









