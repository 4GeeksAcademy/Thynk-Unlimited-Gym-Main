import React, { useState, useEffect } from "react";

export const Jumbotron = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImageUrls = [
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
      );
    }, 5000); // Change the rotation interval as needed (in milliseconds)

    return function cleanup() {
      clearInterval(intervalId); 
    };
  }, []);

  const jumbotronStyle = {
    backgroundImage: `url("${backgroundImageUrls[currentImageIndex]}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto",
    width: "auto",
    display: "flex",
    alignItems: "start",
    paddingTop: "300px",
    marginLeft: "auto",
    flexDirection: "colum",
    justifyContent: "start",
  };

  const titleStyle = {
    textAlign: "left",
    marginBottom: "0",
    fontSize: "80px",
    color: "white",
  };

  const buttonStyle = {
    backgroundColor: "white",
    border: "none",
    color: "black",
    fontSize: "20px",
    padding: "10px 30px",
    borderRadius: "5px",
  };

return (
  <div className="w-100" style={jumbotronStyle}>
      <div className="d-flex" style={{ flexDirection: "column"}}>
      <div>
        <h1 className="ms-5 ps-5 pb-4" style={titleStyle}>
          {props.title}
        </h1>
      </div>
      <div className="d-flex justify-content-start ps-5 ms-5 mt-auto mb-5">
      <button type="button" className="btn btn-primary align-items-start" style={buttonStyle}>
          Join us!
        </button> 
      </div>
    </div>
  </div>
);
};