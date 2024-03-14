import React from "react";
import "../../styles/navbar-footer.css"

export const Footer = () => (
	<footer className="">
		<div className="footer-main d-flex justify-content-between mx-5 align-content-center">
			<div className="footer-item">
			
  <h4>Our Partners</h4>
  <ul>
    <li><a href="https://www.gatorade.com/">Gatorade</a></li>
    <li><a href="">Lyfetime Fitness Apparl</a></li>
    <li><a href="">Cramps for Champs</a></li>
  </ul>
</div>

		<div>
		<h4>Main Office:</h4>
		<p><address>Address: 2358 S. Cardio Ave, Chicago,Il</address></p>
	    <p>Phone: (773)555-0000</p>
		 <p>Email: thynkgroup@thynkunlimited.com</p>
		</div>
		<div className="footer-item">
		<h4>Connect with Us!</h4>
		<a href=""><i class="fa-brands fa-square-x-twitter"></i></a>
		<a href=""><i class="fa-brands fa-square-instagram"></i></a>
		<a href=""><i class="fa-brands fa-facebook"></i></a>
		</div>
	</div>
	</footer>
);

