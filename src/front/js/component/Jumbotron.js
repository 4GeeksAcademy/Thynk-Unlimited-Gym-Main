import React, { useState, useEffect } from "react";
import "../../styles/home.css";

export const Jumbotron = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImageUrls = [
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }, 5000); // Change the rotation interval as needed (in milliseconds)

    return function cleanup() {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  const jumbotronStyle = {
    backgroundImage: `url("${backgroundImageUrls[currentImageIndex]}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '70vh',
    display: "flex",
    alignItems: 'left',
    justifyContent: 'flex',
    paddingTop: '300px',
    marginLeft: '0'
  };

  const titleStyle = {
    textAlign: 'left',
    marginBottom: '0',
    fontSize: '80px',
    marginLeft: '15px',
    color: 'white',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    border: 'none',
    color: 'black',
    fontSize: '20px', 
    padding: '10px 30px',
    borderRadius: '5px',

  };

  return (
    <div className="">
      <div className="card w-100 bg-light" style={jumbotronStyle}>
        <div className="card-body">
          <h1 className="card-title mt-5" style={titleStyle}>
            {props.title}
          </h1>
          {/* <p className="card-text">{props.description}</p> */}
          <a href="#" className="btn btn-primary btn-left" style={buttonStyle}>
            Join us!
          </a>
        </div>
      </div>
    </div>
  );
};
