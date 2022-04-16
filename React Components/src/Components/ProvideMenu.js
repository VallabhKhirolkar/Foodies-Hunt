
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import './style.css';

export default function ProvideMenu()
{

    let navigate = useNavigate();

    const navigate1=()=>
    {
        
        navigate('/ProvideVegMenu');
    }

    const navigate2=()=>
    {
        
        navigate('/ProvideNonVegMenu');
    }
   
        return (
                    <div  style={{backgroundImage: 
                        "url('./images/thali.jpg')",
                               height:'130vh',
                               marginTop:'-10px',
                               fontSize:'15px',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat'
                               }}>
                <nav class="navbar navbar-default">
                 <ul className="nav nav-tabs">
                 <li ><img src='images/logo.jpg' height="40" width="40"/> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ProviderHome" style={{color:"blue"}}><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/ProviderProfile" style={{color:"blue"}}><b>Profile</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{color:"blue"}}><b>Provide Menu</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{color:"blue"}}><b>Consumer List</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{color:"blue"}}><b>View Feedback</b></Link> </li>
            
                 </ul>
                 <br/> <br/> 
            </nav>   
               <h1 className='info' style={{textAlign:"center",color:"white"}}> -- Provide Menu -- </h1>
                        <hr/>
                        <br/>
                        <p className='info' style={{color:"white",textAlign:"center"}}>*  Menu Type *</p>

                            <Dropdown >

                            <Dropdown.Toggle variant="success">

                            Select Menu Type

                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                            <Dropdown.Item  onClick={navigate1}>

                               Veg Menu

                            </Dropdown.Item>

                            <Dropdown.Item  onClick={navigate2}>

                               Non-Veg Menu

                            </Dropdown.Item>

                            </Dropdown.Menu>

                            </Dropdown>
                            <br/>
                            <hr/>
                            
                         </div>
                                    )
                                
    }


