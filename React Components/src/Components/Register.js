import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './style.css';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            usertype: "",
            
        }
    }

    render()
    {
        return (
                    <div style={{backgroundImage: 
                        "url('./images/gallery_6.jpeg')",
                               height:'120vh',
                               marginTop:'-50px',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat'
                               }}>
                        <br/> <br/> <br/> <br/>
               <h1 className='info' style={{textAlign:"center"}}>Welcome to Foodies Hunt Portal</h1>
                        <hr/>
                        <br/>
                        <p  className='info' style={{textAlign:"center"}}>* Please Select User Type for Sign Up *</p>

                            <Dropdown >

                            <Dropdown.Toggle variant="success">

                            Select User Type

                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                            <Dropdown.Item href="/ConsumerRegistration">

                               Consumer

                            </Dropdown.Item>

                            <Dropdown.Item href="/MessProviderRegistration">

                                Provider

                            </Dropdown.Item>

                            </Dropdown.Menu>

                            </Dropdown>
                            <br/>
                            <hr/>
                            
                         </div>
                                    )
                                }
                            }


export default Register;