import React from "react";

export const AboutUs = () => {
  return (
    <div>
      <div>
        <h1>Meet the Team</h1>

    <div className="card border">
      <div className="card-body">
        <img
          src="https://via.placeholder.com/350x150"
          className="card-img-top img-fluid"
          alt="Placeholder Image"
        />
        <div className="p-4">
          <h5 className="card-title text-danger">Name:</h5>
          <p className="card-text text-danger">
            Bio: Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <p className="card-text text-danger">Role:</p>
        </div>
      </div>
    </div>

      <h2>Our Mission</h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        ipsa? At sequi voluptates fuga dolorem rerum iste! Ea deleniti nam
        sapiente placeat magnam eaque, harum hic expedita cum culpa. Quis.
      </p>

      <h2>Locations</h2>
      <address className="text-white">123 cardio ave. chicago,IL,60456</address>
      <p className="text-white">Phone:</p>
    </div>
    </div>
  );
};

export default AboutUs;
