import React, { useEffect, useState } from "react";
import serializeForm from "form-serialize";
import axios from "axios";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar } from "../../Partials";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const API_URL = process.env.REACT_APP_BASEURL;

const Livestream = () => {
  let history = useHistory();
  useEffect(() => {
    // document.getElementById("livestream").classList.add("active");
  });
  //DECLARE USE STATE FOR OUR VARIABLES
  const [playerSource, setplaysource] = useState("");
  const [checked, setChecked] = useState(false);
  // const [disabled, setDisabled] = useState(false);

  //HANDLE THE NEW STREAMING SCHEDULE ##########
  const handleSchedule = (e) => {
    e.preventDefault();
    const streamObj = serializeForm(e.target, { hash: true });
    axios({
      method: "PATCH",
      url: `${API_URL}/livestream`,
      data: {
        active: checked,
        streamId: "",
        sheduleDate: streamObj.scheduleDate,
        scheduleTime: streamObj.scheduleTime,
      },
    })
      .then((res) => {
        // setplaysource(res.data.streamData.streamid);
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
  const handleStreaming = (e) => {
    e.preventDefault();
    const streamObj = serializeForm(e.target, { hash: true });

    axios({
      method: "PATCH",
      url: `${API_URL}/livestream`,
      data: { active: checked, streamId: streamObj.streamid },
    })
      .then((res) => {
        console.log({ res });
        setplaysource(res.data.streamId);
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
  return (
    <React.Fragment>
      <Helmet>
        <title>Live Stream</title>
      </Helmet>
      <Header />
      <SideBar />
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/dashboard/">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Live Stream</a>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  {/* <Button
                    variant="contained"
                    href="dashboard/sermon/view"
                    color="primary"
                  >
                    View Sermon
                  </Button>{" "} */}
                  <Button
                    onClick={() => history.goBack()}
                    variant="contained"
                    color="secondary"
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12"></div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <h6>
                      Status:{" "}
                      {checked ? (
                        <b className="font-bold text-success">ON</b>
                      ) : (
                        <b className="font-bold text-danger">OFF</b>
                      )}
                    </h6>
                    <Switch
                      color="primary"
                      onChange={(event) => {
                        setChecked(event.target.checked);
                      }}
                      value={checked}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          {checked ? (
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center">
                    <h6>
                      Status:{" "}
                      {checked ? (
                        <strong className="font-bold text-success">
                          Please scroll down to paste live stream ID
                        </strong>
                      ) : (
                        <strong className="font-bold text-danger">OFF</strong>
                      )}
                    </h6>
                  </div>

                  <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                    <div
                      className="embed-responsive embed-responsive-16by9 card"
                      style={{ maxHeight: "80vh" }}
                    >
                      <iframe
                        id="iframeid"
                        src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fgloryplusintl%2Fposts%2F${playerSource}&show_text=true`}
                        width="20%"
                        height="20%"
                        className="embed-responsive-item"
                        scrolling="no"
                        allowtransparency="true"
                        allow="encrypted-media"
                        allowFullScreen={true}
                        title="live streaming"
                      ></iframe>
                    </div>

                    <form onSubmit={handleStreaming} className="form-validate">
                      <div className="form-group-material">
                        <TextField
                          required
                          id="streamid"
                          label="ENTER LIVE STREAM ID HERE ...."
                          name="streamid"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                          disabled={checked ? false : true}
                        />
                      </div>
                      <br />
                      <div className="form-group">
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

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  {checked ? (
                    <h5 className="font-bold text-danger">
                      TO SCHEDULE FOR NEW STREAMING EVENT PLEASE TURN OFF LIVE
                      STREAMING !
                    </h5>
                  ) : (
                    <h5>
                      {" "}
                      SCHEDULE STREAMING -{" "}
                      <small>Click on the icon to select date/time</small>
                    </h5>
                  )}
                  <form onSubmit={handleSchedule}>
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <TextField
                            required
                            id="date"
                            type="date"
                            name="scheduleDate"
                            fullWidth
                            disabled={checked ? true : false}
                          />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <TextField
                            required
                            id="time"
                            type="time"
                            name="scheduleTime"
                            fullWidth
                            disabled={checked ? true : false}
                          />
                        </div>
                      </div>
                      <br />
                      <div className="form-group row">
                        <div className="col-sm-12 ">
                          <button type="reset" className="btn btn-secondary">
                            Clear
                          </button>{" "}
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={checked ? true : false}
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
          </div>
        </div>
      </div>

      <ToastContainer />
    </React.Fragment>
  );
};

export default Livestream;
