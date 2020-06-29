import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { fetchEventList } from "../../../redux/actions/eventAction";
import PuffLoader from "react-spinners/PuffLoader";
import Button from '@material-ui/core/Button';
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import { EventCard } from "./eventCard";

const ListEvents = ({ fetchEventList, eventData }) => {



  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
    fetchEventList();
  }, [fetchEventList]);



  return (
    <div className="page">
      <Helmet>
        <title>event list</title>
      </Helmet>

      <Header />

      <div className="page-content d-flex align-items-stretch">
        <SideBar />

        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <PageHeaderTitle title="GPA" currpg="Event List" />
          <div className="container-fluid">
            <section>
              <div className="card">
                <div className="card-header">
                  <Button variant="contained" href="dashboard/event/create" color="primary">
                    Create Event
</Button>

                </div>
              </div>
              <div className="row">

                {eventData.loading ? (
                  <div className="col-md-4 col-lg-4 col-sm-12" style={{ margin: "0 auto" }}>
                    <div className="sweet-loading">
                      <PuffLoader
                        size={60}
                        color={"#123abc"}
                        loading={eventData.loading}
                      />
                        Please Wait...
                        </div>
                  </div>

                ) : eventData.error ? (
                  <h2>{eventData.error}</h2>
                ) : (
                      <Fragment>

                        {eventData.eventItems.length ? (

                          eventData.eventItems.map(({ title, created }) => (
                            <EventCard title={title} created={created} img="img/mockup3.jpg" />
                          ))

                        ) : <div class="col-md-6 col-lg-3 col-sm-12" style={{ margin: "0 auto" }}>

                            <div class="card"><img src="img/alert/error.jpg" alt="Card image cap" class="card-img-top img-fluid" />
                              <div class="card-body">
                                <h5 class="card-title">Info</h5>
                                <p class="card-text">No Available Event</p>
                              </div>

                            </div>
                          </div>}

                      </Fragment>
                    )}
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  );

}

ListEvents.propTypes = {
  fetchEventList: PropTypes.func.isRequired,
  eventData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  eventData: state.events,
});
export default connect(mapStateToProps, { fetchEventList })(ListEvents);
