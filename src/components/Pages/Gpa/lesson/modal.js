import React from 'react'
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
import "components/custom/Livestream/node_modules/react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import FormError from "../formError"
import Button from '@material-ui/core/Button';
const createLessonModal = () => {
    return (
        <React.Fragment>
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
                <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>

            </div>
            {/* CREATE LESSON MODAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        </React.Fragment>
    )
}

export default createLessonModal
