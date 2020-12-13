import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { fetchEventList } from "../../../redux/actions/eventAction";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import { EventCard } from "./eventCard";
import { handleError } from "../../util";

const ListEvents = () =>  {
  const [galleries, setGallery] = useState([]);
    useEffect(()=>{
      document.getElementById("gallery").classList.add("active");
      fetchGallery();
    },[])


    const fetchGallery = async () => {
      await firestore.collection('galleries')
      .onSnapshot((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });
        setGallery(results);
      }, handleError);

    }

    return (
      <div className="page">
        <Helmet>
          <title>Gallery list</title>
        </Helmet>
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
            {/* <!-- Page Header--> */}
            <PageHeaderTitle title="Gallery" currpg="Gallery" />
            <div className="container-fluid">
              {/* <!-- end row--> */}
              <section>
                <div className="card">
                  <div className="card-header">
                    <h4> Gallery List</h4>
                  </div>
                </div>
                <div className="row">
                  {galleries.map((event) => (
                    <EventCard
                      title={event.title}
                      created={event.created}
                      key={event.id}
                    />
                  ))}
                </div>
              </section>

              {/* <!-- end row--> */}
            </div>
            <Footer />
          </div>
        </div>
        {/* CLOSE SIDE BAR */}
      </div>
    );
  }

export default ListEvents;
