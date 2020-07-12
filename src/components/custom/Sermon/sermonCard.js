import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';


export const SermonCard = ({ title, created, coverimg, preview }) => {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
      <div className="card">

        {/* <img src="img/mockup6.jpg" alt="Card image cap" className="card-img-top img-fluid" /> */}
        <div className="embed-responsive embed-responsive-4by3 card">
          <video
            controls
            poster={`images/sermon/${coverimg}`}
            className="embed-responsive-item "
          >
            <source src={preview} type="video/mp4" />
            <source src={preview} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
          {/* <iframe allowfullscreen></iframe> */}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <Button color="primary" variant="contained">edit</Button>
          {" "}
          <Button color="secondary" variant="contained">delete</Button>
          <p className="card-text"><small className="text-muted"><Moment fromNow>{created}</Moment></small></p>
        </div>
      </div>
    </div>




  );
};
