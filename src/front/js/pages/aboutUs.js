import React from "react";
import "../../styles/index.css"
import "../../styles/aboutUs.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const AboutUs = ()=>{
    return (
        <div>

        <div>
        <h1>Meet the Team</h1>

        <div className="d-flex p-4">



        <div className="card card-about col-3">
        <img src="https://d2x313g9lpht1q.cloudfront.net/original/3X/a/c/ac79769d411ef6ca2333fb5b6cb8c2089079de25.jpeg" className ="card-img-top img-fluid card-img" alt="Placeholder Image"/>
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Role:</p>
  </div>
</div>

        <div className="card card-about col-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ja4RMfFECmhvJQ77_B3r60PpbjAyaLB8Qe1ownapIw&s" className="card-img-top img-fluid card-img" alt="Placeholder Image"/>
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Role:</p>
  </div>
</div>

        <div className="card card-about col-3">
        <img src="https://origympersonaltrainercourses.co.uk/files/img_cache/30647/1920_1659430668_ptmalepose1.png?1659432239" className="card-img-top img-fluid card-img" alt="Placeholder Image"/>

  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Role:</p>
  </div>
</div>

        <div className="card card-about col-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2upJG-KyMcv5fFDfeG9SYG1CY9oa9wWMtCA8XXhEsQ&s" className="card-img-top img-fluid card-img" alt="Placeholder Image"/>

  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Role:</p>
  </div>
</div>

</div>
        
        
        </div>


        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa? At sequi voluptates fuga dolorem rerum iste! Ea deleniti nam sapiente placeat magnam eaque, harum hic expedita cum culpa. Quis.</p>

        <h2>Locations</h2>

        <address>123 cardio ave. chicago,IL,60456</address>
        <p>Phone:</p>
        
        
        </div>



    );
};

export default AboutUs;
