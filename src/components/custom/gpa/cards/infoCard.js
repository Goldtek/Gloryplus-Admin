import React from 'react'

const infoCard = ({ title, info }) => {
    return (
        <div class="col-md-6 col-lg-3">

            <div class="card"><img src="img/alert/error.jpg" alt="Card image cap" class="card-img-top img-fluid" />
                <div class="card-body">
                    <h5 class="card-title">Info</h5>
                    <p class="card-text">No Available Event</p>
                </div>

            </div>
        </div>
    )
}

export default infoCard
