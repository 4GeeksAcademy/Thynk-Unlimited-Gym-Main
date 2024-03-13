import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Jumbotron } from "../component/Jumbotron";
import { Carousel } from "../component/carousel";
import { MembershipOptions } from "../component/memberships";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const title = "Thynk Gym Unlimited";
  const description = " Unleash Your Potential";



	return (
		<div> 
		<div className="text-center mt-5">
			 <Jumbotron title ={title} description = {description}/> 
		</div>
		<MembershipOptions /> 
    <Carousel />
		</div> 
	);

export default Home;
