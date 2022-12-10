import React from "react";
import TextAnimation from "react-text-animations";

import "./style.css";
const Header = () => {
  return (
    <div className="header py-5">
      <div className="profile">
        <div className="details">
          <h1>
            Hi Everyone,<span className="name">I'm Ibarhim</span>
          </h1>
          <div className="text-info animationText">
            <TextAnimation.Slide
              target="Web"
              text={[
                "I am a full stack web developer",
                "I am a mern stack web developer",
                "I am a junior web developer",
              ]}
              animation={{
                duration: 1000,
                delay: 1500,
                timingFunction: "ease-out",
              }}
              loop={true}
            >
              Web
            </TextAnimation.Slide>
          </div>
          <div className="my-3">
            <a href="/file/ibrahim.pdf" target="_blank" download="My_File.pdf">
              <button className="btn btn-lg p-2 btn-secondary">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src="/image/ibrahim.jpeg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
