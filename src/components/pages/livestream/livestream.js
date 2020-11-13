import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
// import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header, SideBar, PageHeaderTitle, Footer, firestore  } from "../../partials";

const Livestream = () => {
  useEffect(() => {
    document.getElementById("livestream").classList.add("active");
  });
  //DECLARE USE STATE FOR OUR VARIABLES
  const [playerSource, setplaysource] = useState("");
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  //   const [loading, setLoading] = useState(false);
  //   const [infostate, setInfo] = useState(false);

  // LIVE STREAM TOGGLE BUTTON ########
  const toggle = (e) => {
    e.preventDefault();
    setChecked(!checked);
    setDisabled(!disabled);
  };
  //HANDLE THE NEW STREAMING SCHEDULE ##########
  const handleSchedule = async (e) => {
    e.preventDefault();
    const scheduleObj = serializeForm(e.target, { hash: true });
    try{
      const streamData = {
        programTitle: scheduleObj.programTitle,
        scheduleMonth: scheduleObj.scheduleMonth, 
        scheduleDate: scheduleObj.scheduleDate, 
        scheduleTime: scheduleObj.time, 
        live: scheduleObj.check
      };
       await firestore.collection("livestream").doc('Rdk9PSngEiM0x1gFbtOn').update(streamData);
        toast.success("Next Livestream Scheduled successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
      } catch (error) {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  };

  //HANDLE THE NEW STREAMING SCHEDULE ##########

  const handleStreaming = async (e) => {
    e.preventDefault();
    const streamObj = serializeForm(e.target, { hash: true });
    const url = `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fgloryplusintl%2Fposts%2F${streamObj.streamid}&show_text=true`;

    setplaysource(streamObj.streamid);

    const streamData = {
      programTitle: streamObj.programTitle,
      live: streamObj.check,
      streamURL: url
    };

    try{
     await firestore.collection("livestream").doc('Rdk9PSngEiM0x1gFbtOn').update(streamData);
      toast.success("LiveStream Successfully Updated and its LIVE!!!!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
   
  };

 
  return (
    <div className="page">
      <Helmet>
        <title>Live Stream</title>
      </Helmet>
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
                      <form className="form-inline" onClick={toggle}>
                        <div className="form-group">
                          <input
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
                           <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group-material">
                                  <input
                                    type="text"
                                    placeholder="ENTER LIVE STREAM ID HERE ...."
                                    className="input-material"
                                    required
                                    name="streamid"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group-material">
                                  <input
                                    required
                                    className="input-material"
                                    type="text"
                                    name="programTitle"
                                    placeholder="Enter Program Title i.e Sunday Service"
                                  />
                              
                                </div>
                              </div>
                           </div>
                            <input value={checked} name="check" type="hidden" />
                          

                          <div className="form-group">
                            <button className="btn btn-success">Go Live</button>
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
                      <h3 className="h4"> SCHEDULE STREAMING</h3>
                    )}
                  </div>
                  <div className="card-body">
                    <form className="form-inline" onSubmit={handleSchedule}>
                      <div class="col-sm-12">
                      <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group-material">
                              <input
                                required
                                className="input-material"
                                type="text"
                                name="programTitle"
                                placeholder="Enter Program Title i.e Sunday Service"
                              />
                          
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group-material">
                            <select
                              className= "input-material select-text"
                              name="scheduleMonth"
                              // onChange={handleChange}
                              // value={values.gender}
                              // onBlur={handleBlur}
                              required
                            >             
                              <option value="January">January</option>
                              <option value="Febuary">Febuary</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group-material">
                            <select
                              className= "input-material select-text"
                              name="scheduleDate"
                              required
                            > 
                              {numbers.map((number)=>  <option value={number}>{number}</option>)}
                            </select>
                          
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group-material">
                              <input
                                className="input-material"
                                id="timepicker"
                                type="time"
                                placeholder="select time"
                                name="time"
                                required
                              />
                            </div>
                          </div>
                          <input value={checked} name="check" type="hidden" />
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-12 ">
                            <button type="reset" className="btn btn-secondary">
                              Cancel
                            </button>{" "}
                            <button
                              type="submit"
                              className="btn btn-primary"
                              disabled={disabled}
                            >
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
