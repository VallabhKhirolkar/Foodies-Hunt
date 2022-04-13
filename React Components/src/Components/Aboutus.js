import React from "react";


class Aboutus extends React.Component{

    constructor(props){
        super(props)
        this.state={
            msg: "",
            uid: ""
        }

    }
    greet=(ev)=>{
        this.setState({uid: ev.target.value});
    }

    render(){
        return(
        <div style={{backgroundImage: 
            "url('./images/hero_1.jpeg')",
                   height:'130vh',
                   marginTop:'-70px',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                   }}>
          
            <table>
            <br/><br/>  
            <header><h1 style={{textDecorationLine: 'underline'}}>About Us</h1></header>
            <hr/>
            <br/>

            <h1 style={{color:"Tomato",textDecorationLine: 'underline'}}> Foodies Hunt </h1>
               <p style={{color:"whitesmoke"}}><b>The Foodies Hunt is an online mess service system that identifies and locates nearby messes and their available menus.
Many times customers have to spend time to search good and desired food around localities. 
So, in our system customers can search messes, menus as per locality, category, prices, ratings and reviews.
The mess owners can register and share their mess menus with the consumers through this portal.
Consumers can register to the portal and can be a member of a specific mess of their choice
so they can take advantage of discounts and coupons which is offered through the portal.<br/>
Consumers can give ratings and reviews for the mess services which can be viewed by other consumers for their mess search. 
It maintains a separate account for each user so that the user’s details are maintained confidential. 
The user id and password are provided for each user. Therefore it provides a more secure mess system.
This system allows reduction in searching efforts for consumers and increases the scope of business of mess by advertising on the portal.
<br/>
Nowadays, hotel services are digitally active were as mess services lag behind. Newcomers to an unknown place for the job, study,
 travel, etc., usually face the problem in finding mess services near to their location. Also, some user doesn't always get
  the meal for their budget or satisfactory services they look for the external food source. Our system will
  interact with the user's location and provide information about active mess services prior to their location.
  The record of customers can managed and maintained by the system It maintains a separate account for each user,
  so that the user's details are maintained confidential. A User ID and password is provided for each user.
   Therefore it provides a more secure ordering. By using this application user can give their reviews.Peoples are moving to different
   cities for various purposes. They need some specific source of food. The people who shifted anywhere they can't afford 
   restaurants and hotels every day. It is difficult for the newly shifted person to find good nearby food service.
    On the other hand, food service providers face many problems of maintaining the record, informing the customer in emergency cases, 
    getting feedback from the customer and many more.<br/> Keeping all scenarios in mind the system customized according to a need of user and service providers.
    India in on line food market is yet in developing stage, Famous and big restaurants are listed and registered on line, 
    partnering with on line food order and delivery giants like zomato, food panda, swiggy etc.
     But when it comes to the small-scale and house-hold businesses like mess (inn), 
     the picture is different, especially in rural areas, mess operates completely off line!.
     The person there literally doesn't have a better option than to reach at particular mess and have a lunch or dinner there.
      So he/she would just have to compromise with the choices available.
      </b></p>
        </table>
        <br/>
        <br/>
        <br/>
       
    
        <hr></hr>
       
            <p><h2>{this.state.msg} </h2></p>

        </div>
        )
    }
}

export default Aboutus;