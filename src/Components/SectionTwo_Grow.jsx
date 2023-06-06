import React from "react";
import shape1 from "../assets/shape_1-1.png";
import grow from "../assets/why-huble.avif";

function SectionTwo() {
  return (
    <div className="container-fluid section-2-wrapper">
      <div className="section-2-under-wrapper">
        <div className="section-one-bg-design">
          <div className="bg-design circul s-2-1"></div>
        </div>
        <div className="container ">
          <div className="section-2-shape">
            <img className="section-2-shape-1" src={shape1} alt="" />
          </div>
          <h1 className="text-center">
            Want to grow your business <br /> <span>with us</span>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p>
                
Experience exponential business growth with <span className="creative-campus-name" >Creative Campus</span>, your trusted partner in software solutions. Our expert team harnesses cutting-edge technologies to optimize your operations, enhance efficiency, and drive remarkable results. With our tailored software development, UI/UX design, web development, and software management services, we provide comprehensive solutions to fuel your success in the digital era. Collaborate with us to unlock the full potential of your business, gain a competitive edge, and stay ahead in the dynamic market. Let us empower your brand with innovative strategies and transformative solutions that propel your growth. Trust <span className="creative-campus-name">Creative Campus</span> to navigate the ever-evolving digital landscape and deliver high-quality, scalable software solutions that align with your unique goals. Join us on this transformative journey and elevate your business to new heights.
              </p>
            </div>
            <div className="col-md-6">
              <div className="section-grow-img text-center" >
                <img src={grow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
