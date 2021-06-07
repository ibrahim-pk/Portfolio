import React, { useState } from "react";

const Navbar = () => {
  const [tog, setTog] = useState(false);
  return (
    <nav className="navbar navbar-expand-md ">
      <a href="#">
        <i className="fa fa-3x fa-code " />
      </a>
      <button
        onClick={() => setTog(!tog)}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        {tog ? (
          <div>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        ) : (
          <span style={{ backgroundColor: "red" }} className="line"></span>
        )}
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contuct Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
