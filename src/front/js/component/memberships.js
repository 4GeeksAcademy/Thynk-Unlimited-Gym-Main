import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const MembershipOptions = () => { 
    const [hoveredCard, setHoveredCard] = useState(null);

    // Function to handle mouse enter event for a card
    const handleMouseEnter = (cardIndex) => {
      setHoveredCard(cardIndex);
    };
  
    // Function to handle mouse leave event for a card
    const handleMouseLeave = () => {
      setHoveredCard(null);
    };

    return (
    <div className="container d-flex my-5">
        <div className="row" >
          <div className="col"  >
            <div className="card"
            style={{
                backgroundColor: hoveredCard === 0 ? "grey" : "black",
                height: "auto",
                width: "auto",
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave} >
                    <img src="https://i.pinimg.com/564x/04/0a/0d/040a0de68db8b473e368b870d258e700.jpg" className="card-img-top" alt="Basic Membership picture" />
                    <div className="card-body">
                        <h5 className="card-title">Basic Membership</h5>
                        <ul className="card-text">
                            <li> Access to all Thynk Unlimited Gym locations.</li> 
                        <li> Standard gym equipment and facilities </li> 
                        <li> Discounted rates on group fitness classes </li>
                        </ul>
                        <a href="#" className="btn btn-outline-light mt-3">Read more</a>
                    </div>
                </div> 
            </div> 

            <div className="col">
                <div className="card"  style={{
              backgroundColor: hoveredCard === 1 ? "grey" : "black",
              height: "auto",
              width: "auto",
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}>
                        <img src="https://i.pinimg.com/564x/d0/9b/ce/d09bce9b96b9f4ade416642865208217.jpg" className="card-img-top" alt="Premium Membership picture" />
                        <div className="card-body">
                            <h5 className="card-title">Premium Membership</h5>
                            <ul className="card-text">
                                <li> All benefits of the Basic Membership. </li>
                                <li> Access to exclusive workout areas, including a dedicated cardio zone and strength training area. </li>
                            </ul>
                            <a href="#" className="btn btn-outline-light">Read more</a>
                        </div>
                    <div/> 
                </div>
            </div> 
            <div className="col">
                <div className="card"  style={{
              backgroundColor: hoveredCard === 2 ? "grey" : "black",
              height: "auto",
              width: "auto",
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave} >
                        <img src="https://i.pinimg.com/564x/39/a6/1f/39a61ff36e9c4072761c35c1bf6a236c.jpg" className="card-img-top" alt="Elite Membership picture" />
                        <div className="card-body">
                            <h5 className="card-title">Elite Membership</h5>
                            <ul  className="card-text"> 
                            <li >All benefits of the Basic AND Premium Membership.</li> 
                            <li> Priority access to equipment and facilities during peak hours...</li> 
                            </ul>
                            <a href="#" className="btn btn-outline-light">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        
    )
};