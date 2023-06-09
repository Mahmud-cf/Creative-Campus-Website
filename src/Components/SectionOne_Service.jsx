import React, { useState } from "react";
import titlebg from "../assets/yellow-bg.png";
import Toggle from "../SmallComponent/Toggle";
import serviceIMG from '../assets/service-img.gif'

function SectionOne() {
  return (
    <div className="container-fluid section-one-wrapper section">
      <div className="section-one-bg-design">
        <div className="bg-design circul s-1-1"></div>
        <div className="bg-design strait s-1-2"></div>
      </div>
      <div className="container">
        <div className="section-box">
          <div className="section-2-lower">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="d-flex">
                  <div>10+</div>
                  <h3 className="text-center">Years of experience</h3>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="d-flex">
                  <div>500+</div>
                  <h3 className="text-center">Projects Complated</h3>
                </div>
              </div>
              <div className="col-md-3 col-6 next-mt">
                <div className="d-flex">
                  <div>480+</div>
                  <h3 className="text-center">Setisfied Clients</h3>
                </div>
              </div>
              <div className="col-md-3 col-6 next-mt">
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
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="service-section-img" ><img src={serviceIMG} alt="" /></div>
          </div>
          <div className="col-md-6">
            <div className="section-one-main-part">
              <Toggle
                department="WEB DEVELOPMENT"
                serviceDetails="Our web development service combines cutting-edge technology and innovative design to create custom websites tailored to your specific business needs. From responsive layouts to intuitive user interfaces, we deliver seamless online experiences that captivate your audience and drive your digital success."
              />
              <Toggle
                department="UI/UX DESIGN"
                serviceDetails="Our UI/UX service focuses on creating exceptional user experiences through intuitive interfaces and seamless interactions. We combine aesthetics and functionality to design user-centered interfaces that enhance engagement, increase conversions, and leave a lasting impression on your audience. Elevate your software company's digital presence with our expert UI/UX solutions."
              />
              <Toggle
                department="WEB DESIGN"
                serviceDetails="
                Our web design service brings your vision to life with stunning visuals and intuitive user interfaces. We create engaging and responsive websites that reflect your brand identity, enhance user experience, and drive conversions. Let us build a captivating online presence for your software company."
              />
              <Toggle
                department="SOFTWARE DEVELOPMENT"
                serviceDetails="Our software development service offers tailored solutions to meet your unique business requirements. From concept to deployment, our team of experts will collaborate with you to develop robust and scalable software applications that streamline operations, enhance productivity, and drive your company's growth."
              />
              <Toggle
                department="SOCIAL MEDIA MANAGEMENT"
                serviceDetails="
                Our software management service takes care of all aspects of your software lifecycle. From requirements gathering to maintenance, we ensure smooth operation, updates, and security. Let us handle the complexities while you focus on your core business."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
