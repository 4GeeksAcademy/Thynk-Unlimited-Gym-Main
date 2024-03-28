import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const MembershipOptions = () => { 
  const { store, actions } = useContext(Context);

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
        {store.memberships.map((membership, index) => (
          <div className="col-4" key={membership.id} >
            <div className="card"
            style={{
                backgroundColor: hoveredCard === index ? "grey" : "black",
                height: "auto",
                width: "auto",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave} >
                     <img src={membership.imageUrl} alt={membership.title} /> 
                    <div className="card-body1">
                        <h5 className="card-title">{membership.title}</h5>
                        <p className="card-text"> {membership.description} </p> 
                        <p className="card-text">Monthly Price: ${membership.price}</p>
                        <Link to={`/membershipView/${membership.id}`}> 
                        <button type="button" className="btn btn-outline-light mt-3">Read more</button>
                        </Link>
                    </div>
                </div> 
            </div> 
        ))}
         </div> 
       </div> 
    );
};
