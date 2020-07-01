import React from 'react'
import Moment from "react-moment";
export const AssigmentCards = ({ created, title, question }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                    <h4 className="card-title">Special title treatment</h4>
                    <p className="card-text">{question}</p>
                    <a href="#" className="btn btn-dark">edit</a>
                    {" "}
                    <a href="#" className="btn btn-dark">delete</a>
                </div>
                <div className="card-footer text-muted"><Moment fromNow>{created}</Moment></div>
            </div>
        </div>

    )
}


