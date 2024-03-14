import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const MembershipViewPage = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams(); // Access the parameter from the URL

  // Find the membership with the matching ID
  const membership = store.memberships.find(membership => membership.id === parseInt(id));

  if (!membership) {
    return <div>Membership not found</div>;
  }

  const { title, imageUrl, description, benefits, price } = membership;

  return (
    <div className="container d-flex m-5">
        <div className="titleContainer">  
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} style={{height:500}} />
        </div> 
        <div className="align-self-lg-center ms-4"> 
                <p>{description}</p>
                <ul>
                    {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                    ))}
                </ul>
                <p>Price: ${price}</p>

                 <button type="button" className="btn btn-outline-light m-5">Buy now</button>
           
                <Link to={"/"}>
                   <button type="button" className="btn btn-outline-light">Go back</button>
                </Link> 

        </div> 
    </div>
  );
};
