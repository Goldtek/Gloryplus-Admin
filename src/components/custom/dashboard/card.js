import React from 'react'

const Card = ({ title1, title2, numCount, icon, iconColor }) => {
    return (
        <React.Fragment>
            <div className="col-xl-4 col-sm-12 xs-12">
                <div className="item d-flex align-items-center">
                    <div className={`icon ${iconColor}`}>
                        <i className={icon}></i>
                    </div>
                    <div className="title">
                        <span>
                            {title1}
                            <br />
                            {title2}
                        </span>
                        <div style={{ width: "50%", height: "4px" }} ></div>
                    </div>
                    <div className="number">
                        <strong>{numCount}</strong>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Card
