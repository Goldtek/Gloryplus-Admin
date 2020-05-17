import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Header, Sidebar } from "../../partials";
import Content from "../main";

const Livestream = () => {
  const [playerSource, setplaysource] = useState("");
  const [togglestate, settoggleState] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  //   const [infostate, setInfo] = useState(false);

  function toggle(e) {
    settoggleState(!togglestate);
    setDisabled(!disabled);
    // setInfo(!infostate);
  }

  useEffect(() => {
    document.getElementById("page-body").classList.add("theme-red");
  });
  const handleChangePlaysource = (e) => {
    setplaysource(e.target.value);
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
        {/* COURSE INFORMATION  */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      {togglestate ? (
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
                          <input type="checkbox" onClick={toggle} />
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
        {togglestate ? (
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
                    allowTransparency="true"
                    allow="encrypted-media"
                    allowFullScreen="true"
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
        {togglestate ? (
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
                    <div className="col-xs-12 col-md-12">
                      {/* <h2 className="card-inside-title">INPUT LIVESTREAM ID</h2> */}
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Livestream ID here..."
                            value={playerSource}
                            onChange={handleChangePlaysource}
                            required
                          />
                        </div>
                      </div>
                    </div>
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
                  {togglestate ? (
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
                    <Formik>
                      <div class="col-sm-12  col-xs-12 col-md-4 col-lg-4">
                        <div class="form-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="datepicker form-control"
                              placeholder="Please choose a date..."
                              disabled={disabled}
                              name="date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12  col-xs-12 col-md-4 col-lg-4">
                        <div class="form-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="timepicker form-control"
                              placeholder="Please choose a time..."
                              disabled={disabled}
                              name="time"
                            />
                          </div>
                        </div>
                      </div>
                    </Formik>

                    <button
                      type="button"
                      className="btn bg-primary waves-effect"
                    >
                      <strong>SCHEDULE LIVE STREAMING</strong>
                    </button>
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
