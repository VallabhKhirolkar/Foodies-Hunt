import {Link} from 'react-router-dom';
import ConsumerHome from './ConsumerHome';
import './style.css';


export default function ConsumerProfile()
{
  
    return(
        
        <div style={{backgroundImage: 
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
            <br/><br/>

            <h2 className='info'  style={{color:"white"}}>--Profile--</h2>
            <br/>
          <h4 className='info'  style={{color:"white"}} > Registration ID :  {JSON.parse(localStorage.getItem("loggedinusercon")).regid} </h4>
          <h4  className='info'style={{color:"white"}}>   Name :  {JSON.parse(localStorage.getItem("loggedinusercon")).consumername} </h4>
          <h4 className='info' style={{color:"white"}}> Contact No:  {JSON.parse(localStorage.getItem("loggedinusercon")).contactno} </h4>
          <h4 className='info' style={{color:"white"}}> City :  {JSON.parse(localStorage.getItem("loggedinusercon")).currentcity} </h4>
          <h4 className='info' style={{color:"white"}}>  Mail Id :  {JSON.parse(localStorage.getItem("loggedinusercon")).mailid} </h4>

        </div>


    )
    
}
