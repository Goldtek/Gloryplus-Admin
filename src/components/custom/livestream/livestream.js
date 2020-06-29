import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import Switch from '@material-ui/core/Switch';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import { Wrapper } from '../../components';
import Grid from '@material-ui/core/Grid';


const Livestream = () => {
  useEffect(() => {
    document.getElementById("livestream").classList.add("active");
  });
  //DECLARE USE STATE FOR OUR VARIABLES
  const [playerSource, setplaysource] = useState("");
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const [infostate, setInfo] = useState(false);

  // LIVE STREAM TOGGLE BUTTON ########
  // const toggle = (e) => {
  //   e.preventDefault();
  //   setChecked(!checked);
  //   setDisabled(!disabled);
  // };
  //HANDLE THE NEW STREAMING SCHEDULE ##########
  const handleSchedule = (e) => {
    e.preventDefault();
    const scheduleObj = serializeForm(e.target, { hash: true });
    console.log(scheduleObj)
    axios
      .post("http://localhost:5000/schedule", scheduleObj)
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
    const streamObj = serializeForm(e.target, { hash: true });

    axios
      .post("http://localhost:5000/livestream/", {
        stream: streamObj,
      })
      .then((res) => {
        setplaysource(res.data.stream.streamid);
        // console.log(res.data);
        toast.success("Success!", {
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

  // const changedCLick = (checked) => {
  //   axios
  //     .patch("http://localhost:3000/livestream/", {
  //       check: checked,
  //     })
  //     .then((res) => {
  //       toast.success("Updated Checked", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     })
  //     .catch((error) => {
  //       toast.error(`${error}`, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     });
  // };
  return (
    <div className="page">
      {/* HEADER PART */}
      <Header />
      {/* CLOSE HEADER PART */}

      {/* SIDER BAR PART */}
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="Live Stream" currpg="Live Stream" />

          {/* LIVE STREAM CONTENT ##################### */}
          {/* <!-- Inline Form--> */}
          <section className="forms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4">
                        Status:{" "}
                        {checked ? (
                          <strong className="font-bold text-success">ON</strong>
                        ) : (
                            <strong className="font-bold text-danger">OFF</strong>
                          )}
                      </h3>
                    </div>
                    <div className="card-body">
                      <form className="form-inline" >
                        <div className="form-group">
                          {/* <input
      type="checkbox"
      data-toggle="toggle"
      data-on="Ready"
      data-off="Not Ready"
      data-onstyle="success"
      data-offstyle="danger"
      onChange={(event) => {
      setChecked(event.target.checked);
      }}
      value={checked}
      /> */}
                          <Switch
                            color="primary"
                            onChange={(event) => {
                              setChecked(event.target.checked);
                            }}
                            value={checked}

                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* LIVE STREAM CONTENT ----------------------------------*/}
              {/* {checked ? null : changedCLick(checked)} */}
              {checked ? (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-center">
                        <h3 className="h4">
                          Status:{" "}
                          {checked ? (
                            <strong className="font-bold text-success">
                              Please scroll down to paste live stream ID
                            </strong>
                          ) : (
                              <strong className="font-bold text-danger">
                                OFF
                              </strong>
                            )}
                        </h3>
                      </div>

                      <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 ">
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
                        <form
                          onSubmit={handleStreaming}
                          className="form-validate"
                        >
                          <div className="form-group-material">
                            <input
                              type="text"
                              placeholder="ENTER LIVE STREAM ID HERE ...."
                              className="input-material"
                              required
                              name="streamid"
                            />


                          </div>

                          <div className="form-group">
                            <input defaultValue={checked} name="check" type="hidden" />
                            <button className="btn btn-primary">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header d-flex align-items-center"></div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12 mx-auto text-center">
                          <img
                            src="images\live-stream.png"
                            alt="live stream"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              {/* LIVE STREAM CONTENT ----------------------------------*/}
              {/* <!-- Inline Form--> */}
              <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center">
                    {" "}
                    {checked ? (
                      <h3 className="font-bold text-danger h4">
                        TO SCHEDULE FOR NEW STREAMING EVENT PLEASE TURN OFF LIVE
                        STREAMING !
                      </h3>
                    ) : (
                        <h3 className="h4"> SCHEDULE STREAMING - <small>Click on the icon to select date/time</small></h3>
                      )}
                  </div>
                  <div className="card-body">
                    <form className="form-inline" onSubmit={handleSchedule}>
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group-material">

                              <TextField
                                required
                                id="date"
                                label="Set Date"
                                type="date"
                                name="date"
                                fullWidth
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                disabled={(checked ? true : false)}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">

                            <div className="form-group-material">

                              <TextField
                                required
                                id="time"
                                label="Set Time"
                                type="time"
                                name="time"
                                fullWidth
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                disabled={(checked ? true : false)}
                              />
                            </div>
                          </div>

                        </div>
                        <div className="form-group row">
                          <div className="col-sm-12 ">
                            <button type="reset" className="btn btn-secondary">
                              Clear
                            </button>{" "}
                            <button
                              type="submit"
                              className="btn btn-primary"
                              disabled={(checked ? true : false)}>
                              Schedule
                             </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Modal Form--> */}
            </div>
            <ToastContainer />
            <Footer />
          </section>

          {/* LIVE STREAM CONTAINER ##################### */}
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );
};

export default Livestream;