import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Thynk-logo-clear.png";
import "../../styles/navbar-footer.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md align-items-center">
      {/* Logo */}
      <div className="navbar-brand navbar-left">
        <Link to="/">
          <img className="" src={logo} height={135} alt="Thynk Unlimited Logo" />
        </Link>
      </div>

      {/* Container for login section and links */}
      <ul className="navbar-nav navbar-right">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About Us</Link></li>
        <li className="navbar-item"><Link to="/members">Members</Link></li>
        <li className="navbar-item"><Link to="/classes">Classes</Link></li>
        <li className="navbar-item"><Link to="/resources">Resources</Link></li>
        <li className="navbar-item"><Link to="/shop">Shop</Link></li>
        <li className="navbar-item">
          <button type="button" className="btn btn-outline-warning"><Link to="/login">Login</Link></button>
        </li>
      </ul>
    </nav>
  );
};
