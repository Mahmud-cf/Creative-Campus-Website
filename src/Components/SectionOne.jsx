import React, { useState } from "react";
import titlebg from "../assets/yellow-bg.png";
import Toggle from "../SmallComponent/Toggle";

function SectionOne() {
  return (
    <div className="container-fluid section-one-wrapper section">
      <div className="container">
        <div className="section-box">
          <div className="section-2-lower">
            <div className="row">
              <div className="col-md-3">
                <div className="d-flex">
                  <div>10+</div>
                  <h3 className="text-center">Years of experience</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex">
                  <div>500+</div>
                  <h3 className="text-center">Projects Complated</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex">
                  <div>480+</div>
                  <h3 className="text-center">Setisfied Clients</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex">
                  <div>10+</div>
                  <h3 className="text-center">Award Achivment</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title">
          <h1>
            The Service We Offer <span>For You</span>
          </h1>
          <img className="title-bg" src={titlebg} alt="" />
        </div>
        <div className="section-one-main-part">
          <Toggle number="01" department="WEB DEVELOPMENT" />
          <Toggle number="02" department="UI/UX DESIGN" />
          <Toggle number="03" department="WEB DESIGN" />
          <Toggle number="04" department="SOFTWARE DEVELOPMENT" />
          <Toggle number="05" department="SOCIAL MEDIA MANAGEMENT" />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
