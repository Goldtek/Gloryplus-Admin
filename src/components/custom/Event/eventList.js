import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { fetchEventList } from "../../../Redux/actions/eventAction";
// import PuffLoader from "react-spinners/PuffLoader";
import Button from '@material-ui/core/Button';
import { Header, SideBar, Breadcrumb } from "../../Partials";
import { EventCard } from "./eventCard";
import { LoaderCard, InfoCard } from "../Helpers"
import { useHistory } from "react-router-dom"


const EventLists = ({ fetchEventList, eventData }) => {

  useEffect(() => {
    // document.getElementById("event").classList.add("active");
    fetchEventList();
  }, [fetchEventList]);
  let history = useHistory()
  return (
    <React.Fragment>
      <Helmet>
        <title>event list</title>
      </Helmet>

      <Header />

      <SideBar />

      <div class="page-content">

        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              {/* <h2 class="page-title">Event List</h2> */}
              <Breadcrumb crumbItem={'Event'} crumb={'List Event'} />
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Button href="/dashboard/event/create" variant="contained" color="primary" style={{ textDecoration: 'none', color: 'white' }}>Create Events</Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Go Back</Button>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            {/* <h5 class="card-title">Basic Example</h5> */}
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
        </div>

      </div>
    </React.Fragment>
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
