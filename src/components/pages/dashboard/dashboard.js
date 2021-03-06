import React from "react";
import { Helmet } from "react-helmet";
import { Header, SideBar, PageHeaderTitle, Footer, storage } from "../../partials";
import {Bar, Pie, Line } from 'react-chartjs-2';
import { GrowthCard, RecentUsers, Reports } from "./Card";

class dashboard extends React.Component {
   state = {
     bar:{
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'FirstTimer',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      },
    ]
  },
    pie:{
      labels: ['Teens', 'Children', 'Members','Pastors', 'Workers'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
          ]
          ,
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
          ],
          data: [65, 59, 160, 21, 56]
        }
      ]
    },

    attendance: {
      labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets: [
        {
          label: 'Members',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]
    }
  }

  componentDidMount() {
    document.getElementById("home").classList.add("active");
  }
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Header />
       

        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
           
            <PageHeaderTitle title="Dashboard" />

        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h2 className="page-title"></h2>
                {/* <a href="#" className="btn btn-text-secondary float-right">Get Info</a>
                <a href="#" className="btn btn-text-danger float-right m-r-sm">Print</a> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row">
                  <GrowthCard title={"New Users"} icon={"person"} />
                  <GrowthCard title={"Cell Location"} icon={"location_on"} />
                  <GrowthCard title={"Church Locations"} icon={"location_city"} />
                </div>
              </div>
            </div>

            <div className="row">
                <div className="col-lg-4" style={{ backgroundColor: '#fff', marginBottom: '20px'}}>
                  <Bar
                    data={this.state.bar}
                    options={{
                      title:{
                        display:true,
                        text:"Mvp",
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
                </div>  
                <div className="col-lg-4" style={{ backgroundColor: '#fff', marginBottom: '20px',borderLeftColor: "#212529", borderLeftWidth: '0.5px', borderLeftStyle:"dashed"}}>
                  <Pie
                    data={this.state.pie}
                    options={{
                      title:{
                        display:true,
                        text:'Divisions in Church',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
                </div>
                <div className="col-lg-4" style={{ backgroundColor: '#fff', marginBottom: '20px', borderLeftColor: "#212529", borderLeftWidth: '0.5px', borderLeftStyle:"dashed" }}>
                  <Line
                    data={this.state.attendance}
                    options={{
                      title:{
                        display:true,
                        text:'Church Attendance per month',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                  />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Reports</h5>
                      <div className="card-info">
                        <a href="#" className="btn btn-xs btn-text-dark">
                          See all
                        </a>
                      </div>
                      <ul className="report-list list-unstyled">
                        <Reports
                          title={"reports on gpa for Ikeja,Lagos Branch"}
                          report={
                            "This is a report on the ongoing gpa for session ....."
                          }
                        />
                        <Reports
                          title={
                            "reports on the just lunch new branch in Garki Abuja"
                          }
                          report={"This is a report regarding GPI new branch....."}
                        />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Recent Users</h5>
                      <div className="card-info">
                        <a href="#" className="btn btn-xs btn-text-dark">
                          <i className="material-icons">refresh</i>
                        </a>
                      </div>
                      <ul className="list-unstyled browser-list">
                        <RecentUsers location={"Lagos"} name={"John Smart"} />
                        <RecentUsers location={"Abuja"} name={"Elemson Ifeanyi"} />
                        <RecentUsers location={"PH"} name={"Chisom Dike"} />
                      </ul>
                      <a href="#" className="btn btn-text-secondary float-right">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
  <Footer />
            {/* <!-- Dashboard Header Section    --> */}
          </div>
        </div>
        {/* CLOSE SIDE BAR */}
      </div>
    );
  }
}

export default dashboard;
