import React from "react";
import Moment from "react-moment";

export const AssigmentCards = ({ created, question }) => {
  return (
    <div className="col-md-4">
      <div className="card text-center">
        <div className="card-body">
          <h4 className="card-title">Special title treatment</h4>
          <p className="card-text">{question}</p>
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-primary">
              view
            </button>
            <button type="button" className="btn btn-warning">
              edit
            </button>
            <button type="button" className="btn btn-danger">
              delete
            </button>
          </div>
        </div>
        <div className="card-footer text-muted">
          <Moment fromNow>{created}</Moment>
        </div>
      </div>
    </div>
  );
};
