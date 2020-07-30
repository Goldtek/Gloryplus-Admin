import React, { Fragment } from "react";
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditCourse from "../modal/editCourse";
export const Card = ({ title, created, id }) => {

  return (
    <Fragment>

      <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
        <div className="card"><img src="img/mockup6.jpg" alt="Card image cap" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">

              <ButtonGroup color="secondary" variant="contained" >
                <Button href={`/dashboard/gpa/view/${title}/${id}`} size="small" style={{ textDecoration: 'none', color: 'white' }}>Create Lesson</Button>

                <EditCourse title={title} id={id} />

              </ButtonGroup>

            </p>
            <p className="card-text"><small className="text-muted"><Moment fromNow>{created}</Moment></small></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};



