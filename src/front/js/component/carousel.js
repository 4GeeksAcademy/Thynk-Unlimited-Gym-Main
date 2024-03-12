import React from "react";
import "../../styles/testimonials.css";

export const Carousel = () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function prevSlide() {
    slides[index].classList.remove("active");
    index--;

    if (index < 0) index = slides.length - 1;

    slides[index].classList.add("active");
  }

  document.querySelector(".prev").addEventListener("click", (e) => {
    prevSlide();
  });

  function nextSlide() {
    slides[index].classList.remove("active");
    index++;

    if (index > slides.length - 1) index = 0;

    slides[index].classList.add("active");
  }

  document.querySelector(".next").addEventListener("click", (e) => {
    nextSlide();
  });

  return (
    <div>
      <div id="slider">
        <div className="slide">testimonials 1</div>
        <div className="slide">2</div>
        <div className="slide">3</div>
      </div>
      <button className="prev">Prev</button>
      <button className="next">Next</button>
    </div>
  );
};
