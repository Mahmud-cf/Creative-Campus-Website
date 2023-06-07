import React, { useState } from "react";
import logo from "../assets/black-logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

function CourseNavbar() {
  const [scroll, setScroll] = useState(false);
  function scrollHeandler() {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", scrollHeandler);
  return (
    <nav
      className={
        scroll ? "navbar navbar-expand-lg nav-bg courses-nev-bg" : "navbar navbar-expand-lg "
      }
    >
      <div className="container courses-nev-wrapper">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Creative Campus Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <NavDropdown title="SKILLS" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" href='/courses'>WEB DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href='/courses'>WEB DESIGN</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href='/courses'>FREELANCEING</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href='/courses'>SPOKEN ENGLISH</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <a className="nav-link" href="/courses">
                FREE COURSES
              </a>
            </li>
            <NavDropdown title="CAREER TRUCK COURSES" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" href='/courses'>WEB DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href='/courses'>FREELANCEING</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" href='/courses'>DIGITAL MARKETING</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CourseNavbar;
