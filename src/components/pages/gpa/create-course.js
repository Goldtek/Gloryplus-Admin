import React, { Fragment, useEffect } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Link } from "react-router-dom";

import { Header, Sidebar } from "../../partials";
import Content from "../main";
import { Helmet } from "react-helmet";
import "./gpa.css";
function CreateCourse() {
  useEffect(() => {
    document.getElementById("page-body").classList.add("theme-red");
  });
  return (
    <Fragment>
      <Helmet>
        <title>create course</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <Sidebar />
      {/* CLOSE SIDE BAR */}

      <Content title="">
        {/* COURSE INFORMATION  */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>
                  Enter Course Information
                  <small className="font-bold col-pink">
                    All Fields Are Required*
                  </small>
                </h2>
              </div>
              <div className="body">
                <div className="row clearfix">
                  <div className="col-md-4">
                    <p>{/* <b>Course Title</b> */}</p>
                    <div className="input-group">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Course Title"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p></p>
                    <div className="input-group">
                      <select className="form-control show-tick">
                        <option value="0">Select Course Level</option>
                        <option value="1">GPA 101: THE NEW BIRTH</option>
                        <option value="2">
                          GPA 102 ASSURANCE OF SALVATION
                        </option>
                        <option value="3">GPA 103 CHRISTIAN DEVOTION</option>
                        <option value="4">GPA 104 THE STUDY OF THE WORD</option>
                        <option value="5">GPA 105 HOLYGHOST BAPTISM</option>
                        <option value="6">GPA 106 SOUL WINNING</option>
                        <option value="7">GPA 107 CHRISTIAN FELLOWSHIP</option>
                        <option value="8">GPA 108 CHRISTIAN STEWARDSHIP</option>
                        <option value="9">GPA 109 WATER BAPTISM</option>
                        <option value="10">
                          GPA 110 UNDERSTANDING DELIVERANCE
                        </option>
                        <option value="11">
                          GPA 110 APPLICATION/PRATICAL STEP TO DELIVERANCE
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p></p>
                    <div className="input-group">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* COURSE INFORMATION  */}
        {/* <!-- CKEditor --> */}
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>
                  Course Description
                  <small className="font-bold col-pink">
                    While creating the course please ensure to select the course
                    level and fill all the required fields*
                  </small>
                </h2>
              </div>

              {/* TEXT AREA  ############*/}
              <div className="body"></div>
              {/* TEXT AREA ############*/}
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>
                  Upload video
                  <small className="font-bold col-pink">
                    Please ensure the video is not more than 20mb
                  </small>
                </h2>
              </div>
              {/* IMAGE UPLOAD  ############*/}
              <div className="container center">
                <form
                  name="upload"
                  method="post"
                  action="#"
                  encType="multipart/form-data"
                  acceptCharset="utf-8"
                >
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 center">
                      <div className="btn-container">
                        <h1 className="imgupload">
                          <i className="fa fa-file-image-o"></i>
                        </h1>
                        <h1 className="imgupload ok">
                          <i className="fa fa-check"></i>
                        </h1>
                        <h1 className="imgupload stop">
                          <i className="fa fa-times"></i>
                        </h1>

                        {/* <p id="namefile">Only pics allowed! (jpg,jpeg,bmp,png)</p> */}

                        <button
                          type="button"
                          id="btnup"
                          className="btn btn-primary btn-lg"
                        >
                          Browse for your pic!
                        </button>

                        <input type="file" name="fileup" id="fileup" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>{" "}
              {/* IMAGE UPLOAD ############*/}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>Submit Course</h2>
              </div>
              <div className="body">
                <div className="button-demo">
                  <button
                    type="button"
                    className="btn btn-primary waves-effect btn-md"
                  >
                    SUBMIT
                  </button>

                  <button type="reset" className="btn btn-info waves-effect">
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      {/* CONTENT */}

      {/* CLOSE CONTENT */}
    </Fragment>
  );
}

export default CreateCourse;
