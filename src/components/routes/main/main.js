import React from "react";


class main extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>GORY PLUS DASHBOARD</h2>
                    </div>


                    <div className="row clearfix">
                        {/*      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-pink hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">playlist_add_check</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW TASKS</div>
                                    <div className="number count-to" data-from="0" data-to="125" data-speed="15"
                                        data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="info-box bg-cyan hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">help</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW TICKETS</div>
                                    <div className="number count-to" data-from="0" data-to="257" data-speed="1000"
                                        data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="info-box bg-light-green hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">forum</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW COMMENTS</div>
                                    <div className="number count-to" data-from="0" data-to="243" data-speed="1000"
                                        data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="info-box bg-orange hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">person_add</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW VISITORS</div>
                                    <div className="number count-to" data-from="0" data-to="1225" data-speed="1000"
                                        data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <div className="header bg-red">
                                    <h2>
                                        Red - Title <small>Description text here...</small>
                                    </h2>
                                    <ul className="header-dropdown m-r--5">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <i className="material-icons">more_vert</i>
                                            </a>
                                            <ul className="dropdown-menu pull-right">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.
                        </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <div className="header bg-cyan">
                                    <h2>
                                        Cyan - Title <small>Description text here...</small>
                                    </h2>
                                    <ul className="header-dropdown m-r--5">
                                        <li>
                                            <a href="#">
                                                <i className="material-icons">mic</i>
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <i className="material-icons">more_vert</i>
                                            </a>
                                            <ul className="dropdown-menu pull-right">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.
                        </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <div className="header bg-green">
                                    <h2>
                                        Green - Title <small>Description text here...</small>
                                    </h2>
                                    <ul className="header-dropdown m-r-0">
                                        <li>
                                            <a href="#">
                                                <i className="material-icons">info_outline</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="material-icons">help_outline</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.
                        </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        )
    }
}

export default main;