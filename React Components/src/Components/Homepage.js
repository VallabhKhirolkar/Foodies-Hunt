import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
  
class Homepage extends Component {


  render() {
    const myStyle={
        backgroundImage: 
 "url('images/HomePageImage.jpg')",
        height:'100vh',
        marginTop:'-50px',
        fontSize:'20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <br/> <br/>
        <h1 style={{textAlign:"left",color:"white"}}> Foodies Hunt Portal </h1>
      <br/><br/>
     


      </div>
    );
  }
}
   
export default Homepage;