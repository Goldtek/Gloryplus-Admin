import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
     margin: 20

    },
  }));

/**
 * 
 * @param {*} severity 'error' | 'warning' | 'info' | 'success'
 * @param {*} variant 'filled' | 'outlined' 
 * 
 */
const CustomAlert = ({ message, variant, severity }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Alert variant={variant} severity={severity}>
               {message}
            </Alert>
        </Card>
    );
}

export default CustomAlert;