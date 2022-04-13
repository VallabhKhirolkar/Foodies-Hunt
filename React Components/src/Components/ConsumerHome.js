import React from 'react';

import mystore from './Store';
import { useNavigate } from "react-router";
import  { useState,useEffect } from "react";

import {Link} from 'react-router-dom';


/*
class ConsumerHome extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return ( 
                        <div>
                            <h1>Welcome </h1>
                     <h2> Hello {JSON.parse(localStorage.getItem("loggedinuser")).consumername} </h2>
                    
                     </div>
        )
    }
}

export default ConsumerHome; */

export default function ConsumerHome()
{
    let navigate = useNavigate();

   
 
    const logout=()=>
    {
        mystore.dispatch({type:'LOGGEDOUT'});

        localStorage.removeItem("loggedinusercon");

        localStorage.removeItem("loggedinuservegmenu");
        
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
     
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{color:"blue"}}><b>Profile</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/SelectMess" style={{color:"blue"}}><b>Select Mess</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{color:"blue"}}><b>Available Mess Details</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ViewMenu" style={{color:"blue"}}><b>View Menu</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerFeedback" style={{color:"blue"}}><b>Provide Feedback</b></Link> </li>
                 <li className="nav-item" onClick={logout} ><Link className="nav-link"to="/Homepage" style={{color:"blue"}}><b>Log Out</b></Link> </li>
      
                 </ul>
            </nav>  
            
            <br/><br/>
            <h5 style={{color:"white",textAlign:"right"}}> Your ID : {JSON.parse(localStorage.getItem("loggedinusercon")).regid} </h5> 
            <h1 style={{color:"white"}}>  Welcome {JSON.parse(localStorage.getItem("loggedinusercon")).consumername} </h1> 
           
           
            <br/> <br/>


            { (() => { 

                if(JSON.parse(localStorage.getItem("loggedinusercon")).messid != null)
                {
                    return(
                    <div>
                         <h3 style={{color:"white"}}> Registered Mess Name: {JSON.parse(localStorage.getItem("loggedinusercon")).messid.messname} </h3> 

                         <h3 style={{color:"white"}}> Registered Mess Type: {JSON.parse(localStorage.getItem("loggedinusercon")).messid.messtype} </h3> 
                     </div>
                    )
                }
                }) ()}  

            <br/><br/>
            <h4 style={{color:"white"}}>Enjoy Our Service...</h4>
            <br/>
            

        </div>

    )
}

