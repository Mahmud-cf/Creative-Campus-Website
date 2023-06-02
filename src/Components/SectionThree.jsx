import React from "react";
import Testimonial from "../SmallComponent/Testimonial";
import testimonial1 from "../assets/testimonial-1.png";
import testimonial2 from "../assets/testimonial-2.png";
import testimonial3 from "../assets/testimonial-3.png";

function SectionThree() {
  return (
    <div className="container-fluid section-three-wrapper">
      <div className="container">
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
