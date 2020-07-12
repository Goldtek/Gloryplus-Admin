import React from 'react'

const infoCard = ({ title, info }) => {
    return (
        <div className="col-md-6 col-lg-3">

            <div className="card"><img src="img/alert/error.jpg" alt="Card image cap" className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">Info</h5>
                    <p className="card-text">No Available Event</p>
                </div>

            </div>
        </div>
    )
}

export default infoCard
