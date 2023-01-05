import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar p-3 navbar-expand-md fixed-top ">
      <a href="#">
        <i className="fa fa-3x fa-code " />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav  ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#project">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contuct">
              Contuct Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
