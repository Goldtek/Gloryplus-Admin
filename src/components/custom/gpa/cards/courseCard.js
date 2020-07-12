import React, { Fragment } from "react";
import Moment from "react-moment";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditCourse from "../modal/editCourse";
export const Card = ({ title, created, id }) => {

  return (
    <Fragment>

      <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
        <div class="card"><img src="img/mockup6.jpg" alt="Card image cap" class="card-img-top img-fluid" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">

              <ButtonGroup color="secondary" variant="contained" >
                <Button href={`/dashboard/gpa/view/${title}/${id}`} size="small">Create Lesson</Button>

                <EditCourse title={title} id={id} />

              </ButtonGroup>

            </p>
            <p class="card-text"><small class="text-muted"><Moment fromNow>{created}</Moment></small></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};



