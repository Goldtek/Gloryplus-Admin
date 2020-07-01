import React, { Fragment } from "react";
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditCourse from "../modal/editCourse";
export const Card = ({ title, created, id }) => {

  return (
    <Fragment>

      <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted"><Moment fromNow>{created}</Moment></h6>
          </div><img src="img/mockup5.jpg" alt="info" className="img-fluid" />
          <div className="card-body">
            <ButtonGroup color="secondary" variant="contained" >
              <Button href={`/dashboard/gpa/view/${title}/${id}`} size="small">Create Lesson</Button>

              <EditCourse title={title} id={id} />

            </ButtonGroup>
          </div>
        </div>
      </div>
    </Fragment>
  );
};



