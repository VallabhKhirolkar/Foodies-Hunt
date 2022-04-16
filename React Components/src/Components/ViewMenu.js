import React from "react";
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';



export default class ViewMenu extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            vegmenu: {},
            nonvegmenu:{},
            flag: false
        }
    }


    componentDidMount=()=>{

        fetch("http://localhost:8080/gettodaysvegmenu?id="+JSON.parse(localStorage.getItem("loggedinusercon")).messid.messid.messid)
        .then(res => res.json())
        .then(data => this.setState({vegmenu:data}))
        console.log(this.state.vegmenu);

        if(JSON.parse(localStorage.getItem("loggedinusercon")).messid.messtype === "Both")
        {
        fetch("http://localhost:8080/gettodaysnonvegmenu?id="+JSON.parse(localStorage.getItem("loggedinusercon")).messid.messid.messid)
        .then(res => res.json())
        .then(nonvegdata => this.setState({nonvegmenu:nonvegdata}))
        console.log(this.state.nonvegmenu);
        }

       
  
    }
    

    render(){
        return(
                <div className="info" style={{backgroundImage: 
                    "url('images/gallery_10.jpg')",
                           height:'100vh',
                           marginTop:'-10px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           textAlign:"center"
                           }}>

               <nav class="navbar navbar-default">
                 <ul className="nav nav-tabs">
                 <li ><img src='images/logo.jpg' height="40" width="40"/> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{color:"blue"}}><b>Profile</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/SelectMess" style={{color:"blue"}}><b>Select Mess</b></Link> </li>
           
                 <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{color:"blue"}}><b>Available Mess Details</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ViewMenu" style={{color:"blue"}}><b>View Menu</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ViewAllVegMenu" style={{color:"blue"}}><b>All Veg Menu</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ViewAllNonVegMenu" style={{color:"blue"}}><b>All Non Veg Menu</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerFeedback" style={{color:"blue"}}><b>Provide Feedback</b></Link> </li>
                 </ul>
                </nav> 

                <br/>
                    <h3  style={{color:"white"}}>  Todays Veg Menu </h3>
                    <Table striped bordered hover responsive="md">
                        <thead  style={{color:"Tomato"}}>
                            <tr>
                            <td><b>Status</b></td>
                            <td><b>Curry 1</b></td>
                            <td><b>Curry 2</b></td>
                            <td><b>Bread Type</b></td>  
                            <td><b>Rice</b></td>  
                            <td><b>Starter</b></td>  
                            <td><b>Sweet Dish</b></td>
                            <td><b>Thali Type</b></td>
                            <td><b>Special Dish</b></td>     
                            </tr>
                         </thead> 
                                    <tbody>
                                    <tr>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.menustatus}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.curry1}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.curry2}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.breadtype}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.rice}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.starter}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.sweetdish}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.thalitype}</td>
                                        <td  style={{color:"white"}}>{this.state.vegmenu.specialdish}</td>
                                    </tr>
                                    </tbody>
                            
                    </Table>
                    <br/><br/>
                         { (() => { 

                                   
                             
                             if(this.state.nonvegmenu !== null)
                            {
                                return(
                               <div>
                               <h3  style={{color:"white"}}>  Todays NonVeg Menu </h3>
                               <Table striped bordered hover responsive="md">
                                   <thead  style={{color:"Tomato"}}>
                                       <tr>
                                       <td><b>Status</b></td>
                                       <td><b>Curry </b></td>
                                       <td><b>Fry</b></td>
                                       <td><b>Bread Type</b></td>  
                                       <td><b>Rice</b></td>  
                                       <td><b>Cold Drinks</b></td>     
                                       </tr>
                                    </thead>
                                   
                                               <tbody>
                                               <tr>
                                                   <td  style={{color:"white"}}>{this.state.nonvegmenu.menustatus}</td>
                                                   <td  style={{color:"white"}}>{this.state.nonvegmenu.curry}</td>
                                                   <td  style={{color:"white"}}>{this.state.nonvegmenu.fry}</td>
                                                   <td  style={{color:"white"}}>{this.state.nonvegmenu.breadtype}</td>
                                                   <td  style={{color:"white"}}>{this.state.nonvegmenu.rice}</td>
                                                   <td  style={{color:"white"}}>{this.state.nonvegmenu.colddrink}</td>
                                               </tr>
                                               </tbody>
                                       
                               </Table>
                               </div>
                            )  }
                            
                                }) ()}
                            
                </div>
                )
    }
}