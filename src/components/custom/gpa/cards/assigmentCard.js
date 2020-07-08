import React from 'react'
import Moment from "react-moment";
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';

export const AssigmentCards = ({ created, title, question }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    {/* <IconButton aria-label="Delete" size="small">
                        <DeleteIcon />
                    </IconButton> */}
                </div>
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


