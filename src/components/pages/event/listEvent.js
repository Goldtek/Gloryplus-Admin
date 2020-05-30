import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { fetchEventList } from "../../../redux/actions/eventAction";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import { EventCard } from "./eventCard";

// import Content from "../main";
class ListEvents extends React.Component {
  static propTypes = {
    fetchEventList: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired,
  };
  // useEffect(() => {
  //   document.getElementById("gpa").classList.add("active");
  // });

  componentDidMount() {
    document.getElementById("event").classList.add("active");

    this.props.fetchEventList();
  }
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>event list</title>
        </Helmet>
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
            {/* <!-- Page Header--> */}
            <PageHeaderTitle title="GPA" currpg="Event List" />
            <div className="container-fluid">
              {/* <!-- end row--> */}
              <section>
                <div className="card">
                  <div className="card-header">
                    <h4>Event List</h4>
                  </div>
                </div>
                <div className="row">
                  {this.props.events.map((event) => (
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
}

const mapStateToProps = (state) => ({
  events: state.events.eventItems,
});
export default connect(mapStateToProps, { fetchEventList })(ListEvents);
