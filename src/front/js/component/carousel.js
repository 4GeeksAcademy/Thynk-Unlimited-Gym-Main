import React from "react";
import "../../styles/testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amanda from "../../img/amanda.jpg";
import jungkook from "../../img/jungkook.jpg";
import viola from "../../img/Viola.jpg";
import salma from "../../img/Salma.jpg";
import theo from "../../img/Theo.jpg";
import levar from "../../img/Lavar.jpg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: "60px",
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: `Amanda S.`,
      img: amanda,
      review: `Transformed my fitness journey, one rep at a time!`,
    },
    {
      name: `Jungkook J.`,
      img: jungkook,
      review: `The gym that feels like home, where gains are made.`,
    },
    {
      name: `Viola D.`,
      img: viola,
      review: `Results-driven workouts with a supportive community.`,
    },
    {
      name: `Theo J.`,
      img: theo,
      review: `Sweat, determination, and progress – all in one place.`,
    },
    {
      name: `Salma H.`,
      img: salma,
      review: `Finally found a gym that makes me excited to work out!`,
    },
    {
      name: `LeVar B.`,
      img: levar,
      review: `From couch potato to fitness fanatic – unlimited thanks!`,
    },
  ];

  return (
    <div className="container w-3/4 m-auto">
      <div className="mt-20">
        <h1 className="d-flex justify-content-center">
          What Our Members Are Saying
        </h1>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image-container">
                <img src={d.img} alt="" className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-name">{d.name}</p>
                <p className="testimonial-review">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
