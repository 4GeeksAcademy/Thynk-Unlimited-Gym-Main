import React from "react";
import "../../styles/navbar-footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Newsletter from "./newsletter";

export const Footer = () => (
  <footer className="footer-container">
    <div className="footer-main d-flex flex-wrap">
      {/* Footer section for displaying partners */}
      <div className="footer-item-partners" style={{ width: '25%' }}>
        <ul>
          <h5 className="our-partners" style={{ textAlign: 'left' }}> Our Partners</h5>
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
      <div className="footer-item-contact" style={{ width: '25%' }}>
        <h5 className="main-office" style={{ textAlign: 'left' }}> Main Office</h5>
        <p>Address:2358 S. Cardio Ave, Chicago, IL</p>
        <p>Phone:(773) 555-0000</p>
        <p>Email:thynkgroup@thynkunlimited.com</p>
      </div>

      <div>
        <Newsletter/>
        <div className="footer-social" style={{ width: '25%' }}>
        <h5 className="let's-connect" style={{ textAlign: 'left' }}> Let's Connect</h5>
        <div>
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
      {/* Footer section for social */}
      
      </div>
    </div>
  </footer>
)

  





