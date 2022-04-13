import {Link} from 'react-router-dom';




export default function ProviderProfile()
{
  
    return(
        
        <div style={{backgroundImage: 
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

            <br/> <br/>
            <h2 style={{color:"white"}}>-- Profile --</h2> 
            <br/><br/>
          <h4 style={{color:"white"}}> Mess ID :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.messid} </h4>
          <h4 style={{color:"white"}}> Name :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.ownername}  </h4>
          <h4 style={{color:"white"}}> Contact No:  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.contactno} </h4>
          <h4 style={{color:"white"}}>Id Proof :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.idproof}  </h4>
          <h4 style={{color:"white"}}> License No :  {JSON.parse(localStorage.getItem("loggedinusermess")).messid.licenseno} </h4>

        </div>


    )
    
}
