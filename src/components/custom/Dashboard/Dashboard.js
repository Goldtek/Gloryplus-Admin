import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { Header, SideBar } from "../../Partials";
import { Helmet } from "react-helmet"
import { GrowthCard, RecentUsers, Reports } from "."


const Dashboard = (props) => {

  console.log(props)
  // useEffect(() => {
  //   document.getElementById("home").classList.add("active");
  //   window.location.reload()
  // }, [])


  return (
    <React.Fragment>
      <Helmet><title>Home Dashboard</title></Helmet>
      <Header />
      <SideBar />

      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="page-title">Dashboard</h2>
              {/* <a href="#" className="btn btn-text-secondary float-right">Get Info</a>
              <a href="#" className="btn btn-text-danger float-right m-r-sm">Print</a> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <GrowthCard title={'New Users'} icon={'person'} />
                <GrowthCard title={'Cell Location'} icon={'location_on'} />
                <GrowthCard title={'Church Locations'} icon={'location_city'} />
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Reports</h5>
                  <div className="card-info"><a href="#" className="btn btn-xs btn-text-dark">See all</a>
                  </div>
                  <ul className="report-list list-unstyled">
                    <Reports title={'reports on gpa for Ikeja,Lagos Branch'} report={'This is a report on the ongoing gpa for session .....'} />
                    <Reports title={'reports on the just lunch new branch in Garki Abuja'} report={'This is a report regarding GPI new branch.....'} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Recent Users</h5>
                  <div className="card-info"><a href="#" className="btn btn-xs btn-text-dark"><i className="material-icons">refresh</i></a></div>
                  <ul className="list-unstyled browser-list">
                    <RecentUsers location={'Lagos'} name={'John Smart'} />
                    <RecentUsers location={'Abuja'} name={'Elemson Ifeanyi'} />
                    <RecentUsers location={'PH'} name={'Chisom Dike'} />
                  </ul>
                  <a href="#" className="btn btn-text-secondary float-right">Details</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </React.Fragment>
  );

}

Dashboard.propTypes = {
  User: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  User: state.User,
});
export default connect(mapStateToProps, null)(Dashboard);


