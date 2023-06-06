import React, { useState } from "react";
import logo from "../assets/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  function scrollHeandler() {
    if (window.scrollY >= 110) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", scrollHeandler);
  return (
    <nav
      className={
        scroll ? "navbar navbar-expand-lg nav-bg" : "navbar navbar-expand-lg "
      }
    >
      <div className="container">
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
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">SCHOOL MANAGEMENT SOFTWARE</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <a className="nav-link" href="/courses">
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/review">
                REVIEW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                ABOUT US
              </a>
            </li>
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

export default Navbar;
