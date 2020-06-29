import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom"
export const EventCard = ({ title, created, img }) => {
  return (
    <div class="col-md-6 col-lg-3">

      <div class="card"><img src={img} alt="Card image cap" class="card-img-top img-fluid" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Some quick example text to build on the .</p>

          <a href="#" class="btn btn-primary">view</a>
          {" "}
          <a href="#" class="btn btn-info">edit</a>
        </div>
        <div class="card-footer text-muted"><Moment fromNow>{created}</Moment></div>
      </div>
    </div>
  );
};
