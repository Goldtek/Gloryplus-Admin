import React from 'react'

const InfoCard = ({ info, error }) => {
    return (

        <div className="col-md-4" style={{ margin: "0 auto" }}>
            <div className={error ? "card text-white bg-danger" : "card text-white bg-info"}>
                <div className="card-header card-header-transparent">{error ? "Error!" : "Notification"}</div>
                <div className="card-body">
                    <h5 className="card-title"><i className={error ? "fa fa-exclamation-triangle" : "fa fa-bell"}></i> {error ? "Error!" : "Notification"}</h5>
                    <p className="card-text">{info ? info : error}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
