import React from 'react';

import mystore from './Store';
import { useNavigate } from "react-router";
import  { useState,useEffect } from "react";

import {Link} from 'react-router-dom';


export default function AdminHome()
{
    let navigate = useNavigate();

   
 
    const logout=()=>
    {
        mystore.dispatch({type:'LOGGEDOUT'});

    
        navigate('/Homepage');
    }
   
  


    return(
        <div style={{backgroundImage: 
            "url('images/gallery_10.jpg')",
                   height:'100vh',
                   marginTop:'-10px',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                   }}>

            {/* <img src='' height='100' width='100' /> */}
            <nav class="navbar navbar-default">
                 <ul className="nav nav-tabs">
     
                 <li className="nav-item"><Link className="nav-link" to="/AdminHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/PendingApprovals" style={{color:"blue"}}><b>Pending Mess Approvals</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ProvideApproval" style={{color:"blue"}}><b>Provide Mess Approval </b></Link> </li>
                 <li className="nav-item" onClick={logout} ><Link className="nav-link"to="/Homepage" style={{color:"blue"}}><b>Log Out</b></Link> </li>
      
                 </ul>
            </nav>  
            
            <br/><br/>
        
            <h1 style={{color:"white"}}>  Admin Page </h1> 
           
           

            <br/><br/>
            
            <br/>
            

        </div>

    )
}