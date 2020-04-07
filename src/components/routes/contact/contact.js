import React from "react";
// import PropTypes from "prop-types";

class contact extends React.Component {
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
                                    Pease fill the details below .. we will get back to you as soon as possible.
</div>


                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">person</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="text" className="form-control" name="name" placeholder="Full Name" required autofocus />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">phone</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone Number" required autofocus />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">email</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required autofocus />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-line">
                                        <textarea rows="2" className="form-control no-resize auto-growth" placeholder="Please pen down your thoughts here..."></textarea>
                                    </div>
                                </div>

                                <button className="btn btn-block btn-lg btn-primary waves-effect" type="submit">Submit</button>

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

export default contact;
