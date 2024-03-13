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
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      name: `Jungkook J.`,
      img: `https://www.pinkvilla.com/pics/350x500/1405280061_jungkook-p_202310.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      name: `Viola D.`,
      img: `https://www.essence.com/wp-content/uploads/2018/04/1525115168/Screen%20Shot%202018-04-30%20at%203.05.53%20PM.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      name: `Theo J.`,
      img: `https://media1.popsugar-assets.com/files/thumbor/tLetaXgCGSTgdSX8X0obyVX60TI=/1996x3000/filters:format_auto():quality(85):extract_cover()/2016/04/13/970/n/1922398/6eebc4ca0a486c78_GettyImages-477526487.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      name: `Salma H.`,
      img: `https://imageio.forbes.com/images-forbes/media/2007/07/11/sexycelebs_1.jpg?height=340&width=280&fit=bounds`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      name: `LeVar B.`,
      img: `https://parade.com/.image/t_share/MTkwNTc5Njc4MTI0NjQ4MzE2/levar-burton-headshot-ctr.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];

  return (
    <div className="container w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image-container">
                <img src={d.img} alt="" className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-name">{d.name}</p>
                <p className="testimonial-review">{d.review}</p>
                <button
                  onClick={console.log("click")}
                  className="testimonial-button btn btn-dark bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"
                >
                  Read More
                  <svg
                    width="79"
                    height="46"
                    viewBox="0 0 79 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_618_1123)">
                      <path
                        d="M42.9 2H76.5L34.5 44H2L42.9 2Z"
                        fill="url(#paint0_linear_618_1123)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_618_1123"
                        x="0"
                        y="0"
                        width="78.5"
                        height="46"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="1"
                          result="effect1_foregroundBlur_618_1123"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_618_1123"
                        x1="76.5"
                        y1="2.00002"
                        x2="34.5"
                        y2="44"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0.6" />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0.05"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
