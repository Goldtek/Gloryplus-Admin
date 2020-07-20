import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import Helmet from "react-helmet";
import { AssigmentCards } from "../cards/assigmentCard";
import { connect } from "react-redux";
import { fetchAssignments } from "Redux/actions/assignmentActions";
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
import { LoaderCard, InfoCard } from "../../Helpers"

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::
const API_URL = process.env.REACT_APP_BASEURL;

const CreateAssignment = ({ fetchAssignments, assigmentData, match }) => {

    const [lessonId, setLessonId] = useState("")

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setLessonId(match.params.id)
        document.getElementById("gpa").classList.add("active");
        fetchAssignments()
    }, [fetchAssignments, match.params.id]);

    let history = useHistory()

    const assignment = assigmentData.assignmentItems.filter(item => item.lessonId === lessonId);
    return (
        <div className="page">
            <Helmet>
                <title>Create Assignment</title>
            </Helmet>
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <SideBar />

                <div className="content-inner">
                    <BreadCrumb
                        title="GPA"
                        crumb="Create Lesson"
                    />

                    <div className="container-fluid">
                        <section>
                            <div className="card">
                                <div className="card-header">

                                    {/* <CreateLessonModal btnTitle="Create Lesson" courseTitle={courseTitle} courseId={courseId} /> */}

                                    {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
                                    <div>
                                        <ToastContainer />
                                        <Button onClick={handleClickOpen} variant="contained" color="primary">Create Assignment</Button>
                                        <Dialog
                                            fullWidth={true}
                                            maxWidth={"md"}
                                            disableBackdropClick
                                            disableEscapeKeyDown
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="form-dialog-title"
                                        >
                                            <DialogTitle id="form-dialog-title">Create Assignment</DialogTitle>

                                            <Formik
                                                initialValues={{ question: "", optionA: "", optionB: "", optionC: "", optionD: "", answer: "" }}
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
                                                        url: `${API_URL}/assigments`,
                                                        data: {
                                                            id: uuid(),
                                                            lessonId: lessonId,
                                                            question: values.question,
                                                            optionA: values.optionA,
                                                            optionB: values.optionB,
                                                            optionC: values.optionC,
                                                            optionD: values.optionD,
                                                            answer: values.answer,
                                                        },
                                                    })
                                                        .then((response) => {
                                                            toast.success(`Assigment Added!`, {
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
                                                            fetchAssignments()

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
                                                    question: Yup.string().required('required'),
                                                    optionA: Yup.string().required('required'),
                                                    optionB: Yup.string().required('required'),
                                                    optionC: Yup.string().required('required'),
                                                    optionD: Yup.string().required("required"),
                                                    answer: Yup.string().required("required"),

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
                                                                <Grid container spacing={3}>
                                                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                                                        <TextField
                                                                            fullWidth
                                                                            multiline
                                                                            id="question"
                                                                            name="question"
                                                                            label="Question"
                                                                            margin="normal"
                                                                            value={values.question}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={errors.question && touched.question}
                                                                            helperText={(errors.question && touched.question) && errors.question}
                                                                        />

                                                                    </Grid>
                                                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                                                        <TextField
                                                                            fullWidth
                                                                            multiline
                                                                            id="optionA"
                                                                            name="optionA"
                                                                            label="Option A"
                                                                            margin="normal"
                                                                            value={values.optionA}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={errors.optionA && touched.optionA}
                                                                            helperText={(errors.optionA && touched.optionA) && errors.optionA}
                                                                        />

                                                                    </Grid>
                                                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                                                        <TextField
                                                                            fullWidth
                                                                            multiline
                                                                            margin="dense"
                                                                            id="optionB"
                                                                            name="optionB"
                                                                            label="Option B"
                                                                            value={values.optionB}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={errors.optionB && touched.optionB}
                                                                            helperText={(errors.optionB && touched.optionB) && errors.optionB}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                                                        <TextField
                                                                            fullWidth
                                                                            multiline
                                                                            rowsMax="4"
                                                                            margin="dense"
                                                                            id="optionC"
                                                                            label="Option C"
                                                                            name="optionC"
                                                                            value={values.optionC}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={errors.optionC && touched.optionC}
                                                                            helperText={(errors.optionC && touched.optionC) && errors.optionC}

                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                                                        <TextField
                                                                            fullWidth
                                                                            multiline
                                                                            rowsMax="4"
                                                                            margin="dense"
                                                                            id="optionD"
                                                                            label="Option D"
                                                                            name="optionD"
                                                                            value={values.optionD}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={errors.optionD && touched.optionD}
                                                                            helperText={(errors.optionD && touched.optionD) && errors.optionD} />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                                                        <TextField
                                                                            fullWidth
                                                                            select
                                                                            rowsMax="4"
                                                                            margin="dense"
                                                                            id="answer"
                                                                            label="Correct Answer "
                                                                            name="answer"
                                                                            value={values.answer}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={errors.answer && touched.answer}
                                                                            helperText={(errors.answer && touched.C) && errors.answer}>
                                                                            <MenuItem value="A">A</MenuItem>
                                                                            <MenuItem value="B">B</MenuItem>
                                                                            <MenuItem value="C">C</MenuItem>
                                                                            <MenuItem value="D">D</MenuItem>

                                                                        </TextField>
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
                                        <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>

                                    </div>
                                    {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
                                </div>
                            </div>
                            <div className="row">

                                {assigmentData.loading ? (
                                    <LoaderCard />

                                ) : assigmentData.error ? (
                                    <InfoCard error={assigmentData.error + " " + "Please check your network connection"} />
                                ) : (
                                            <Fragment>
                                                {assignment.length ? (
                                                    assignment.map((assignment) => (

                                                        <AssigmentCards
                                                            key={assignment.id}
                                                            question={assignment.question}
                                                            created={assignment.created}
                                                        // id={lessonCourse.id}
                                                        />
                                                    ))

                                                ) : <InfoCard info="No assignment to display, please create new assignment" />}

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
    assigmentData: state.assignments
});

export default connect(mapStateToProps, { fetchAssignments })(CreateAssignment)
