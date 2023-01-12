import React from "react";
import Moment from "react-moment";
// const dateToFormat = new Date("");
export const EventCard = ({ title, created, image }) => {
  return (
    <div className="col-md-3 col-xs-12 col-lg-3 col-sm-12">
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <div className="card">
            <img
              src={image}
              alt="Card  cap"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <a href="#!">
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
                  &nbsp; <a href="#!">view more</a>
                  &nbsp;{" "}
                  <a href="#!">
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
