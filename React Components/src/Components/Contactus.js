import React from "react";


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
            <header><h1 style={{textDecorationLine: 'underline'}}>Contact Us</h1></header>
            <hr/>
            {/*<h1 style={{color:"Tomato",textDecorationLine: 'underline'}}> Foodies Hunt </h1>*/}
            <h3>--Email Address--<br/><a href="admin.foodiesHunt@gmail.com">admin.foodiesHunt@hotmail.com</a></h3><br/>

            <h3 style={{color:"whitesmoke"}}>--Address--</h3>
            
              <h4 style={{color:"whitesmoke"}}>Office No:2, 1st Floor, Gokhale Sanchit, Above Hotel Aamaya, <br/>
             BMCC Road, Deccan Gymkhana,  <br/>
             Pune: 411004 Maharashtra, INDIA</h4>
             <h3 style={{color:"blue",textDecorationLine: 'underline'}}>For any kind of queries related to this sytem do visit to our office location.</h3>

             <h3 style={{color:"whitesmoke"}}>--Contact no--</h3>
              <p style={{color:"whitesmoke"}}><b>Mahesh - 9403186042.</b></p>
              <p style={{color:"whitesmoke"}}><b>Mitesh - 9970653683.</b></p>
              <p style={{color:"whitesmoke"}}><b>Onkar - 7774861209.</b></p>
              <p style={{color:"whitesmoke"}}><b>Vallabh - 8180013401.</b></p>
            
        <footer><h3></h3></footer>
        <br/><br/>
        <br/>
        <hr></hr>
        
        </div>
        )
    }
}

export default Contactus;