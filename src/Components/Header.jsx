import React, { useState } from "react";
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
import Navbar from "./Navbar";
import Navigation from "./Navbar";

function Nevigation() {
  
  return (
    
    <div className="nev-wrapper nevigation">
        
          <Navigation/>
          <div className="header container">
            <div className="header-shape">
              <img className="shape-1" src={headerShpaeOne} alt="" />
              <img className="shape-2" src={headerShpaeTwo} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="header-left-part">
                  <div>
                    <h1 className="text-center">
                    Advanced Features to Grow
                    Your Business
                    </h1>
                    <img className="titlebg" src={titlebg} alt="" />
                  </div>

                  <p>
                    Welcome to <span className="creative-campus-name">Creative Campus</span>, one of the best
                    software companies in Bangladesh. Welcome to a company where
                    your ideas count, where your determination creates a new
                    world, where your talent and hard-works are rewarded. At{" "}
                    <span className="creative-campus-name">Creative Campus</span> we always endeavor to lead
                    towards development and creating a flexible, dynamic and
                    cooperative organizational cultural. <span className="creative-campus-name">Creative Campus</span> is one of the promising software, web application, mobile application & game development companies of Bangladesh which aims at creating a new standard in the era of software technology.
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
