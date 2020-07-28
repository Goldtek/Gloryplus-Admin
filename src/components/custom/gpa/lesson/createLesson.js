import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import Helmet from "react-helmet";
import { Card } from "../cards/lessonCard";
import { connect } from "react-redux";
import { fetchLessonLists } from "../../../../Redux/actions/lessonActions";
import { Header, SideBar, BreadCrumb, Footer } from "../../../Partials";
// import PuffLoader from "react-spinners/PuffLoader";
import uuid from "react-uuid";
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import FormError from "../formError"
import { LoaderCard, InfoCard } from "../../Helpers"
import "react-toastify/dist/ReactToastify.css";
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::
const API_URL = process.env.REACT_APP_BASEURL;

const CreateLesson = ({ fetchLessonLists, match, lessonData }) => {

  const [courseId, setCourseId] = useState("")
  const [courseTitle, setcourseTitle] = useState("")

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setCourseId(match.params.id);
    setcourseTitle(match.params.title)
    // document.getElementById("gpa").classList.add("active");
    fetchLessonLists()
  }, [fetchLessonLists, match.params.id, match.params.title]);

  let history = useHistory()

  //filter lesson out

  const lessons = lessonData.lessonItems.filter(el => el.courseid === courseId);
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <div class="page-content">

        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h2 class="page-title">Create Lesson</h2>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Button onClick={handleClickOpen} variant="contained" color="primary">Create Lesson</Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>
                </div>
              </div>
            </div>
          </div>
          {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
          <div>
            <ToastContainer />

            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">{courseTitle}</DialogTitle>

              <Formik
                initialValues={{ lessonNum: "", title: "", file: "", instruction: "" }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  // alert(
                  //   JSON.stringify(
                  //     {
                  //       file: values.file.name,

                  //     },
                  //     null,
                  //     2
                  //   )
                  // );
                  axios({
                    method: "POST",
                    url: `${API_URL}/lesson`,
                    data: {
                      id: uuid(),
                      lessonNumber: values.lessonNum,
                      title: values.title,
                      video: values.file.name,
                      instruction: values.instruction,
                      courseid: courseId,
                      created: Date.now(),
                    },
                  })
                    .then((response) => {
                      toast.success(`Message Sent!`, {
                        position: "top-right",
                        autoClose: 15000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });

                      resetForm();
                      handleClose()
                      fetchLessonLists()

                    })
                    .catch((error) => {
                      toast.error(`${error}`, {
                        position: "top-right",
                        autoClose: 15000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                      resetForm();
                    });
                }}

                validationSchema={Yup.object().shape({
                  lessonNum: Yup.string().required('Required'),
                  title: Yup.string().required('Required'),
                  file: Yup.string().required('Required'),
                  instruction: Yup.string().nullable(),

                })}>

                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue

                  } = props;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <DialogContent>
                        <DialogContentText>
                          Please ensure all input values are cross checked before submitting the form
                  </DialogContentText>
                        <Grid >
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              fullWidth
                              id="lessonNum"
                              name="lessonNum"
                              select
                              label="Select Lesson"
                              margin="normal"
                              value={values.lessonNum}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={errors.lessonNum && touched.lessonNum}
                              helperText={(errors.lessonNum && touched.lessonNum) && errors.lessonNum}
                            >
                              <MenuItem value="1">Lesson 1</MenuItem>
                              <MenuItem value="2">Lesson 2</MenuItem>
                              <MenuItem value="3">Lesson 3</MenuItem>
                              <MenuItem value="4">Lesson 4</MenuItem>
                              <MenuItem value="5">Lesson 5</MenuItem>
                              <MenuItem value="6">Lesson 6</MenuItem>
                              <MenuItem value="7">Lesson 7</MenuItem>
                              <MenuItem value="8">Lesson 8</MenuItem>
                              <MenuItem value="9">Lesson 9</MenuItem>
                              <MenuItem value="10">Lesson 10</MenuItem>
                              <MenuItem value="11">Lesson 11</MenuItem>
                              <MenuItem value="12">Lesson 12</MenuItem>
                              <MenuItem value="13">Lesson 13</MenuItem>
                              <MenuItem value="14">Lesson 14</MenuItem>
                              <MenuItem value="15">Lesson 15</MenuItem>
                              <MenuItem value="16">Lesson 16</MenuItem>
                              <MenuItem value="17">Lesson 17</MenuItem>
                              <MenuItem value="18">Lesson 18</MenuItem>
                              <MenuItem value="19">Lesson 19</MenuItem>
                              <MenuItem value="20">Lesson 20</MenuItem>

                            </TextField>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              fullWidth
                              margin="dense"
                              id="LessonTitle"
                              name="title"
                              label="Lesson Title"
                              value={values.title}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={errors.title && touched.title}
                              helperText={(errors.title && touched.title) && errors.title}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className="form-group">
                              <label className="form-control-label">
                                Event Image
                                </label>
                              <input
                                id="file"
                                name="file"
                                type="file"
                                onChange={(event) => {
                                  setFieldValue(
                                    "file",
                                    event.currentTarget.files[0]
                                  );
                                }}
                                className={
                                  touched.file && errors.file
                                    ? "  form-control-file  is-invalid"
                                    : "form-control-file"
                                }
                                onBlur={handleBlur}
                              />
                              <FormError
                                touched={touched.file}
                                message={errors.file}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              fullWidth
                              multiline
                              rowsMax="4"
                              margin="dense"
                              id="instruction"
                              label="Instruction optional"
                              name="instruction"
                              value={values.instruction}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>
                        </Grid>
                      </DialogContent>
                      <DialogActions>
                        <Button type="reset" onClick={handleClose} color="secondary" variant="contained">
                          Cancel
                            </Button>
                        <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
                          Submit
                            </Button>

                      </DialogActions>
                    </Form>
                  );
                }}
              </Formik>

            </Dialog>
            {" "}


          </div>
          {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
          <div class="row">
            {lessonData.loading ? (
              <LoaderCard />

            ) : lessonData.error ? (
              <InfoCard error={lessonData.error} />
            ) : (
                  <Fragment>
                    {lessons.length ? (
                      lessons.filter(el => el.courseid === courseId).map((lessonCourse) => (
                        <Card
                          key={lessonCourse.id}
                          title={lessonCourse.title}
                          lessonId={lessonCourse.id}
                          created={lessonCourse.created}
                          id={lessonCourse.id}
                        />
                      ))

                    ) :
                      <InfoCard info="No Lesson available, please create new lesson" />
                    }

                  </Fragment>
                )}
          </div>
        </div>

      </div>

    </React.Fragment>
  );
};


const mapStateToProps = (state) => ({
  lessonData: state.lessons
});
export default connect(mapStateToProps, { fetchLessonLists })(CreateLesson);
