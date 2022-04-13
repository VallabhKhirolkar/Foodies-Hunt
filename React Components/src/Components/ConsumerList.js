import React from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ConsumerList extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            allconsumers: []
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/getallconsumers?messid="+JSON.parse(localStorage.getItem("loggedinusermess")).messid.messid)
        .then(res => res.json())
        .then(data => this.setState({allconsumers:data}))
    }

    render(){
        return(
                <div  style={{backgroundImage: 
                    "url('./images/image1.png')",
                           height:'100vh',
                           marginTop:'-10px',
                           fontSize:'15px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           textAlign : "center"
                           }}>
               <nav class="navbar navbar-default">
                 <ul className="nav nav-tabs">
     
                 <li className="nav-item"><Link className="nav-link" to="/ProviderHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ProviderProfile" style={{color:"blue"}}><b>Profile</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{color:"blue"}}><b>Provide Menu</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{color:"blue"}}><b>Consumer List</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{color:"blue"}}><b>View Feedback</b></Link> </li>
            
                 </ul>
            </nav>   

              
                    <br/><br/>
                    <h3  style={{color:"white"}}>-- All Consumer List --</h3>
                    <br/><br/>
                    <Table striped bordered hover responsive="md">
                        <thead  style={{color:"white"}}> 
                            <tr>
                            <td><b>Consumer ID</b></td>
                            <td><b>Consumer Name</b></td>   
                            <td><b>Contact no</b></td>
                            <td><b>Mail ID</b></td>      
                            </tr>
                         </thead>
                         
                        {
                            this.state.allconsumers.map((v)=>{
                                return(
                                    <tbody>
                                    <tr>
                                        <td style={{color:"white"}}>{v.regid}</td>
                                        <td style={{color:"white"}}>{v.consumername}</td>
                                        <td style={{color:"white"}}>{v.contactno}</td>
                                        <td style={{color:"white"}}>{v.mailid}</td>
                                    </tr>
                                    </tbody> 
                                )
                            })
                        }   
                    </Table> 
                </div>
                )
    }
}