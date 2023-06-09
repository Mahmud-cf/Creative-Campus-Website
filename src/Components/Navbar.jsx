import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  function scrollHeandler() {
    if (window.scrollY >= 50) {
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
        scroll ? "navbar navbar-expand-lg nav-bg" : "navbar navbar-expand-lg "
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
            <NavDropdown title="SOFTWARE" id="SOFTWARE">
              <NavDropdown.Item href="/school-management-software">
                SCHOOL MANAGEMENT SOFTWARE
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/courses">COURSES</Nav.Link>
            <Nav.Link href="/review">REVIEW</Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>

            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
