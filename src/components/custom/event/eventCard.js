import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom"
export const EventCard = ({ title, created, img }) => {
  return (
    // <div class="col-md-6 col-lg-3">

    //   <div class="card"><img src={img} alt="eventcard" class="card-img-top img-fluid" />
    //     <div class="card-body">
    //       <h5 class="card-title">{title}</h5>
    //       <p class="card-text">Some quick example text to build on the .</p>

    //       <Link to="#" class="btn btn-primary">view</Link>
    //       {" "}
    //       <Link to="#" class="btn btn-info">edit</Link>
    //     </div>
    //     <div class="card-footer text-muted"><Moment fromNow>{created}</Moment></div>
    //   </div>
    // </div>




    <React.Fragment>
      <div class="col-md-6 col-lg-3">
        <div class="card">
          <img src={img} class="card-img-top" alt="Placeholder" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">This is an example of a basic card. Cards have no fixed width</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>


      </div>
    </React.Fragment>
  );
};
