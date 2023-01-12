import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb, firestore } from "../../partials";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { handleError } from "../../util";


const ViewCell = () => {
    const [cells, setCells] = useState([]);

    useEffect(()=> {
         document.getElementById("cell").classList.add("active");
         fetchCells();
    },[]);

    const fetchCells = async () => {
        await firestore.collection('cells')
        .onSnapshot((querySnapshot) => {
          const results = [];
          querySnapshot.forEach((doc) => {
            results.push(doc.data());
          });
          // load this in redux
          setCells(results);
        }, handleError);
    }

        return (
            <React.Fragment>
                <Helmet><title>View Cell Locations</title></Helmet>
                <Header />
            </React.Fragment>
        );

}


export default ViewCell;
