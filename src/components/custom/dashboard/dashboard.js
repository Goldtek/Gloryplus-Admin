import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { Header, SideBar, BreadCrumb, Footer } from "../../Partials";
import { Card } from "./"
const Dashboard = (props) => {
  console.log(props)
  useEffect(() => {
    document.getElementById("home").classList.add("active");
  })
  return (
    <div className="page">
      <Header title="dashboard" />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />
        <div className="content-inner">
          <BreadCrumb title="Dashboard" />
          <section className="dashboard-counts no-padding-bottom">
            <div className="container-fluid">
              <div className="row bg-white has-shadow">
                {/* <!-- Item --> */}

                <Card title1={'New'} title2={`Members`} numCount={25} icon={'icon-user'} iconColor={'bg-violet'} />
                <Card title1={'Cell'} title2={`Locations`} numCount={25} icon={'fa fa-map-marker'} iconColor={'bg-red'} />
                <Card title1={'Open'} title2={`Classes`} numCount={25} icon={'fa fa-book'} iconColor={'bg-blue'} />
              </div>
            </div>
          </section>
          <Footer />
          {/* <!-- Dashboard Header Section    --> */}
        </div>
      </div>
      {/* CLOSE SIDE BAR */}
    </div>
  );

}

Dashboard.propTypes = {
  User: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  User: state.User,
});
export default connect(mapStateToProps, null)(Dashboard);


