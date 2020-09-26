import React from "react";
import Moment from "react-moment";
// import { Link } from "react-router-dom";
export const EventCard = ({ title, created, img }) => {
  return (
    <React.Fragment>
      <div className="col-md-6 col-lg-3">
        <div className="card text-center">
          <img src={img} className="card-img-top" alt="Placeholder" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              This is an example of a basic card. Cards have no fixed width
            </p>
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-primary">
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
    </React.Fragment>
  );
};
