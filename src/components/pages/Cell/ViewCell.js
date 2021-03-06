import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from "react-toastify";
import { Header, SideBar, Breadcrumb, firestore } from "../../partials";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { handleError } from "../../util";


const ViewCell = () => {
    const [cells, setCells] = useState([]);

    useEffect(()=> {
         document.getElementById("cell").classList.add("active");
         fetchCells();
    },[]);

    const fetchCells = async () => {
        await firestore.collection('cells')
        .onSnapshot((querySnapshot) => {
          const results = [];
          querySnapshot.forEach((doc) => {
            results.push(doc.data());
          });
          // load this in redux
          setCells(results);
        }, handleError);
    }

        return (
            <React.Fragment>
                <Helmet><title>View Cell Locations</title></Helmet>
                <Header />
               

                <div className="page-content d-flex align-items-stretch">
                    <SideBar />
                    <div className="content-inner">
                           
                            <div className="page-content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <Breadcrumb crumbItem={'Home'} crumb={'Cell'} />
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    
                                                    <Button variant="contained" color="secondary">Back</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Home Cell</h5>
                                    
                                                        <div className="row">  
                                                            <div className="col-md-12">
                                                               
                                                                <div className="table-responsive">

                                                                            
                                                                        <table id="mytable" className="table table-bordred table-striped">
                                                                            
                                                                            <thead>
                                                                            
                                                                            <th><input type="checkbox" id="checkall" /></th>
                                                                            <th>Coordinator</th>
                                                                                <th>Address</th>
                                                                                <th>Phone</th>
                                                                                <th>Email</th>
                                                                                <th>City</th>
                                                                                <th>Edit</th>
                                                                                
                                                                                <th>Delete</th>
                                                                            </thead>
                                                                                <tbody>
                                                                                {cells.map((cell)=> {
                                                                                    return (
                                                                                    <tr key={cell.id}> 
                                                                                        <td><input type="checkbox" className="checkthis" /></td>
                                                                                        <td>{cell.coordinator}</td>
                                                                                        <td>{cell.address}</td>
                                                                                        <td> {cell.phone}</td>
                                                                                        <td>{cell.email}</td>
                                                                                        <td> {cell.state} </td>
                                                                                        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="fa fa-pencil-alt"></span></button></p></td>
                                                                                        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="fa fa-trash"></span></button></p></td>
                                                                                    </tr>
                                                                                    
                                                                                    )
                                                                                })}
                                                                                  
                                                                            </tbody>
                                                                                    
                                                                        </table>

                                                                    <div className="clearfix"></div>
                                                                        {/* pagination */}
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>

                                                   
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <ToastContainer />
                </div>


                <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                        <h4 class="modal-title custom_align" id="Heading">Edit Your Detail</h4>
                    </div>
                        <div class="modal-body">
                        <div class="form-group">
                        <input class="form-control " type="text" placeholder="Mohsin" />
                        </div>
                        <div class="form-group">
                        
                        <input class="form-control " type="text" placeholder="Irshad"/>
                        </div>
                        <div class="form-group">
                        <textarea rows="2" class="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"></textarea>
                    
                        
                        </div>
                    </div>
                        <div class="modal-footer ">
                        <button type="button" class="btn btn-warning btn-lg" style={{width: '100%' }}><span class="glyphicon glyphicon-ok-sign"></span> Update</button>
                    </div>
                        </div>

                </div>
                    
                    </div>
                    
    
    
                <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
      <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h4 class="modal-title custom_align" id="Heading">Delete this entry</h4>
      </div>
          <div class="modal-body">
       
       <div class="alert alert-danger"><span class="glyphicon glyphicon-warning-sign"></span> Are you sure you want to delete this Record?</div>
       
      </div>
        <div class="modal-footer ">
        <button type="button" class="btn btn-success" ><span class="glyphicon glyphicon-ok-sign"></span> Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> No</button>
      </div>
        </div>
 
  </div>
    </div>

            </React.Fragment>
        );

}


export default ViewCell;