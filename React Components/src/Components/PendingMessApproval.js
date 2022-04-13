import React from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class PendingMessApproval extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            allpending: []
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/getallpendingmessapprovals")
        .then(res => res.json())
        .then(data => this.setState({allpending:data}))
    }

    render(){
        return(
                <div style={{backgroundImage: 
                    "url('images/gallery_10.jpg')",
                           height:'100vh',
                           marginTop:'-10px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat'
                           }}>
               
               <nav class="navbar navbar-default">
                 <ul className="nav nav-tabs">
     
                 <li className="nav-item"><Link className="nav-link" to="/AdminHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/PendingApprovals" style={{color:"blue"}}><b>Pending Mess Approvals</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ProvideApproval" style={{color:"blue"}}><b>Provide Mess Approval </b></Link> </li>
                
                 </ul>
            </nav>  
               
                    <br/><br/>
                    <h3  style={{color:"white"}}>-- Available Messes Information --</h3>
                    <br/><br/>
                    <Table striped bordered hover responsive="md">
                        <thead  style={{color:"white"}}> 
                            <tr>
                            <td><b>Mess ID</b></td>
                            <td><b>Mess Owner Name</b></td>
                            <td><b>Mess Owner Contact No</b></td>   
                            <td><b>Mess Owner ID Proof </b></td>  
                            <td><b>Mess License No </b></td>  
                            </tr>
                         </thead>
                         
                        {
                            this.state.allpending.map((v)=>{
                                return(
                                    <tbody >
                                    <tr  >
                                        <td style={{color:"white"}}>{v.messid}</td>
                                        <td style={{color:"white"}}>{v.ownername}</td>
                                        <td style={{color:"white"}}>{v.contactno}</td>
                                        <td style={{color:"white"}}>{v.idproof}</td>
                                        <td style={{color:"white"}}>{v.licenseno}</td>
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