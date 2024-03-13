import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Jumbotron } from "../component/Jumbotron";
import { Carousel } from "../component/carousel";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const title = "Thynk Gym Unlimited";
  const description = " Unleash Your Potential";

  return (
    <div className="text-center mt-5">
      <div>
        {" "}
        <Jumbotron title={title} description={description} />{" "}
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
