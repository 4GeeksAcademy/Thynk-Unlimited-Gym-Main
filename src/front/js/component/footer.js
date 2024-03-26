import React from "react";
import "../../styles/navbar-footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => (
  <footer className="footer-container">
  <div className="footer-main d-flex justify-content-between align-content-center">
    {/* Footer section for displaying partners */}
    <div className="footer-item-partners">
      <ul>
        <h5 className="Our Partners" style={{ textAlign: 'center' }}> Our Partners</h5>
        <li style={{ fontWeight: 'normal' }}>
          <p href="https://www.gatorade.com/">Gatorade</p>
        </li>
        <li style={{ fontWeight: 'normal' }}>
          <p href="">Lyfetime Fitness Apparel</p>
        </li>
        <li style={{ fontWeight: 'normal' }}>
          <p href="">Cramps for Champs</p>
        </li>
      </ul>
    </div>

    {/* Footer section for contact information */}
    <div className="footer-item-contact">
      <h5 className="main-office" style={{ textAlign: 'center' }}> Main Office</h5>
      <p>Address: <span style={{ fontWeight: 'normal' }}>2358 S. Cardio Ave, Chicago,IL</span></p>
      <p>Phone: <span style={{ fontWeight: 'normal' }}>(773)555-0000</span></p>
      <p>Email: <span style={{ fontWeight: 'normal' }}>thynkgroup@thynkunlimited.com</span></p>
    </div>

    {/* Footer section for social media links */}
    <div className="footer-social">
  <h5 className="Let's Connect" style={{ textAlign: 'center' }}> Let's Connect</h5>
  <span className="social-icon" style={{ marginRight: '5px' }}>
    <a href="">
      <FaInstagram size="2rem" />
    </a>
  </span>
  <span className="social-icon" style={{ marginRight: '5px' }}>
    <a href="">
      <RiFacebookCircleLine size="2rem" />
    </a>
  </span>
  <span className="social-icon" style={{ marginRight: '5px' }}>
    <a href="">
      <FaXTwitter size="2rem" />
    </a>
  </span>
  <span className="social-icon" style={{ marginRight: '5px' }}>
    <a href="">
      <MdOutlineEmail size="2rem" />
    </a>
  </span>
  </div>
  </div>
</footer>
)