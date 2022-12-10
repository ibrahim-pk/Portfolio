import React from "react";
import "./Style.css";
const About = () => {
  return (
    <div id="about" className="about my-4">
      <div className="">
        <h1 className="aboutHeading">ABOUT ME</h1>
        <div className="text-center">
          <div>
            <img src="/image/ibrahim.jpeg" className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <h4 className="my-5">
            I am an enthusiastic, organized, and multi-tasking ability person. I
            can work in a team and individually with any perspective. I am
            determined to resolve any kind of circumstances that may arise. A
            passionate Front-End and Back-End Developer 🚀 having an experience
            of designing and building Web applications with JavaScript / Reactjs
            / Nodejs / Mongodb and some other cool libraries and frameworks.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
