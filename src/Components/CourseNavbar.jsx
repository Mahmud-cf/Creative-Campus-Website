import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/black-logo.png";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  function scrollHeandler() {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", scrollHeandler);

  return (
    <Navbar
    expand="lg"
      className={
        scroll ? "navbar navbar-expand-lg courses-nev-bg courses-nev" : "navbar navbar-expand-lg courses-nev"
      }
    >
      <div className="container">
        <Navbar.Brand href="/">
          <img src={logo} alt="Creative Campus" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="SKILL" id="SOFTWARE">
              <NavDropdown.Item href="/courses">
                WEB DEVELOPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses">
                WEB DESIGN
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses">
                SPOKEN ENGLISH
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses">
                FREELANCEING
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/courses">FREE COURSES</Nav.Link>
            <NavDropdown title="CAREER TRUCK" id="SOFTWARE">
              <NavDropdown.Item href="/courses">
                WEB DEVELOPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses">
                DIGITAL MARKETING
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses">
                FREELANCEING
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">ABOUT US</Nav.Link>

            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
