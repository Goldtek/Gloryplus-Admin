import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header, Sidebar } from "../../partials";
import Content from "../main";

const Livestream = () => {
  //DECLARE USE STATE FOR OUR VARIABLES
  const [playerSource, setplaysource] = useState("");
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const [infostate, setInfo] = useState(false);

  // LIVE STREAM TOGGLE BUTTON ########
  const toggle = (e) => {
    setChecked(!checked);
    setDisabled(!disabled);
  };
  // LIVE STREAM TOGGLE BUTTON ########

  // USE-EFFECT TO ADD CLASS TO BODY TAG ON COMPONENT MOUNT ######
  useEffect(() => {
    document.getElementById("page-body").classList.add("theme-red");
  });

  // USE-EFFECT TO ADD CLASS TO BODY TAG ON COMPONENT MOUNT ######

  // SET THE ID INPUT INOT THE SOURCE PLAYER FOR THE IFRAME ######
  //   const handleChangePlaysource = (e) => {
  //     setplaysource(e.target.value);
  //   };
  // SET THE ID INPUT INOT THE SOURCE PLAYER FOR THE IFRAME ######

  //HANDLE THE NEW STREAMING SCHEDULE ##########
  const handleSchedule = (e) => {
    e.preventDefault();
    const schedulstreaming = serializeForm(e.target, { hash: true });
    console.log(schedulstreaming);
    axios
      .post("http://localhost:3000/schedule", {
        scheduleTime: schedulstreaming,
      })
      .then((res) => {
        toast.success("Scheduled Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  //HANDLE THE NEW STREAMING SCHEDULE ##########

  const handleStreaming = (e) => {
    e.preventDefault();
    const streamingValues = serializeForm(e.target, { hash: true });
    axios
      .patch("http://localhost:3000/livestream/", {
        stream: streamingValues,
      })
      .then((res) => {
        setplaysource(res.data.stream.streamid);
        toast.success("Updated Streaming", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <Fragment>
      <Helmet>
        <title>LiveStream video upload</title>
      </Helmet>
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <Sidebar />
      {/* CLOSE SIDE BAR */}

      {/* CONTENT */}
      <Content title="">
        <ToastContainer />
        {/* COURSE INFORMATION  */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      {checked ? (
                        <strong className="font-bold col-green">
                          LIVESTREAM
                        </strong>
                      ) : (
                        <strong className="font-bold col-pink">
                          LIVESTREAM
                        </strong>
                      )}
                    </h2>
                    <div className="demo-switch">
                      <div className="switch">
                        <label>
                          OFF
                          <input
                            type="checkbox"
                            onClick={toggle}
                            onChange={(event) => {
                              setChecked(event.target.checked);
                            }}
                            value={checked}
                          />
                          <span className="lever"></span>ON
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {checked ? (
          <div className="body">
            <div id="" className="list-unstyled row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="embed-responsive embed-responsive-16by9 card">
                  <iframe
                    id="iframeid"
                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fgloryplusintl%2Fposts%2F${playerSource}&show_text=true`}
                    width="100%"
                    height="100%"
                    className="embed-responsive-item"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    allowFullScreen={true}
                    title="live streaming"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="body">
            <div className="row">
              <div className="col-xs-12 col-md-12 ">
                <Link to="#!" className="thumbnail live-div">
                  <img
                    src="images/livestream.png"
                    className="img-responsive"
                    alt="live stream"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* COURSE INFORMATION  */}
        {checked ? (
          // <!--Bootstrap Date Picker -->
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    <strong>ENTER LIVESTREAM ID TO START STREAMING</strong>
                    <small className="font-bold col-pink">
                      PLEASE ENSURE TO PASTE THE RIGHT STREAMING ID!
                    </small>
                  </h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <form onSubmit={handleStreaming}>
                      <div className="col-xs-12 col-md-12">
                        {/* <h2 className="card-inside-title">INPUT LIVESTREAM ID</h2> */}
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Livestream ID here..."
                              name="streamid"
                              required
                            />
                            <input value={checked} name="check" type="hidden" />
                          </div>
                        </div>
                        <div className="button-demo">
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Fragment>
            <div className="body">
              <div className="alert alert-info">
                <strong>Heads up!</strong> Toggle the button above to go live
              </div>
            </div>
          </Fragment>
        )}
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>SCHEDULE LIVE STREAMING</strong>
                  {checked ? (
                    <small className="font-bold col-pink">
                      TO SCHEDULE FOR NEW STREAMING EVENT PLEASE TURN OFF LIVE
                      STREAMING !
                    </small>
                  ) : null}
                </h2>
              </div>
              <div className="body">
                <div className="row clearfix">
                  <div className="col-xs-12 col-md-12">
                    {/* <h2 className="card-inside-title">Choose Next Event Date & Time</h2> */}
                    <form onSubmit={handleSchedule}>
                      <div className="col-sm-12  col-xs-12 col-md-4 col-lg-4">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="datepicker form-control"
                              placeholder="Please choose a date..."
                              disabled={disabled}
                              name="date"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12  col-xs-12 col-md-4 col-lg-4">
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              className="timepicker form-control"
                              placeholder="Please choose a time..."
                              disabled={disabled}
                              name="time"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <input value={checked} name="check" type="hidden" />
                      <button
                        type="submit"
                        className="btn bg-primary waves-effect"
                      >
                        <strong>SCHEDULE LIVE STREAMING</strong>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      {/* CLOSE CONTENT */}
    </Fragment>
  );
};

export default Livestream;
