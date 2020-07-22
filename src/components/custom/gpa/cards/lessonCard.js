import React, { Fragment } from "react";
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export const Card = ({ title, created, id }) => {
  return (
    <Fragment>
      <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowFullScreen
              title="Lesson"
            ></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <ButtonGroup variant="contained" >
                <Button color="primary" href={`dashboard/gpa/assignment/${id}`} size="small">Add Assignment</Button>
                <Button color="secondary" href={`/dashboard/gpa/view/${title}/${id}`} size="small">Edit Lesson</Button>
              </ButtonGroup>
            </p>
            <p className="card-text"><small className="text-muted"><Moment fromNow>{created}</Moment></small></p>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
