
import React from "react";



  export const Jumbotron = (props) => {

    const backgroundImageUrl = 'url("https://ibb.co/TPjWKnR ")';

    
    const jumbotronStyle = {

      backgroundImage: backgroundImageUrl,
      backgroundSize: 'cover',
    }



    return (
      <div className="">
        <div className="card w-100 bg-light" style= {jumbotronStyle}>
          <div className="card-body">
            <h1 className="card-title mt-5">{props.title}</h1>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary mb-5">
            Join us! 
            </a>
          </div>
        </div>
      </div>
    );
  };
  