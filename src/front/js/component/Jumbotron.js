
import React from "react";



  export const Jumbotron = (props) => {

    const backgroundImageUrl = [
      'url(https://sweat440.com/wp-content/uploads/2020/03/Sweat440April-18-2018MROY1217-1080x633.jpg)',


    ]
    
  

    
    const jumbotronStyle = {

      backgroundImage: backgroundImageUrl,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '70vh',
      display: "flex",
      alignItems: 'flex-start',
      paddingTop: '250px',
      Animation: 'rotateImages 30s linear infinite',
    
    };
    
    const titleStyle = {
      textAlign: 'left',
      marginBottom: '0',
      fontSize: '80px',
      marginLeft: '15px',
      color: 'white',
     
    };


    return (
      <div className="">
        <div className="card w-100 bg-light" style= {jumbotronStyle}>
          <div className="card-body">
            <h1 className="card-title mt-5" style= {titleStyle}> {props.title}</h1>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary mb-5">
            Join us! 
            </a>
          </div>
        </div>
      </div>
    );
  };
  