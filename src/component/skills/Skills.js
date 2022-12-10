import React from "react";
import "./Style.css";
const Skills = () => {
  return (
    <div id="skills">
      <div className="skills_overlay">
        <h2 className="section__heading">SKILLS</h2>
        <div className="container">
          <div className="skill_scroll-box">
            <div className="skill_box">
              <span style={{ "--i": 1 }}>
                <img src="image/html.png" alt="" />
              </span>
              <span style={{ "--i": 2 }}>
                <img src="image/css.png" alt="" />
              </span>
              <span style={{ "--i": 3 }}>
                <img src="image/boots.jfif" alt="" />
              </span>
              <span style={{ "--i": 4 }}>
                <img src="image/tailwind.png" alt="" />
              </span>
              <span style={{ "--i": 5 }}>
                <img src="image/c++.png" alt="" />
              </span>
              <span style={{ "--i": 6 }}>
                <img src="image/react.png" alt="" />
              </span>
              <span style={{ "--i": 7 }}>
                <img src="image/Redux1.jpg" alt="" />
              </span>
              <span style={{ "--i": 8 }}>
                <img src="image/Nodejs1.jfif" alt="" />
              </span>
              <span style={{ "--i": 9 }}>
                <img src="image/mongodb.png" alt="" />
              </span>
              <span style={{ "--i": 10 }}>
                <img src="image/firebase.jpg" alt="" />
              </span>
              <span style={{ "--i": 11 }}>
                <img src="image/mi.png" alt="" />
              </span>
            </div>
          </div>
          <div className="row cardStyle">
            <div className="mr-2 mt-2 col-md-3 card" style={{ width: "18rem" }}>
              <div className="card-body title1">
                <h3 className="card-title">FRONTEND</h3>
                <hr />
                <p class="card-text">
                  HTML5
                  <br /> CSS3
                  <br /> BOOTSTRAP
                  <br /> Tailwind
                  <br /> REACT
                  <br /> REDUX
                  <br /> JAVASCRIPT
                  <br /> MATERIAL UI
                  <br /> BOOTSTRAP
                  <br />
                  FIREBASE
                </p>
              </div>
            </div>
            <div
              className="mr-2  col-md-3  mt-5  card"
              style={{ width: "18rem" }}
            >
              <div className="card-body title3">
                <h3 className="card-title">TOOLS</h3>
                <hr />
                <p class="card-text">
                  VS CODE
                  <br /> GIT & GITHUB
                  <br /> NETLIFY
                  <br /> VERCEL
                  <br /> HEROKU
                  <br /> FIGMA
                  <br /> PHOTOSHOP
                </p>
              </div>
            </div>
            <div className="mr-2 mt-2 col-md-3 card" style={{ width: "18rem" }}>
              <div className="card-body title2">
                <h3 className="card-title">BACKEND</h3>
                <hr />
                <p class="card-text">
                  NODE.JS
                  <br /> EXPRESS.JS
                  <br /> MONGODB
                  <br /> MONGOOSE
                  <br /> MULTER
                  <br /> STRIPE
                  <br /> JWT DECODED
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="problemSolve">
          <h2 className="solveHeading">500+ Problem Solve</h2>
          <h4>Codeforces</h4>
          <h4>CodeChef</h4>
          <h4>At-coder</h4>
          <h4>Uva</h4>
          <h4>Uri</h4>
          <a
            className="btn btn-primary "
            href="https://www.stopstalk.com/user/profile/Emon_cste14"
          >
            StopStalk
          </a>
          <small className="ml-1">see more</small>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
