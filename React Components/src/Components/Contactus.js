import React from "react";
import './style.css';


class Contactus extends React.Component{

    
    render(){
        return(
        <div style={{backgroundImage: 
            "url('./images/gallery_6.jpeg')",
                   height:'120vh',
                   marginTop:'-50px',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                   }}> 
                <br/> <br/>                            
            <header><h1 className="info" style={{textDecorationLine: 'underline'}}>Contact Us</h1></header>
            <hr/>
            {/*<h1 style={{color:"Tomato",textDecorationLine: 'underline'}}> Foodies Hunt </h1>*/}
            <h3 className="info">--Email Address--<br/><a href="admin.foodiesHunt@gmail.com">admin.foodiesHunt@gmail.com</a></h3><br/>

            <h3 className="info">--Address--</h3>
            
              <h4 className="info">Office No:2, 1st Floor, Gokhale Sanchit, Above Hotel Aamaya, <br/>
             BMCC Road, Deccan Gymkhana,  <br/>
             Pune: 411004 Maharashtra, INDIA</h4>
             <h3 className="info" style={{color:"blue",textDecorationLine: 'underline'}}>For any kind of queries related to this sytem do visit to our office location.</h3>

             <h3 className="info" >--Contact no--</h3>
              <p className="info" ><b>Mahesh - 9403186042.</b></p>
              <p className="info" ><b>Mitesh - 9970653683.</b></p>
              <p className="info"><b>Onkar - 7774861209.</b></p>
              <p className="info" ><b>Vallabh - 8180013401.</b></p>
            
        <footer><h3></h3></footer>
        <br/><br/>
        <br/>
        <hr></hr>
        
        </div>
        )
    }
}

export default Contactus;