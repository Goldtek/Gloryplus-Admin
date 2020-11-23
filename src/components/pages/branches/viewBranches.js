import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import { handleError } from "../../util";

import './style.css';

function ViewBranch() {
    const [branches, setBranches] = useState([]);
    useEffect(() => {
      document.getElementById("branch").classList.add("active");
    //  await subscribeCollection("branches", subscription);
    fetchBranches();
    },[]);

    const subscription = (data) => {
        console.log('data',data);
       setBranches(data);
      };

    const fetchBranches = async () => {
        const ref = await firestore.collection('branches')
        .onSnapshot((querySnapshot) => {
          const results = [];
          querySnapshot.forEach((doc) => {
            results.push(doc.data());
          });
          setBranches(results);
        }, handleError);
    }

    return (
        
        <div className="page">
            <Helmet>
            <title>View Branches</title>
            </Helmet>
            <Header />
    
            {/* SIDER BAR PART */}
            <div className="page-content d-flex align-items-stretch">
            <SideBar />
    
                <div className="content-inner " style={{backgroundColor: 'white'}}>
                    <PageHeaderTitle title="Church Branch" currpg="branch" />
                   
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-box clearfix ">
                                <div className="table-responsive">
                                    <table className="table user-list">
                                        <thead>
                                            <tr>
                                                <th><span>Branch Pastor</span></th>
                                                <th><span>Address</span></th>
                                                <th><span>City</span></th>
                                                <th className="text-center"><span>State</span></th>
                                                <th><span>Country</span></th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        
                                            <tbody>
                                                {branches.map((branch) => ( 
                                                <tr>
                                                   
                                                <td>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
                                                    <a href="#" className="user-link">{branch.name}</a>
                                                </td>
                                                <td>
                                                    {branch.address}
                                                </td>
                                                <td>
                                                {branch.city} 
                                                </td>
                                                <td className="text-center">
                                                <span className="label label-warning">{branch.state} </span>
                                                </td>
                                                <td>
                                                    {branch.country}
                                                </td>
                                                <td style={{width: "20%" }}>
                                                    <a href="#" className="table-link">
                                                        <span className="fa-stack">
                                                            <i className="fa fa-square fa-stack-2x"></i>
                                                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                    <a href="#" className="table-link">
                                                        <span className="fa-stack">
                                                            <i className="fa fa-square fa-stack-2x"></i>
                                                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                    <a href="#" className="table-link danger">
                                                        <span className="fa-stack">
                                                            <i className="fa fa-square fa-stack-2x"></i>
                                                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                </td>
                                            </tr>
                                            ))}
					                    </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}  

export default ViewBranch;