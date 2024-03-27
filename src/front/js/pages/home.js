import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Jumbotron } from "../component/Jumbotron";
import { Carousel } from "../component/carousel";
import { MembershipOptions } from "../component/memberships";
import { ScaleLoader } from "react-spinners";
import "animate.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const title = "Thynk Gym Unlimited";
  const description = " Unleash Your Potential";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <ScaleLoader id="loader" color="#e8c552" height={75} width={8} />
        </div>
      ) : (
        <>
          <div className="text-center mt-5">
            <Jumbotron title={title} description={description} />
          </div>
          <MembershipOptions />
          <Carousel />
        </>
      )}
    </div>
  );
};
export default Home;
