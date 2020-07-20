import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Formik, Form } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { fetchLessonLists } from "Redux/actions/lessonActions";
// import Thumb from "../thumb"
const API_URL = process.env.REACT_APP_BASEURL;

const EditCourse = ({ title, id }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <div>
            <ToastContainer />
            <Button onClick={handleClickOpen} size="small" color="primary">Edit Course</Button>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>

                <Formik
                    initialValues={{ lessonNum: "", title: "", file: "", instruction: "" }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        axios({
                            method: "POST",
                            url: `${API_URL}/lesson`,
                            data: {

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
                            handleSubmit

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
                                                id="CourseName"
                                                label="Course Name"
                                                onChange={handleChange}
                                                value={values.coursetitle}
                                                onBlur={handleBlur}
                                                margin="normal"
                                                name="coursetitle"
                                                defaultValue={title}
                                                error={errors.coursetitle && touched.coursetitle}
                                                helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <TextField
                                                fullWidth
                                                margin="dense"
                                                id="file"
                                                label="Course Image"
                                                type="file"
                                                name="file"
                                                value={values.file}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.file && touched.file}
                                                helperText={(errors.file && touched.file) && errors.file}

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
        </div>

    );
};

export default EditCourse;
