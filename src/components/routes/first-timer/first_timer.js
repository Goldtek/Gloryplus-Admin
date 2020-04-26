import React, { useState, useEffect,Fragment } from 'react';
import Header from "../../app/header";
import SideBar from "../../app/sidebar";
import WelcomeForm from "./content";
import "./form.css";

class  FirstTimer extends React.Component{
    componentDidMount() {
        //add class to the body tag on page load
        document.getElementById("page-body").classList.add("theme-red");
      }
    render(){
        return (
            <Fragment>
            {/* HEADER PART */}
            <Header />
            {/* CLOSE HEADER PART */}
    
            {/* SIDER BAR PART */}
            <SideBar />
            {/* CLOSE SIDE BAR */}
    
    
            {/* CONTENT */}
            <WelcomeForm />
            {/* CLOSE CONTENT */}
    
          </Fragment>
        )
    }
 
}

export default FirstTimer
