import React from 'react'

export const GrowthCard = ({ title, icon }) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="card info-card info-success">
                    <div className="card-body">
                        <h5 className="card-title">Growth</h5>
                        <div className="info-card-text">
                            <h3>142,739</h3>
                            <span className="info-card-helper">{title}</span>
                        </div>
                        <div className="info-card-icon">
                            <i className="material-icons">{icon}</i>
                        </div>
                    </div>
                    <div id="sparkline-bar-2"></div>
                </div>
            </div>


        </React.Fragment>
    )
}
export const RecentUsers = ({ name, location }) => {
    return (
        <React.Fragment>
            <li className="trending-up">
                <span className="browser-icon">
                <i className="fa fa-user"></i></span>{" "}{name}
                <span className="browser-stat">{" "}<i className="material-icons">location_on</i>{location}</span>
            </li>


        </React.Fragment>
    )
}

export const Reports = ({ title, report }) => {
    return (
        <React.Fragment>

            <li className="report-item report-danger">
                <div className="report-icon"><i className="material-icons">error_outline</i></div>
                <div className="report-text">{title}
                    <span>{report}</span>
                </div>
                <div className="report-helper">6h ago</div>
            </li>
        </React.Fragment>
    )
}

