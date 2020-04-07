import React from "react";
// import PropTypes from "prop-types";

class recover extends React.Component {
    componentDidMount() {
        //add class to the body tag on page load
        document.getElementById("page-body").classList.add("login-page");
    }
    render() {
        return (
            <div className="fp-page">
                <div className="fp-box">
                    <div className="logo">
                        <a href="#"><b>Glory Plus Admin</b></a>
                        {/* <small>Admin BootStrap Based - Material Design</small> */}
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="forgot_password" method="POST">
                                <div className="msg">
                                    Enter your email address that you used to register. We'll send you an email with your username and a
                                    link to reset your password.
</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">email</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required autofocus />
                                    </div>
                                </div>

                                <button className="btn btn-block btn-lg bg-pink waves-effect" type="submit">RESET MY PASSWORD</button>

                                <div className="row m-t-20 m-b--5 align-center">
                                    <a href="/">Sign In!</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

// login.propTypes = {};

export default recover;
