import React, { useEffect, useState } from "react";
import { Header, SideBar, BreadCrumb, Footer } from "../../Partials";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

import { Bio } from "./index"

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const User = (props) => {
  const { classes } = props;
  const [value, setValue] = useState(0)
  useEffect(() => {
    document.getElementById("home").classList.add("active");
  })
  const handleChange = (event, value) => {
    setValue(value)
  }
  return (
    <div className="page">
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />
        <div className="content-inner">
          <BreadCrumb title="User" crumb="User" />
          <section className="dashboard-counts no-padding-bottom">


            <div className="row">
              <div className="col-lg-4 sm-12 md-4 xs-12">
                <div className="card card-profile">
                  <div
                    style={{
                      backgroundImage:
                        "url(img/photos/paul-morris-116514-unsplash.jpg)",
                    }}
                    className="card-header"
                  ></div>
                  <div className="card-body text-center">
                    <img
                      src="img/avatar-7.jpg"
                      className="card-profile-img"
                      alt="s"
                    />
                    <h3 className="mb-3">Elemson Ifeanyi</h3>
                    <p className="mb-4">
                      One morning, when Gregor Samsa woke from troubled{" "}
                    </p>
                    <button className="btn btn-outline-dark btn-sm">
                      <span className="fa fa-twitter"></span> Follow
                  </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 md-4 sm-12 xs-12">
                <div className={classes.root}>
                  <AppBar position="static">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      scrollable
                      scrollButtons="auto">
                      <Tab label="Bio" />
                      <Tab label="Activity" />
                      <Tab label="School" />
                    </Tabs>
                  </AppBar>
                  {value === 0 && <TabContainer><Bio /></TabContainer>}
                  {value === 1 && <TabContainer>Item Two</TabContainer>}
                  {value === 2 && <TabContainer>Item Three</TabContainer>}
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );

}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(User);
