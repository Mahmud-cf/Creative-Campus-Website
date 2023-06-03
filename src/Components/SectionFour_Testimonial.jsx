import React from "react";
import Testimonial from "../SmallComponent/Testimonial";
import testimonial1 from "../assets/testimonial-1.png";
import testimonial2 from "../assets/testimonial-2.png";
import testimonial3 from "../assets/testimonial-3.png";
import titlebg from "../assets/yellow-bg.png";
import shape from "../assets/graph-1.png";

function SectionThree() {
  return (
    <div className="container-fluid section-three-wrapper">
      <div className="s-3-1"></div>
      <div className="s-3-2"></div>
      <div className="shape">
        <img className="s-3-shape-1" src={shape} alt="" />
      </div>
      <div className="container">
        <div className="section-title">
          <h1>
            What our clients say <span>about us</span>
          </h1>
          <img className="title-bg" src={titlebg} alt="" />
        </div>

        <div className="all-testimonial-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="row testimonial-left-part ">
                <Testimonial
                  img={testimonial1}
                  name="Sharmin Eity"
                  company="Creative Campus"
                />
                <Testimonial
                  img={testimonial2}
                  name="Mahmud Ahmed"
                  company="iBos"
                />
                <Testimonial
                  img={testimonial3}
                  name="Munna CF"
                  company="Interactive Cares"
                />
              </div>
            </div>
            <div className="col-md-6 testimonial-right-part">
              <Testimonial
                img={testimonial3}
                name="Munna CF"
                company="Interactive Cares"
              />
              <Testimonial
                img={testimonial3}
                name="Munna CF"
                company="Interactive Cares"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
