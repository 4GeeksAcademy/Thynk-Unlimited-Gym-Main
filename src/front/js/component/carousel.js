import React, { useEffect } from "react";
import "../../styles/testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
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
      img: `https://artofheadshots.com/wp-content/uploads/2010/01/amanda-seyfried.jpg`,
      review: `Transformed my fitness journey, one rep at a time!`,
    },
    {
      name: `Jungkook J.`,
      img: `https://www.pinkvilla.com/pics/350x500/1405280061_jungkook-p_202310.jpg`,
      review: `The gym that feels like home, where gains are made.`,
    },
    {
      name: `Viola D.`,
      img: `https://www.essence.com/wp-content/uploads/2018/04/1525115168/Screen%20Shot%202018-04-30%20at%203.05.53%20PM.png`,
      review: `Results-driven workouts with a supportive community.`,
    },
    {
      name: `Theo J.`,
      img: `https://media1.popsugar-assets.com/files/thumbor/tLetaXgCGSTgdSX8X0obyVX60TI=/1996x3000/filters:format_auto():quality(85):extract_cover()/2016/04/13/970/n/1922398/6eebc4ca0a486c78_GettyImages-477526487.jpg`,
      review: `Sweat, determination, and progress – all in one place.`,
    },
    {
      name: `Salma H.`,
      img: `https://imageio.forbes.com/images-forbes/media/2007/07/11/sexycelebs_1.jpg?height=340&width=280&fit=bounds`,
      review: `Finally found a gym that makes me excited to work out!`,
    },
    {
      name: `LeVar B.`,
      img: `https://parade.com/.image/t_share/MTkwNTc5Njc4MTI0NjQ4MzE2/levar-burton-headshot-ctr.jpg`,
      review: `From couch potato to fitness fanatic – unlimited thanks to this gym!`,
    },
  ];

  return (
    <div className="container w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="testimonial-card w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 ..."
            >
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
