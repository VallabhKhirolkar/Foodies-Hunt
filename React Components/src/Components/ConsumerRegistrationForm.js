import React from 'react';
import { Button } from 'react-bootstrap';

class ConsumerRegistrationForm extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state=
            {
                username:"",
                password:"",
                consumername:"",
                contactno:"",
                mailid:"",
                currentcity:"",
                
            }
    }

        handleInput=(ev)=>
        {
            const type = ev.target.type;
            const nm = ev.target.name;
            let val;
            if(type === "checkbox")
            val = ev.target.checked;
            else
            val = ev.target.value; 

            this.setState({[nm]: val});

        }
    
    submitForm=(ev)=>
    {
        ev.preventDefault();
        alert("Submitting Your Form.......");
        console.log(this.state);
        const reqData = 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                consumername: this.state.consumername,
                contactno: this.state.contactno,
                mailid: this.state.mailid,
                currentcity:this.state.currentcity
            })
            //these keys will be used on server side
        }

        fetch("http://localhost:8080/registerconsumer",reqData)
        .then(resp => resp.json())
        .then(data => this.setState({msg: " Registered Successfully "}))
    
    }
   
        render()
        {
                return(
                <div style={{
                    backgroundImage: 
                    "url('images/gallery_2.jpeg')",
                           height:'120vh',
                           marginTop:'-50px',
                           fontSize:'17px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat', 
                }}>
                <br/><br/><br/>
                <h3 style={{color:"blue"}}> --Consumer Registration Form-- </h3>
                <br/>
                <form style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
                    <table>
                    <tr>
                    <td style={{color:"white"}}><b> Enter Username :</b>  </td>
                        <td> <input type="text" name="username" placeholder="--Username--" value={this.state.username}
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                     <tr>
                        <td style={{color:"white"}}><b> Enter Password : </b> </td>
                        <td> <input type="password" name="password"  placeholder="--Password--" value={this.state.password} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b> Enter Full Name :</b> </td>
                        <td> <input type="text" name="consumername" placeholder="--Fullname--" value={this.state.consumername}
                        onChange={this.handleInput} required/></td>
                         
                    </tr>
                    <br/>
                     <tr>
                     <td style={{color:"white"}}><b> Enter Contact No : </b> </td>
                        <td> <input type="number" name="contactno"  placeholder="--ConatactNo--" value={this.state.contactno} 
                        onChange={this.handleInput} required /></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b>   Enter Mail ID :</b> </td>
                        <td> <input type="email" name="mailid" placeholder="--Mail--" value={this.state.mailid}
                        onChange={this.handleInput} required/></td>
                         
                    </tr>
                    <br/>
                     <tr>
                     <td style={{color:"white"}}><b>  Enter Current City :</b> </td>
                        <td> <input type="text" name="currentcity" placeholder='--Current Address--' value={this.state.currentcity} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                
                        <tr> 
                        <td></td>
                        <td style={{color:"white"}} > <input type="checkbox" name="flag" value="agree"
                        onChange={this.handleInput} /> I agree </td>
                        </tr>  
                        <br/>
                  
                    <tr>
                        <td></td>
                        <td><Button bsStyle="success" type="submit" value="SUBMIT" onClick={this.submitForm} > SUBMIT</Button></td>
                    </tr>
                    <p style={{color:"white"}}><b>{this.state.msg}</b></p>
   
                </table>
                </form>

                </div>
    )
}

}
export default ConsumerRegistrationForm;