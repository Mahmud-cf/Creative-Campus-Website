import React, { useState } from "react";
import logo from "../assets/logo.png";
import headerImage from "../assets/header-cortoon.png";
import titlebg from "../assets/textbg.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import wordpress from "../assets/wordpress.png";
import node from "../assets/node.png";
import headerShpaeOne from "../assets/shape1.png";
import headerShpaeTwo from "../assets/shape2.png";
import { FaExpandArrowsAlt } from 'react-icons/fa';

function Nevigation() {
  const [scroll, setScroll] = useState(false)
  function scrollHeandler () {
    if (window.scrollY >= 110){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  window.addEventListener('scroll', scrollHeandler)
  console.log(scroll)
  return (
    
    <div className="nev-wrapper nevigation">
        
          <nav className={scroll? "navbar navbar-expand-lg nav-bg": "navbar navbar-expand-lg "}>
            <div className="container">
              <a className="navbar-brand" href="#">
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SOFTWARE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT US
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <button className="btn log-in" type="submit">
                    LOG IN
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <div className="header container">
            <div className="header-shape">
              <img className="shape-1" src={headerShpaeOne} alt="" />
              <img className="shape-2" src={headerShpaeTwo} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="header-left-part">
                  <div>
                    <h1>
                      <span>Smart Choice</span>
                      <br />
                      for Your Business Grow
                    </h1>
                    <img className="titlebg" src={titlebg} alt="" />
                  </div>

                  <p>
                    Welcome to <span>Creative Campus</span>, one of the best
                    software companies in Bangladesh. Welcome to a company where
                    your ideas count, where your determination creates a new
                    world, where your talent and hard-works are rewarded. At{" "}
                    <span>Creative Campus</span> we always endeavor to lead
                    towards development and creating a flexible, dynamic and
                    cooperative organizational cultural
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-right-part">
                  <div className="text-center">
                    <img src={headerImage} alt="" />
                    <div className="tech-lang-icon">
                      <div className="lang-icon html d-flex">
                        <div className="lang-icon-title-wrapper d-flex">
                          <div className="lang-icon-div">
                            <img src={html} alt="" />
                          </div>
                          <div>
                            <p>HTML</p>
                          </div>
                        </div>
                      </div>
                      <div className="lang-icon css d-flex">
                        <div className="lang-icon-title-wrapper d-flex">
                          <div className="lang-icon-div">
                            <img src={css} alt="" />
                          </div>
                          <div>
                            <p>CSS</p>
                          </div>
                        </div>
                      </div>
                      <div className="lang-icon react d-flex">
                        <div className="lang-icon-title-wrapper d-flex">
                          <div className="lang-icon-div">
                            <img src={react} alt="" />
                          </div>
                          <div>
                            <p>React</p>
                          </div>
                        </div>
                      </div>
                      <div className="lang-icon wordpress d-flex">
                        <div className="lang-icon-title-wrapper d-flex">
                          <div className="lang-icon-div">
                            <img src={wordpress} alt="" />
                          </div>
                          <div>
                            <p>Wordpress</p>
                          </div>
                        </div>
                      </div>
                      <div className="lang-icon node d-flex">
                        <div className="lang-icon-title-wrapper d-flex">
                          <div className="lang-icon-div">
                            <img src={node} alt="" />
                          </div>
                          <div>
                            <p>Node JS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>





        
    </div>
  );
}

export default Nevigation;
