import React from "react";
import Moment from "react-moment";
// const dateToFormat = new Date("");
export const CourseCard = ({ title, created, id }) => {
  return (
    <div className="col-md-3 col-xs-12 col-lg-3 col-sm-12">
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <div className="card">
            <img
              src="img/mockup4.jpg"
              alt="Card  cap"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <a href={`dashboard/gpa/${id}`}>
                <h5 className="card-title">{title}</h5>
              </a>
              {/* <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that
                          equal height action.
                        </p> */}
              <p className="card-text">
                <small className="text-muted">
                  created: <Moment fromNow>{created}</Moment>
                  &nbsp; <a href={`dashboard/gpa/${id}`}>view more</a>
                  &nbsp;{" "}
                  <a href={`dashboard/gpa/${id}`}>
                    <i
                      className="fa fa-trash text-danger fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
