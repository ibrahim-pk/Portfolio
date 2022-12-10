import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Style.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Projects = () => {
  return (
    <div id="project">
      <h1 className="projectHeading">PROJECTS</h1>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card" style={{ width: "500px", height: "600px" }}>
            <img
              style={{ height: "300px", width: "500px" }}
              className="card-img-top img-fluid"
              src="image/laptopBazar.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Laptop Bazar</h5>
              <p classNameName="card-text">
                1.This web Application where the user can buy second hand laptop
                eassily. 2.A person can login/register as a seller or buyer 3.A
                buyer can report a product. 4.A seller can delete/edit or ads
                her/his product. 5.A admin can delete a user,seller and reported
                product. 6.After booked a product he/she can online payment by
                stripe.
              </p>
            </div>
            <div class="card-body">
              <a
                href="https://ims-app-88fc7.web.app/"
                className="card-link btn btn-dark"
              >
                Live
              </a>
              <a
                href="https://github.com/ibrahim-pk/Labtop-Bazar-Client"
                className="card-link btn btn-dark"
              >
                Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "500px", height: "600px" }}>
            <img
              style={{ height: "300px", width: "500px" }}
              className="card-img-top img-fluid"
              src="image/foodGhor.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Food Ghor</h5>
              <p classNameName="card-text">
                In the navbar section,We also see user logout
                button,services,myreview and add service button In the second
                section created carousel after the navbar We use private router
                for protect Add service and my review section.When a user logged
                and register then we can access Add service and my review
                section. We will also use firebase for authentication. User also
                add review and see his/her review and edit and delete user also
                add service from the add services section. user also see picture
                in the full screen.
              </p>
            </div>
            <div class="card-body">
              <a
                href="https://foodghor-c2284.web.app/"
                className="card-link btn btn-dark"
              >
                Live
              </a>
              <a
                href="https://github.com/ibrahim-pk/Food-Ghor-Client"
                className="card-link btn btn-dark"
              >
                Github
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "500px", height: "600px" }}>
            <img
              style={{ height: "300px", width: "500px" }}
              className="card-img-top img-fluid"
              src="image/kajitbe.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Kajitbe</h5>
              <p classNameName="card-text">
                The website is a sports news website. The user will see sports
                new and give comment. The user can join raffle draw by
                submitting the registration form.  There is an admin dashboard
                with CRUD operations where admin can see all the operations in
                the website of client.  Main Stack:ReactJS,Firebase, MongoDB,
                NodeJS,Bootstrap,Digitalocean
              </p>
            </div>
            <div class="card-body">
              <a
                href="https://www.kajitbe.com/"
                className="card-link btn btn-dark"
              >
                Live
              </a>
              <a
                href="https://github.com/ibrahim-pk/guess-web-client"
                className="card-link btn btn-dark"
              >
                Github
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Projects;
