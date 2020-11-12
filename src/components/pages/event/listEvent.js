import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import moment from 'moment';
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import { EventCard } from "./eventCard";

// import Content from "../main";
const ListEvents = () => {
  
  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
    fetchEvents();
  }, []);

  const fetchEvents = () => {

  }

    return (
      <div className="page">
        <Helmet>
          <title>event list</title>
        </Helmet>
        <Header />
        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
            <PageHeaderTitle title="GPA" currpg="Event List" />
            <div className="container-fluid">
                <section>
                  <div className="card">
                    <div className="card-header">
                      <h4>Event List</h4>
                    </div>
                  </div>
                  <div className="row">
                    {/* {this.props.events.map((event) => (
                      <EventCard
                        title={event.title}
                        created={event.created}
                        key={event.id}
                      />
                    ))} */}
                  </div>
                </section>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }

export default ListEvents;
