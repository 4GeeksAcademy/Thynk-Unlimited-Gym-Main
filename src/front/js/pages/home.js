import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Jumbotron } from "../component/Jumbotron";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const title= "Think Gym Unlimited"
	const description = " Unleash Your Potential"


	return (
		<div className="text-center mt-5">
			 <Jumbotron title ={title} description = {description}/> 
			



			
		</div>
	);
};

export default Home;
