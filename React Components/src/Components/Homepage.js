import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';
  
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
        <br/> <br/> <br/> <br/>

        <img src='images/logo.jpg' height="80" width="80"/>
      <h1 className='info' style={{textAlign:"center",color:"white"}}> Foodies Hunt Portal </h1>
  
     
      <br/><br/>
     


      </div>
    );
  }
}
   
export default Homepage;