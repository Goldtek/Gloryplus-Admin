import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import moment from 'moment';
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import { EventCard } from "./eventCard";
import { handleError } from "../../util";

// import Content from "../main";
const ListEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    await firestore.collection('events')
    .onSnapshot((querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });
      setEvents(results);
    }, handleError);

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
                    {events.map((event) => (
                      <EventCard
                        title={event.title}
                        created={event.created}
                        key={event.id}
                        image={event.img}
                      />
                    ))}
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
