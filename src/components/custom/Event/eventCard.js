import React from "react";
import Moment from "react-moment";
// import { Link } from "react-router-dom";
export const EventCard = ({ title, created, img }) => {
  return (
    <React.Fragment>
      <div class="col-md-6 col-lg-3">
        <div class="card text-center">
          <img src={img} class="card-img-top" alt="Placeholder" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              This is an example of a basic card. Cards have no fixed width
            </p>
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
    </React.Fragment>
  );
};
