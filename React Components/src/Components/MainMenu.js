import LoginForm from './LoginForm';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';

import MessProviderRegistrationForm from './MessProviderRegistrationForm';
import ConsumerRegistrationForm from './ConsumerRegistrationForm';

import Aboutus from './Aboutus';
import Contactus from './Contactus';

import Homepage from './Homepage';
import Register from './Register';
import ConsumerHome from './ConsumerHome';
import ProviderHome from './ProviderHome';
import ConsumerProfile  from './ConsumerProfile';
import mystore from './Store';
import React from 'react';
import ProviderProfile from './ProviderProfile';
import AllMessInfo from './AllMessInfo';
import SelectMess from './SelectMess';

import ProvideMenu from './ProvideMenu';
import ViewMenu from './ViewMenu';
import ConsumerRatingsReviews from './ConsumerRatingsReviews';
import ConsumerList from './ConsumerList';
import ViewRatingsReviews from './ViewRatingsReviews';
import ProvideVegMenu from './ProvideVegMenu';
import ProvideNonVegMenu from './ProvideNonVegMenu';
import AdminHome from './AdminHome';
import PendingMessApproval from './PendingMessApproval';
import ViewAllVegMenu from './ViewAllVegMenus';
import ViewAllNonVegMenus from './ViewAllNonVegMenus';
import DeletePreviousMenus from './DeletePreviousMenus';



class MainMenu extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            flag : false
        }
    }    
    render(){
        mystore.subscribe(()=>{this.setState({flag : mystore.getState().loggedin})})
        
    return(
        <BrowserRouter>
        <div style={{display: this.state.flag?'none':'block'}}>
        
         <nav>
                 <ul className="nav nav-tabs">
                 <li ><img src='images/logo.jpg' height="40" width="40"/> </li>
                 <li className="nav-item"><Link className="nav-link" to="/Homepage" ><b>Home</b></Link> </li> 
                 <li className="nav-item"><Link className="nav-link" to="/LoginForm" ><b>Login</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/Register" ><b>Sign Up</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/Contactus" ><b>Contact Us</b></Link> </li>
                 <li className="nav-item"><Link className="nav-link" to="/Aboutus" ><b>About Us</b></Link> </li>
                 </ul>
        </nav>  
                <div>
                    <Routes>
                     <Route path = "/Loginform" element={<LoginForm/>} />
                     <Route path = "/ConsumerRegistration" element={<ConsumerRegistrationForm/>} />
                     <Route path = "/MessProviderRegistration" element={<MessProviderRegistrationForm/>} />
                     <Route path = "/Aboutus" element={<Aboutus/>} />
                     <Route path = "/Contactus" element={<Contactus/>} />
                     <Route path = "/Register" element={<Register/>} />
                     </Routes>
                </div>
                     
        </div> 
                     <Routes>
                     <Route path = "" element={<Homepage/>} />
                    <Route path = "/ConsumerHome" element={<ConsumerHome/>} />
                    <Route path = "/Homepage" element={<Homepage/>} />
                    <Route path = "/ProviderHome" element={<ProviderHome/>} />
                    <Route path = "/ConsumerProfile" element={<ConsumerProfile/>} />
                    <Route path = "/AllMessInfo" element={<AllMessInfo/>} />
                    <Route path = "/SelectMess" element={<SelectMess/>} />
                    <Route path = "/ViewMenu" element={<ViewMenu/>} />
                    <Route path = "ViewAllVegMenu" element={<ViewAllVegMenu/>} />
                    <Route path = "ViewAllNonVegMenu" element={<ViewAllNonVegMenus/>} />
                    <Route path = "/ConsumerFeedback" element={<ConsumerRatingsReviews/>} />
                    <Route path = "/ProviderProfile" element={<ProviderProfile/>} />
                    <Route path = "/ProvideMenu" element={<ProvideMenu/>} />
                    <Route path = "/ProvideVegMenu" element={<ProvideVegMenu/>} />
                    <Route path = "/ProvideNonVegMenu" element={<ProvideNonVegMenu/>} />
                    <Route path = "/ConsumerList" element={<ConsumerList/>} />
                    <Route path = "/ViewFeedback" element={<ViewRatingsReviews/>} />
                    <Route path = "/AdminHome" element={<AdminHome/>} />
                    <Route path = "/PendingApprovals" element={<PendingMessApproval/>} />
                    <Route path = "/DeletePreviousMenus" element={<DeletePreviousMenus/>} />
                     </Routes>
                     
         </BrowserRouter>
    )
    }
}
export default MainMenu;
