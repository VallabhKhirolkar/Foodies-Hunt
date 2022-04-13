import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ConsumerRatingsReviews extends React.Component {

    constructor(props){
        super(props)
        this.state={
            messid: "",
            regid: "",
            rating:"",
            review:"",
            msg:""
        }
    }

    handleInput=(ev)=>
    {
        
        const nm = ev.target.name;
        const val = ev.target.value;
         
        this.setState({[nm]: val});

        this.setState({messid : JSON.parse(localStorage.getItem("loggedinusercon")).messid.messid.messid });
        this.setState({regid : JSON.parse(localStorage.getItem("loggedinusercon")).regid} );

    }

  
    submitForm=(ev)=>
    {
        ev.preventDefault();
        alert("sending reviews");
       
        const reqData = 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                review: this.state.review,
                rating: this.state.rating,
                messid:this.state.messid,
                regid:this.state.regid
               
            })
            //these keys will be used on server side
        }

        
        fetch("http://localhost:8080/reviews",reqData)
        .then(resp => resp.json())
        .then(data => { if(data != 0)
            
                         this.setState({msg: "Added Successfully "})
                
                        else

                        this.setState({msg: "Failed "})
                    })

    }

  render() 
  {
    return (
    <div  style={{backgroundImage: 
        "url('images/gallery_10.jpg')",
               height:'100vh',
               marginTop:'-10px',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               textAlign:"center"
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
            <br/> 
    <Container>
      <Form>
        <Form.Group controlId="form.Email">
            <Form.Label style={{color:"white"}}>Enter Ratings</Form.Label>
            <Form.Control type="number" name="rating" placeholder="0/5" onChange={this.handleInput}/>
        </Form.Group>
        <br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label style={{color:"white"}}>Reviews</Form.Label>
            <Form.Control as="textarea"  name="review" rows={3} placeholder="Add Some Reviews..." onChange={this.handleInput}/>
        </Form.Group>
        <br/>
        <Button bsStyle="success" type="button" value="submit" onClick={this.submitForm}  >Submit</Button>
        <p  style={{color:"white"}}> {this.state.msg} </p>
      </Form>
    </Container> 
    </div>
    );
  }
}
       


export default ConsumerRatingsReviews; 