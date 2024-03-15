import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Thynk-logo-clear.png";
import "../../styles/navbar-footer.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
        {/* Logo */}
        <div className="navbar-brand navbar-left">
          <Link to="/">
            <img className="" src={logo} height={135}  alt="Thynk Unlimited Logo" />
          </Link>
        </div>

        {/* Container for login section and links */}
        <div className="navbar-nav navbar-right">
          {/* Login */}
          <div className="login-section">
            <form action="" method="post">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input type="text" placeholder="Enter Username" name="uname" required />
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <button type="submit">Login</button>
            </form>
          </div>

          {/* Links */}
          
            <ul className="navbar-list">
              <li className="navbar-item"><Link to="/">Home</Link></li>
              <li className="navbar-item"><Link to="/about-us">About Us</Link></li>
              <li className="navbar-item"><Link to="/members">Members</Link></li>
              <li className="navbar-item"><Link to="/classes">Classes</Link></li>
              <li className="navbar-item"><Link to="/resources">Resources</Link></li>
              <li className="navbar-item"><Link to="/shop">Shop</Link></li>
            </ul>
          </div>
    </nav>
  );
};
