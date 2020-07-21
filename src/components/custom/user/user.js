import React, { useEffect, useState } from "react";
import { Header, SideBar } from "../../Partials";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
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
    // document.getElementById("home").classList.add("active");
  })

  let history = useHistory()
  const handleChange = (event, value) => {
    setValue(value)
  }
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <div className="page-content">

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="page-title">User Profile</h2>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button variant="contained" href="/dashboard" color="primary">
                    Dashboard
                            </Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>

                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 sm-12 md-4 xs-12">
              <div class="card">
                <img src="img/avatar-7.jpg" class="card-img-top" alt="Placeholder" />
                <div class="card-body">
                  <h5 class="card-title">{"Elemson Ifeanyi"} <br />{"Role: Admin"}  <br /> {"05-05-2020"}</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-danger">Delete Account</a>
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
        </div>

      </div>

    </React.Fragment>
  );

}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(User);
