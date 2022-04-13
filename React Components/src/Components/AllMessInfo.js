import React from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AllMessInfo extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            allmess: []
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/getallmess")
        .then(res => res.json())
        .then(data => this.setState({allmess:data}))
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
     
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{color:"blue"}}><b>Profile</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/SelectMess" style={{color:"blue"}}><b>Select Mess</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{color:"blue"}}><b>Available Mess Details</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ViewMenu" style={{color:"blue"}}><b>View Menu</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerFeedback" style={{color:"blue"}}><b>Provide Feedback</b></Link> </li>
                 </ul>
            </nav>  
                    <br/><br/>
                    <h3  style={{color:"white"}}>-- Available Messes Information --</h3>
                    <br/><br/>
                    <Table striped bordered hover responsive="md">
                        <thead  style={{color:"white"}}> 
                            <tr>
                            <td><b>Mess ID</b></td>
                            <td><b>Mess Name</b></td>
                            <td><b>Mess Type</b></td>
                            <td><b>Mess Area</b></td>
                            <td><b>Mess Owner Name</b></td>
                            <td><b>Mess Owner Contact No</b></td>      
                            </tr>
                         </thead>
                         
                        {
                            this.state.allmess.map((v)=>{
                                return(
                                    <tbody >
                                    <tr  >
                                        <td style={{color:"white"}}>{v.messid.messid}</td>
                                        <td style={{color:"white"}}>{v.messname}</td>
                                        <td style={{color:"white"}}>{v.messtype}</td>
                                        <td style={{color:"white"}}>{v.area}</td>
                                        <td style={{color:"white"}}>{v.messid.ownername}</td>
                                        <td style={{color:"white"}}>{v.messid.contactno}</td>
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