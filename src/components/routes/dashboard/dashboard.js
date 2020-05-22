import React, { Fragment } from "react";
import Header from "../../partials/header";
import SideBar from "../../partials/sidebar"
import Content from "../main"
import {Helmet} from "react-helmet";

class dashboard extends React.Component {
componentDidMount() {
//add class to the body tag on page load
document.getElementById("page-body").classList.add("theme-red");
}
render() {
return (
<Fragment>
<Helmet>
<title>Dashboard</title>
</Helmet>
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
