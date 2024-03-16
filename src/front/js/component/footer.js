import React from "react";
import "../../styles/navbar-footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => (
  <footer className="">
    <div className="footer-main d-flex justify-content-between align-content-center">
      <div className="footer-item">
        <ul>
          <p>Our Partners:</p>
          <li>
            <a href="https://www.gatorade.com/">Gatorade</a>
          </li>
          <li>
            <a href="">Lyfetime Fitness Apparl</a>
          </li>
          <li>
            <a href="">Cramps for Champs</a>
          </li>
        </ul>
      </div>

      <div className="footer-item">
        <p>Main Office:</p>
        <p>Address: 2358 S. Cardio Ave, Chicago,Il</p>
        <p>Phone: (773)555-0000</p>
        <p>Email: thynkgroup@thynkunlimited.com</p>
      </div>

      <div className="footer-item">
        <p>Connect with Us!</p>
        <a href="">
          <FaSquareXTwitter size="2rem" />
        </a>
        <a href="">
          <FaInstagramSquare size="2rem" />
        </a>
        <a href="">
          <FaFacebook size="2rem" />
        </a>
      </div>
    </div>
  </footer>
);
