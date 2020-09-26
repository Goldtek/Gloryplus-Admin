import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
// import { Formik, Field } from "formik";
const Bio = () => {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-14 col-sm-12 col-xs-12">   <TextField
                fullWidth
                id="FirsTName"
                label="First Name"
                // onChange={handleChange}
                // value={values.coursetitle}
                // onBlur={handleBlur}
                margin="normal"
                name="firstName"
            // error={errors.coursetitle && touched.coursetitle}
            // helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
            />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-14 col-sm-12 col-xs-12">
                <TextField
                    fullWidth
                    id="LastName"
                    label="Last Name"
                    // onChange={handleChange}
                    // value={values.coursetitle}
                    // onBlur={handleBlur}
                    margin="normal"
                    name="coursetitle"
                // error={errors.coursetitle && touched.coursetitle}
                // helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
                />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-14 col-sm-12 col-xs-12">   <TextField
                fullWidth
                id="CourseName"
                label="Course Name"
                // onChange={handleChange}
                // value={values.coursetitle}
                // onBlur={handleBlur}
                margin="normal"
                name="coursetitle"
            // error={errors.coursetitle && touched.coursetitle}
            // helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
            />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-14 col-sm-12 col-xs-12">   <TextField
                fullWidth
                id="CourseName"
                label="Course Name"
                // onChange={handleChange}
                // value={values.coursetitle}
                // onBlur={handleBlur}
                margin="normal"
                name="coursetitle"
            // error={errors.coursetitle && touched.coursetitle}
            // helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
            />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-14 col-sm-12 col-xs-12">   <TextField
                fullWidth
                id="CourseName"
                label="Course Name"
                // onChange={handleChange}
                // value={values.coursetitle}
                // onBlur={handleBlur}
                margin="normal"
                name="coursetitle"
            // error={errors.coursetitle && touched.coursetitle}
            // helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
            />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-14 col-sm-12 col-xs-12">   <TextField
                fullWidth
                id="CourseName"
                label="Course Name"
                // onChange={handleChange}
                // value={values.coursetitle}
                // onBlur={handleBlur}
                margin="normal"
                name="coursetitle"
            // error={errors.coursetitle && touched.coursetitle}
            // helperText={(errors.coursetitle && touched.coursetitle) && errors.coursetitle}
            />
            </div>
            <Button variant="contained" color="primary" size="small" >
                Update
      </Button>

        </div>
    )
}

export default Bio
