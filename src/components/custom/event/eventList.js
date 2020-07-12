import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { fetchEventList } from "../../../Redux/actions/eventAction";
// import PuffLoader from "react-spinners/PuffLoader";
import Button from '@material-ui/core/Button';
import { Header, SideBar, BreadCrumb, Footer } from "../../Partials";
import { EventCard } from "./eventCard";
import { LoaderCard, InfoCard } from "../Helpers"
const EventLists = ({ fetchEventList, eventData }) => {

  useEffect(() => {
    document.getElementById("event").classList.add("active");
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
          <BreadCrumb title="GPA" crumb="Event List" />
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
                  <LoaderCard />

                ) : eventData.error ? (
                  <InfoCard error={eventData.error + " " + "Please check your connection"} />

                ) : (
                      <Fragment>

                        {eventData.eventItems.length ? (

                          eventData.eventItems.map(({ title, created, id }) => (
                            <EventCard title={title} created={created} img="img/mockup3.jpg" key={title} />
                          ))

                        ) : <InfoCard info="No event available , Please create a new event" />

                        }

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

EventLists.propTypes = {
  fetchEventList: PropTypes.func.isRequired,
  eventData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  eventData: state.events,
});
export default connect(mapStateToProps, { fetchEventList })(EventLists);
