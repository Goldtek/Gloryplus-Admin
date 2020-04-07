import React, { Fragment } from "react";
import Header from "../../app/header";
import SideBar from "../../app/sidebar"
import Content from "../../routes/main"
class dashboard extends React.Component {
  componentDidMount() {
    //add class to the body tag on page load
    document.getElementById("page-body").classList.add("theme-red");
  }
  render() {
    return (
      <Fragment>
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <SideBar />
        {/* CLOSE SIDE BAR */}


        {/* CONTENT */}
        <Content />
        {/* CLOSE CONTENT */}

      </Fragment>

    );
  }
}

export default dashboard;
