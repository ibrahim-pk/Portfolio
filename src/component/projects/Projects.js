import React from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Style.css";
const Projects = () => {
  var swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });
  return (
    <div className="body">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/image/css.png" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="/image/css.png" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="/image/css.png" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="/image/css.png" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="/image/css.png" alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Projects;
