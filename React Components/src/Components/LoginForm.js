import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import mystore from './Store';
/*
class LoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username: "",
            password: "",
            consumer:{},
            mess:{},
            loginerror:""
        }

    }
    handleInput=(ev)=>
    {
        
        const nm = ev.target.name;
        const val = ev.target.value;
         
        this.setState({[nm]: val});

    }

    submitForm=(ev)=>
    {
        ev.preventDefault();
        alert("Logging in.......");
       
        const reqData = 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
               
            })
            //these keys will be used on server side
        }

        fetch("http://localhost:8080/checkLogin",reqData)
        .then(resp => resp.text())
        .then(data => { if(data.length != 0)
                        {
                            const json = JSON.parse(data);
                            console.log(json);
                            if(json.loginid.role === "Consumer")
                            {
                                
                                this.setState({consumer : json});
                                localStorage.setItem("loggedinusercon",JSON.stringify(this.state.consumer));
                               
                            }
                            else if(json.loginid.role === "Provider")
                            {
                                
                                this.setState({mess : json});
                                localStorage.setItem("loggedinusermess",JSON.stringify(this.state.mess));
                            }

                        }
                        else
                        {
                            this.setState({loginerror:" Wrong Id/Pwd.. "});
                        }

                        })
    
    }

    render(){
        return(
        <div >
            <h2>--Login Form--</h2>
            <form style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <table>
                    <tr>
                        <td>User Id : </td>
                        <td><input type="text" name="username" onChange={this.handleInput}/></td>
                    </tr>
                    <tr>
                        <td>Password : </td>
                        <td><input type="password" name="password" onChange={this.handleInput}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <Button bsStyle="success" type="button" value="LOGIN" onClick={this.submitForm} >LOGIN</Button></td>

                    </tr>
                </table>
            </form>

            <p><h2>{this.state.loginerror} </h2></p>

            
             <ul className="nav nav-tabs" style={{display: "flex",justifyContent: "center",alignItems: "center"}}> 

            <li className="nav-item"><a href="/Register">Want to Create New Account ? Click Here...</a> </li>

            </ul>
            
        </div>
        )
    }
}

export default LoginForm;     Using  class method*/

function LoginForm()   // Using Functional Component
{
    let navigate = useNavigate();

   
    
    const[logindata, setLogindata]= useState({
        username:"",
        password:""
        
    });

    const[consumer,setConsumer] = useState({  });

    const[mess,setMess] = useState({ });

    const[admin,setAdmin] = useState({ });

    const[errmsg,setErrmsg] = useState("");

    const handleInput=(ev)=>
    {
       
        setLogindata((logindata)=>({
            ...logindata,
            [ev.target.name]:ev.target.value
       }));

    }

    useEffect(()=>{
      
        localStorage.setItem("loggedinusercon",JSON.stringify(consumer));

        localStorage.setItem("loggedinusermess",JSON.stringify(mess));

        localStorage.setItem("loggedinuseradmin",JSON.stringify(admin));

    });

  
    const submitForm=(ev)=>
    {
        ev.preventDefault();
        alert("Logging in.......");
       
        console.log(logindata);

        const reqData = 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: logindata.username,
                password: logindata.password
               
            })
            //these keys will be used on server side
        }

        fetch("http://localhost:8080/checkLogin",reqData)
        .then(resp => resp.text())
        .then(data => { if(data.length != 0) 
                        {
                            const json = JSON.parse(data);
                            console.log(json);

                            mystore.dispatch({type:'LOGGEDIN'});

                            if(json.loginid.role === "Consumer")
                            {
                              
                                setConsumer(json);

                                navigate('/ConsumerHome');
                               
                            }
                            else if(json.loginid.role === "Provider" )
                            {
                                
                                setMess(json);

                                navigate('/ProviderHome');
                            }
                            else if(json.role === "Admin")
                            {
                                setAdmin(json);

                                navigate('/AdminHome');
                            }

                        }
                        else
                        {
                            
                            setErrmsg(" * Wrong Username or Password /Get Admin Approval(For Providers)* ");

                        }

                        })
       
    
    }

    return(
        <div style={{backgroundImage: 
            "url('images/gallery_9.jpeg')",
                   height:'100vh',
                   marginTop:'-70px',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                   }}>
        <br/><br/><br/>
        <h2 td style={{color:"ButtonHighlight"}}>-- User Login --</h2><br/>
        <form style={{ display: "flex",
                   justifyContent: "center",alignItems: "center"}}>
            <table>
                 <tr>
                    <td style={{color:"ButtonHighlight"}}><b> Enter Username : </b></td>
                    <td><input type="text" name="username" id="uname" onChange={handleInput} /><br/></td>
                </tr> 
            <br/>
            <tr>
            <td style={{color:"ButtonHighlight"}}><b>Enter Password : </b></td>
            <td> <input type="password" name="password" onChange={handleInput}/><br/></td>
            </tr>
            <br/>
            <tr>
             <td></td>
            <td><Button bsStyle="success" type="button"  onClick={submitForm} >LOGIN</Button></td>
            </tr>
            </table>
            <br/>
           
        </form>
        <p style={{color:"ButtonHighlight"}}><b>{errmsg}</b></p>
            <br/>
            
          <a href="/Register" style={{color:"white",textAlign:"center"}}><b><i>Want to Create New Account ? Click Here...</i></b></a>

        </div>

    );

}
export default LoginForm;