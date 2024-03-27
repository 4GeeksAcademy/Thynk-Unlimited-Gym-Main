import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import "animate.css";

export const MembershipOptions = () => {
  const { store, actions } = useContext(Context);
  const [visibleCards, setVisibleCards] = useState(0);
  const cardRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container d-flex my-5">
      <div className="row">
        {store.memberships.map((membership, index) => (
          <div
            className="col-4"
            key={membership.id}
            ref={(el) => (cardRef.current[index] = el)}
          >
            {index < visibleCards && (
              <div
                className="card"
                style={{
                  backgroundColor: "black",
                  height: "auto",
                  width: "auto",
                }}
              >
                <img src={membership.imageUrl} alt={membership.title} />
                <div className="card-body1 p-2">
                  <h5 className="card-title">{membership.title}</h5>
                  <p className="card-text">{membership.description}</p>
                  <p className="card-text">
                    Monthly Price: ${membership.price}
                  </p>
                  <Link to={`/membershipView/${membership.id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-light mt-3"
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
