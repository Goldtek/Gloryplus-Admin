import React, { Fragment } from "react";
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
export const Card = ({ title, created, id }) => {
  return (
    <Fragment>
      < div className="col-md-6 col-lg-3 col-sm-12 col-xs-12" >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted">created:<Moment fromNow>{created}</Moment></h6>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowFullScreen
              title="Lesson"
            ></iframe>
          </div>

          <div className="card-body">
            <Button variant="contained" href={`dashboard/gpa/assignment/${id}`} color="primary">
              Add Assignment
      </Button>

          </div>
        </div>
      </ div>
    </Fragment >
  );
};
