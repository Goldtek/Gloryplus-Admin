import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import uuid from "react-uuid";
import FormError from "../members/formError";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import { handleError } from '../../util';
import "../members/form.css";
import "../members/users.css"
import MemberList from './TithersList';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
  gender: Yup.string().required("gender is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.number("must be a phone number").required("phone is required"),
  cell: Yup.string().required("cell is required"),
  city: Yup.string().required("city is required "),
  state: Yup.string().required("state is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function ViewTithes() {
  const [members, setMember] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   // document.getElementById("members").classList.add("active");
  });

  
  return (
    <div className="page">
      <Helmet>
        <title>Gloryplus Tithers Records</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />
        <div className="content-inner">
          <PageHeaderTitle title="Members" currpg="Members" />
          <div className="container-fluid mt-3 mb-4">
            <MemberList />
          </div>
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ViewTithes;
