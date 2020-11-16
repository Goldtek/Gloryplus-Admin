import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import uuid from "react-uuid";
import FormError from "./formError";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import "./form.css";
import "./users.css"

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

function Members() {
  useEffect(() => {
    document.getElementById("members").classList.add("active");
  });
  return (
    <div className="page">
      <Helmet>
        <title>Gloryplus members</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="First Timer" currpg="Members" />
          {/* FIRST TIMER CONTENT */}
          {/* <!-- Forms Section--> */}
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        Members
                      </h3>
                    </div>
                <div class="container mt-3 mb-4">
                    <div class="col-lg-12 mt-4 mt-lg-0">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                                    <table class="table manage-candidates-top mb-0">
                                        <thead>
                                        <tr>
                                            <th>Candidate Name</th>
                                            <th class="text-center">Status</th>
                                            <th class="action text-right">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="candidates-list">
                                                <td class="title">
                                                <div class="thumb">
                                                    <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                                </div>
                                                <div class="candidate-list-details">
                                                    <div class="candidate-list-info">
                                                    <div class="candidate-list-title">
                                                        <h5 class="mb-0"><a href="#">Brooke Kelly</a></h5>
                                                    </div>
                                                    <div class="candidate-list-option">
                                                        <ul class="list-unstyled">
                                                        <li><i class="fas fa-filter pr-1"></i>Information Technology</li>
                                                        <li><i class="fas fa-map-marker-alt pr-1"></i>Rolling Meadows, IL 60008</li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                                </td>
                                                <td class="candidate-list-favourite-time text-center">
                                                <a class="candidate-list-favourite order-2 text-danger" href="#"><i class="fas fa-heart"></i></a>
                                                <span class="candidate-list-time order-1">Shortlisted</span>
                                                </td>
                                                <td>
                                                <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                                    <li><a href="#" class="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i class="far fa-eye"></i></a></li>
                                                    <li><a href="#" class="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                                    <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                                </ul>
                                                </td>
                                            </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          {/* <!-- Page Footer--> */}
          {/* FIRST TIMER CONTENT */}
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
      <ToastContainer />
    </div>
  );
}

export default Members;
