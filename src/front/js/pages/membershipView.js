import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import "../../styles/home.css";

export const MembershipViewPage = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams(); // Access the parameter from the URL
  const [loading, setLoading] = useState(true); //loading screen

  // Find the membership with the matching ID
  const membership = store.memberships.find(
    (membership) => membership.id === parseInt(id)
  );

  if (!membership) {
    return <div>Membership not found</div>;
  }

  const { title, imageUrl, description, benefits, price } = membership;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container d-flex m-5">
      <div className="d-flex justify-content-center">
        {loading ? (
          <div className="loading-spinner">
            <ScaleLoader id="loader" color="#e8c552" height={75} width={8} />
          </div>
        ) : (
          <>
            <div className="titleContainer">
              <h2>{title}</h2>
              <img src={imageUrl} alt={title} style={{ height: 500 }} />
            </div>
            <div className="align-self-lg-center ms-4">
              <p>{description}</p>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <p>Price: ${price}</p>

              <button type="button" className="btn btn-outline-light m-5">
                Buy now
              </button>

              <Link to={"/"}>
                <button type="button" className="btn btn-outline-light">
                  Go back
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
