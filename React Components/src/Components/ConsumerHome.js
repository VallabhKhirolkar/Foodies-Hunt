import React from 'react';

import mystore from './Store';
import { useNavigate } from "react-router";
import  { useState,useEffect } from "react";
import './style.css';
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
                   height:'120vh',
                   marginTop:'-10px',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                   }}>

            {/* <img src='' height='100' width='100' /> */}
            <nav class="navbar navbar-default" >
                 <ul className="nav nav-tabs">
                 <li ><img src='images/logo.jpg' height="40" width="40"/> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" ><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile"><b>Profile</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/SelectMess" ><b>Select Mess</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" ><b>Available Mess Details</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ViewMenu" ><b>View Menu</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ViewAllVegMenu" ><b>All Veg Menu</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ViewAllNonVegMenu" ><b>All Non Veg Menu</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerFeedback" ><b>Provide Feedback</b></Link> </li>
                 <li className="nav-item" onClick={logout} ><Link className="nav-link"to="/Homepage" ><b>Log Out</b></Link> </li>
      
                 </ul>
            </nav>  
            
            <br/><br/>
            <h5 className='info' style={{color:"white",textAlign:"right"}}> Your ID : {JSON.parse(localStorage.getItem("loggedinusercon")).regid} </h5> 
            <h1 className='info' style={{color:"white"}}>  Welcome {JSON.parse(localStorage.getItem("loggedinusercon")).consumername} </h1> 
           
           
            <br/> <br/>


            { (() => { 

                if(JSON.parse(localStorage.getItem("loggedinusercon")).messid != null)
                {
                    return(
                    <div>
                         <h3 className='info' style={{color:"white"}}> Registered Mess Name: {JSON.parse(localStorage.getItem("loggedinusercon")).messid.messname} </h3> 

                         <h3 className='info' style={{color:"white"}}> Registered Mess Type: {JSON.parse(localStorage.getItem("loggedinusercon")).messid.messtype} </h3> 
                     </div>
                    )
                }
                }) ()}  

            <br/><br/>
            <h4 className='info' style={{color:"white"}}>Enjoy Our Service...</h4>
            <img src='images/logo.jpg' height="80" width="80"/>
            <br/>
            

        </div>

    )
}

