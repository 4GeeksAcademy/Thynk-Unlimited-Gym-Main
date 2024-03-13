import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Thynk Fitness Connection</span>
				</Link>
				<div>
				<div className="ml-auto">
				<form action="" method="post">
				<label for="uname"><b>Username</b></label>
				<input type="text" placeholder="Enter Username" name="uname" required/>
				<label for="psw"><b>Password</b></label>
				<input type="password" placeholder="Enter Password" name="psw" required/>
				<button type="submit">Login</button>
				</form>
				 </div>
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
