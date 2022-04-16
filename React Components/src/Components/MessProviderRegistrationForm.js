import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

class MessProviderRegistrationForm extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state=
            {
                username:"",
                password:"",
                ownername:"",
                contactno:"",
                idproof:"",
                licenseno:"",
                city:"",
                area:"",
                messtype:"",
                messname:"",
                msg:""
            }
    }

        handleInput=(ev)=>{
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
            ownername: this.state.ownername,
            contactno: this.state.contactno,
            idproof: this.state.idproof,
            licenseno:this.state.licenseno,
            city: this.state.city,
            area:this.state.area,
            messtype:this.state.messtype,
            messname:this.state.messname,
        })
        //these keys will be used on server side
    }
    let flag=false;

    if( this.state.username !="" && this.state.password != "" && this.state.ownername !="" && this.state.contactno != ""
        && this.state.idproof !="" && this.state.licenseno != "" && this.state.city !="" && this.state.area != "" 
        && this.state.messtype !="" && this.state.messname != "" )
    {flag=true;}
            console.log(flag);
    if(flag===true){
        fetch("http://localhost:8080/registerprovider",reqData)
        .then(resp => resp.json())
        .then(data =>  { if(data.length != 0)
                    {
                         this.setState({msg: " Registered Successfully "})
                    }
                    else
                    {
                        this.setState({msg: " Failed to Register "})
                    }
                    
                })
            }
            else
            {
                this.setState({msg: " All fields are compulsory "})
            }
  
   }
        
        render()
        {
                return(
                <div className='info' style={{
                    backgroundImage: 
                    "url('images/gallery_2.jpeg')",
                           height:'160vh',
                           marginTop:'-50px',
                           fontSize:'17px',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat', 
                }}>
                <br/><br/><br/>
                <h3  style={{color:"blue"}}> --Mess Provider Registration Form-- </h3>
                <br/>
                <form style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <table>
                    <tr>
                        <td style={{color:"white"}}><b>  Enter Username : </b> </td>
                        <td> <input type="text" name="username" placeholder="--Username--" value={this.state.username}
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                     <tr>
                     <td style={{color:"white"}}><b> Enter Password :</b></td>
                        <td> <input type="password" name="password"  placeholder="--Password--" value={this.state.password} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b> Enter Owner Full Name :</b></td>
                        <td> <input type="text" name="ownername" placeholder="--Fullname--" value={this.state.ownername}
                        onChange={this.handleInput} required/></td>
                         
                    </tr>
                    <br/>
                     <tr>
                     <td style={{color:"white"}}><b> Enter Contact No :</b></td>
                        <td> <input type="number" name="contactno"  placeholder="--ConatactNo--" value={this.state.contactno} 
                        onChange={this.handleInput} maxLength="10" required /></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b>  Enter ID Proof :</b></td>
                        <td> <input type="text" name="idproof" placeholder="--(Aadhar/PAN/Voting ID)--" value={this.state.idproof}
                        onChange={this.handleInput} required/></td>
                         
                    </tr>
                    <br/>
                     <tr>
                     <td style={{color:"white"}}><b>  Enter Shop License No :</b></td>
                       
                        <td> <input type="text" name="licenseno" placeholder='--License No--' value={this.state.licenseno} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b>  Enter City :</b></td>
                        <td> <input type="text" name="city" placeholder='--Current Address--' value={this.state.city} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b> Enter Area :</b></td>
                        <td> <input type="text" name="area" placeholder='--Current Area--' value={this.state.area} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b>  Enter Mess Type :</b></td>
                        <td  style={{color:"white"}}> <input type="radio" name="messtype" value="Pure Veg" onChange={this.handleInput} required/> Pure Veg<br/>
                         <input type="radio" name="messtype" value="Both" onChange={this.handleInput} required/> Veg/Non-Veg
                         </td>  
                    </tr>
                    <br/>
                    <tr>
                    <td style={{color:"white"}}><b>  Enter Mess Name :</b></td>
                        <td> <input type="text" name="messname" placeholder='--Mess Name--' value={this.state.messname} 
                        onChange={this.handleInput} required/></td>
                        
                    </tr>
                    <br/>
                
                        <tr> 
                        <td></td>
                        <td  style={{color:"white"}}> <input type="checkbox" name="flag" value="agree"
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
export default MessProviderRegistrationForm;