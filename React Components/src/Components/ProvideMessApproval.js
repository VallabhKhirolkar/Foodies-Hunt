import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ProvideMessApproval extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state=
            {
               messid:"",
               msg:""
                   
            }
    }

        handleInput=(ev)=>
        {
            const nm = ev.target.name;
            let val;
    
            val = ev.target.value; 

            this.setState({[nm]: val}); 

        }
    
    submitForm1=(ev)=>
    {
        ev.preventDefault();
        alert("Processing.......");
        console.log(this.state);
       

        fetch("http://localhost:8080/provideapprovalformess?messid="+this.state.messid)
        .then(resp => resp.json())
        .then(data => { if(data != 0)
            
                         this.setState({msg: "Approval provided  "})
                
                        else

                        this.setState({msg: "Approval Not Provided  "})
                    })
    
    }



    submitForm2=(ev)=>
    {
        ev.preventDefault();
        alert("Processing.......");
        console.log(this.state);
       

        fetch("http://localhost:8080/truncatepreviousmenus")
        .then(resp => resp.json())
        .then(data => { if(data != 0)
            
                         this.setState({msg: " Deleted Successfully  "})
                
                        else

                        this.setState({msg: " Deletion Failed "})
                    })
    
    }
   
        render()
        {
                return(
                <div style={{backgroundImage: 
                    "url('images/gallery_10.jpg')",
                           height:'100vh',
                           marginTop:'-10px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat'
                           }} >

                <nav class="navbar navbar-default">
                 <ul className="nav nav-tabs">
     
                 <li className="nav-item"><Link className="nav-link" to="/AdminHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/PendingApprovals" style={{color:"blue"}}><b>Pending Mess Approvals</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ProvideApproval" style={{color:"blue"}}><b>Provide Mess Approval </b></Link> </li>
                
                 </ul>
                  </nav>  
                <br/>           
                <h3 style={{color:"white"}}> -- Approval Page -- </h3>
                <br/>
                <form style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
                    <table>
                    <tr>
                        <td style={{color:"white"}}>Enter Mess ID : </td>  
                        <td> <input type="text" name="messid" placeholder="--Mess ID--" 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                        
                    <tr>
                        <td><Button bsStyle="success" type="submit" value="Approve" onClick={this.submitForm1} > Approve </Button></td>
                        <td><Button bsStyle="success" type="submit"  onClick={this.submitForm2} > Delete previous menus</Button></td>
                    </tr>
                </table>
                </form>
                           
               <p  style={{color:"white"}}> {this.state.msg} </p>
    </div>
    )
}

}
export default ProvideMessApproval; 