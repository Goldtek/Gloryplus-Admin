import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import { Card } from "./lessonCard";
import { connect } from "react-redux";
import { fetchLessonLists } from "../../../redux/actions/lessonActions";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import PuffLoader from "react-spinners/PuffLoader";
// import CreateLessonModal from "./modal/createLessonModal"
import { Alert, AlertTitle } from '@material-ui/lab';
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
import { Formik, Form, Field } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

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
    document.getElementById("gpa").classList.add("active");
    fetchLessonLists()
  }, [fetchLessonLists]);


  return (
    <div className="page">
      <Helmet>
        <title>Create Lesson</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle
            title="GPA"
            currpg="Create Lesson"
          />

          <div className="container-fluid">
            {/* CREATE LESSON MODAL */}
            {/* <!-- end row--> */}
            <section>
              <div className="card">
                <div className="card-header">

                  {/* <CreateLessonModal btnTitle="Create Lesson" courseTitle={courseTitle} courseId={courseId} /> */}

                  {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
                  <div>
                    <ToastContainer />
                    <Button onClick={handleClickOpen} variant="contained" color="primary">Create Lesson</Button>
                    <Dialog
                      disableBackdropClick
                      disableEscapeKeyDown
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">{courseTitle}</DialogTitle>

                      <Formik
                        initialValues={{ lessonNum: "", title: "", file: null, instruction: "" }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                          alert(
                            JSON.stringify(
                              {
                                file: values.file.name,

                              },
                              null,
                              2
                            )
                          );
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
                                    <TextField
                                      fullWidth
                                      margin="dense"
                                      id="file"
                                      label="Lesson Video"
                                      type="file"
                                      name="file"
                                      value={values.file}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={errors.file && touched.file}
                                      helperText={(errors.file && touched.file) && errors.file}

                                    />
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
                                    {/* <input
                        type="hidden"
                        margin="dense"
                        id="courseId"
                        label="courseId"
                        name="courseId"
                        defaultValue={courseId}
                        value={courseId}
                        onChange={handleChange}
                        onBlur={handleBlur}


                      /> */}

                                  </Grid>
                                </Grid>
                              </DialogContent>
                              <DialogActions>
                                <Button type="reset" onClick={handleClose} type="submit" color="secondary" variant="contained">
                                  Cancel
        </Button>
                                <Button type="submit" color="primary" variant="contained">
                                  Submit
        </Button>

                              </DialogActions>
                            </Form>
                          );
                        }}
                      </Formik>

                    </Dialog>
                  </div>
                  {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
                </div>
              </div>
              <div className="row">

                {lessonData.loading ? (
                  <div className="col-md-4 col-lg-4 col-sm-12" style={{ margin: "0 auto" }}>
                    <div className="sweet-loading">
                      <PuffLoader
                        size={60}
                        color={"#123abc"}
                        loading={lessonData.loading}
                      />
                      Please Wait...
                      </div>
                  </div>

                ) : lessonData.error ? (
                  <h2>{lessonData.error}</h2>
                ) : (
                      <Fragment>
                        {lessonData.lessonItems.length ? (
                          lessonData.lessonItems.filter(el => el.courseid === courseId).map((lessonCourse) => (

                            <Card
                              title={lessonCourse.title}
                              lessonId={lessonCourse.id}
                              created={lessonCourse.created}
                            />
                          ))

                        ) : <Alert severity="info">
                            <AlertTitle>Info</AlertTitle> <strong>There is no available courses.. Please create a new course</strong></Alert>}

                      </Fragment>
                    )}



              </div>
            </section>
            {/* <!-- end row--> */}
          </div>
          <Footer />
        </div>
      </div>
    </div >
  );
};

const mapStateToProps = (state) => ({
  lessonData: state.lessons
});
export default connect(mapStateToProps, { fetchLessonLists })(CreateLesson);
