import React, { useState, useEffect } from "react";
import "../../styles/index.css";
import "../../styles/aboutUs.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ScaleLoader } from "react-spinners";
import "animate.css";

export const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="">
        {loading ? (
          <div className="loading-spinner">
            <ScaleLoader id="loader" color="#e8c552" height={75} width={8} />
          </div>
        ) : (
          <>
            <h1 className="text-center my-5">Our Mission</h1>
            <p>
              {" "}
              Our mission at Thynk Unlimited is to lead a fitness revolution,
              transforming the way people perceive health by integrating
              physical vitality with mental wellness.Our gym serves as a haven
              for inclusivity, welcoming individuals of all backgrounds and
              abilities. Through innovative programs and personalized coaching,
              we empower our members to not only achieve their fitness
              aspirations but also enhance cognitive health, fostering clarity,
              focus, and emotional resilience.
            </p>

            <p>
              At Thynk Unlimited, we believe in the power of community to
              inspire and support each other on our wellness journeys. Our
              diverse and inclusive environment is built on a foundation of
              respect and understanding, ensuring that every individual feels
              valued and encouraged to thrive. Join us at Thynk Unlimited and
              embark on a holistic wellness journey where physical strength and
              mental well-being unite. Together, let's redefine fitness and
              embrace a lifestyle that nurtures both body and mind, enabling you
              to live your fullest and healthiest life.
            </p>
          </>
        )}
      </div>
      <div>
        <h1>Meet the Team</h1>

        <div className="d-flex p-4">
          <div className="card card col-3 hvr-grow">
            <img
              src="https://d2x313g9lpht1q.cloudfront.net/original/3X/a/c/ac79769d411ef6ca2333fb5b6cb8c2089079de25.jpeg"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />
            <div className="card-body">
              <input id="read-more-1" type="checkbox" />
              <h5 className="card-title">Name:Sarah Thompson</h5>
              <p className="card-text">Role:Mind-Body Wellness Coach</p>
              <p className="card-text">
                Bio: Hey there, I'm Sarah, your Mind-Body Wellness Coach at
                Thynk Unlimited. Think of me as your personal guide to finding
                your zen in the chaos of everyday life.
              </p>{" "}
              <div className="hidden">
                <p>
                  {" "}
                  With a sprinkle of humor and a whole lot of heart, I'm here to
                  help you stretch away the stress and sweat out the small
                  stuff. Let's roll out the yoga mats and dive deep into a world
                  where inner peace meets outer strength. Together, we'll crush
                  those daily challenges and emerge stronger, calmer, and ready
                  to take on the world.
                </p>
                <label htmlFor="read-more-1">Read Less</label>
              </div>
              <label htmlFor="read-more-1">Read More</label>
              <p>
                {" "}
                Socials:
                <a href="">
                  <FaSquareXTwitter size="2rem" />
                </a>
                <a href="">
                  <FaInstagramSquare size="2rem" />
                </a>
                <a href="">
                  <FaFacebook size="2rem" />
                </a>
                <a href="">
                  <MdEmail size="2rem" />
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="card col-3 hvr-grow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ja4RMfFECmhvJQ77_B3r60PpbjAyaLB8Qe1ownapIw&s"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />
            <div className="card-body">
              <input id="read-more-2" type="checkbox" />
              <h5 className="card-title">Name:Maya Rodriguez</h5>
              <p className="card-text">Role:Functional Training Specialist</p>
              <p className="card-text">
                Bio: Hey, I'm Maya, your go-to Functional Training Specialist at
                Thynk Unlimited. I'm all about keeping it real and keeping it
                fun.
              </p>{" "}
              <div className="hidden">
                <p>
                  Life's too short for boring workouts, am I right? Whether
                  you're tackling a tough deadline or chasing after the kids,
                  I've got your back. Let's dial up the energy, dial down the
                  excuses, and dial in on your best self. Ready to sweat, smile,
                  and slay those everyday dragons? Let's do this!
                </p>
                <label htmlFor="read-more-2">Read Less</label>
              </div>
              <label htmlFor="read-more-2">Read More</label>
              <p>
                {" "}
                Socials:
                <a href="">
                  <FaSquareXTwitter size="2rem" />
                </a>
                <a href="">
                  <FaInstagramSquare size="2rem" />
                </a>
                <a href="">
                  <FaFacebook size="2rem" />
                </a>
                <a href="">
                  <MdEmail size="2rem" />
                </a>
              </p>
            </div>
          </div>
          <div className="card card-about col-3 hvr-grow">
            <img
              src="https://origympersonaltrainercourses.co.uk/files/img_cache/30647/1920_1659430668_ptmalepose1.png?1659432239"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />

            <div className="card-body">
              <input id="read-more-3" type="checkbox" />
              <h5 className="card-title">Name:James Anderson</h5>
              <p className="card-text">Role:Community Fitness Leader</p>
              <p className="card-text">
                Bio: What's up, fitness fam? James here, your trusty Community
                Fitness Leader at Thynk Unlimited. I'm all about building a
                tribe where everyone feels welcome, supported, and ready to kick
                butt.
              </p>{" "}
              <div className="hidden">
                <p>
                  {" "}
                  Whether you're a seasoned gym-goer or a total newbie, I've got
                  something for you. From heart-pumping workouts to
                  heart-to-heart chats, I'm here to help you crush those daily
                  struggles and come out stronger on the other side. So, grab
                  your sneakers and let's make some magic happen – one rep, one
                  smile, one victory at a time!
                </p>
                <label htmlFor="read-more-3">Read Less</label>
              </div>
              <label htmlFor="read-more-3">Read More</label>
              <p>
                {" "}
                Socials:
                <a href="">
                  <FaSquareXTwitter size="2rem" />
                </a>
                <a href="">
                  <FaInstagramSquare size="2rem" />
                </a>
                <a href="">
                  <FaFacebook size="2rem" />
                </a>
                <a href="">
                  <MdEmail size="2rem" />
                </a>
              </p>
            </div>
          </div>
          <div className="card card-about col-3 hvr-grow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2upJG-KyMcv5fFDfeG9SYG1CY9oa9wWMtCA8XXhEsQ&s"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />

            <div className="card-body">
              <input className="read-more-4" type="checkbox" />
              <h5 className="card-title">Name:Max Johnson</h5>
              <p className="card-text">Role:Wellness Program Coordinator</p>
              <p className="card-text">
                Bio: Howdy, I'm Max, your Wellness Program Coordinator at Thynk
                Unlimited. Picture me as your fitness guru with a side of dad
                jokes.
              </p>{" "}
              <div className="hidden">
                <p>
                  {" "}
                  I'm here to help you tackle those everyday challenges with a
                  dose of humor and a whole lot of heart. Whether it's finding
                  time to work out between meetings or squeezing in some
                  self-care after a long day, I've got your back. Let's work
                  together to make health and happiness a priority – because
                  life's too short to sweat the small stuff.
                </p>
                <label htmlFor="read-more-4">Read Less</label>
              </div>
              <label htmlFor="read-more04">Read More</label>
              <p>
                {" "}
                Socials:
                <a href="">
                  <FaSquareXTwitter size="2rem" />
                </a>
                <a href="">
                  <FaInstagramSquare size="2rem" />
                </a>
                <a href="">
                  <FaFacebook size="2rem" />
                </a>
                <a href="">
                  <MdEmail size="2rem" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Our Mission</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        ipsa? At sequi voluptates fuga dolorem rerum iste! Ea deleniti nam
        sapiente placeat magnam eaque, harum hic expedita cum culpa. Quis.
      </p>

      <h2>Locations</h2>
      <div className="d-flex my-3 ">
        <div className="my-4 hvr-grow">
          <div className="card">
            <img
              src="https://cdn.choosechicago.com/uploads/2022/09/Pink-skyline-with-out-logo.jpeg"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />
            <div className="card-body">
              <p>Phone:(773) 555-1234</p>
              <p>13942 Champs. ave. Chicago,IL,60456</p>
            </div>
          </div>
        </div>
        <div className="my-4 hvr-grow">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ5EWySydls-1tFG9E41YDDqO6EHoOxmURtBVhfFKgg&s"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />
            <div className="card-body">
              <p>Phone:(708) 555-5566</p>
              <p>6329 Cardio ave. Dallas,Tx,75214</p>
            </div>
          </div>
        </div>
        <div className="my-4 hvr-grow">
          <div className="card">
            <img
              src="https://i.natgeofe.com/n/2f26e117-08d9-4364-a76b-817421bfc5d6/denver-travel_4x3.jpg"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />
            <div className="card-body">
              <p>Phone:(312) 555-6655</p>
              <p> 311 Creatine blvd. Miami,FL,33102</p>
            </div>
          </div>
        </div>
        <div className="my-4 hvr-grow">
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/View_of_Dallas_from_Reunion_Tower_August_2015_13.jpg/1200px-View_of_Dallas_from_Reunion_Tower_August_2015_13.jpg"
              className="card-img-top img-fluid card-img"
              alt="Placeholder Image"
            />
            <div className="card-body">
              <p>Phone:(708) 555-4466</p>
              <p> 5723 Cramps ave. Denver,CO,80238</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
