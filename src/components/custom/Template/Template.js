import React, { useEffect, useState } from "react";
import serializeForm from "form-serialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header, SideBar } from "../../Partials";
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const API_URL = process.env.REACT_APP_BASEURL;

const Livestream = () => {
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
            data: { active: checked, streamId: "", sheduleDate: streamObj.scheduleDate, scheduleTime: streamObj.scheduleTime },
        }).then((res) => {
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
        }).then((res) => {
            console.log({ res })
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
            <Header />
            <SideBar />
            <div className="page-content">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="page-title">Forms</h2>
                        </div>
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    Examples and usage guidelines for form control styles, layout options, and custom
                                    components for creating a wide variety of forms.
                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic Example</h5>
                                    <p>Here’s a quick example to demonstrate Bootstrap’s form styles. </p>
               body

                      </div>
                            </div>






                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
};


export default Livestream;
