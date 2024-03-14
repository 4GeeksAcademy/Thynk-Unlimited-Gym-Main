import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Thynk-logo-clear.png";
import "../../styles/navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar container border">
      <div className="navbar-content d-flex justify-content-between align-items-center">
       
	   {/* Logo */}

	    <div className="logo">
          <Link to="/">
            <img src={logo} alt="Thynk Unlimited Logo" />
          </Link>
        </div>
		
		{/* Login */}
 
        <div className="mt-5">
			<div className="">
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
		  {/* links */}
          <div>
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
            <Link to="/about-us">
              <button className="btn btn-primary">About Us</button>
            </Link>
            <Link to="/members">
              <button className="btn btn-primary">Members</button>
            </Link>
            <Link to="/classes">
              <button className="btn btn-primary">Classes</button>
            </Link>
            <Link to="/">
              <button className="btn btn-primary">Resources</button>
            </Link>
            <Link to="/shop">
              <button className="btn btn-primary">Shop</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
