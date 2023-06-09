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
      
      <div className="container">
        <div className="section-title">
          <h1>
            What our clients say <span>about us</span>
          </h1>
          <img className="title-bg" src={titlebg} alt="" />
        </div>

        <div className="all-testimonial-wrapper">
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="row">
                <Testimonial
                  img={testimonial1}
                  name="Sharmin Eity"
                  company="Creative Campus"
                  details="Creative Campus delivered outstanding work, exceeding expectations. Highly recommended for their exceptional software solutions."
                />
                <Testimonial
                  img={testimonial2}
                  name="Selina box"
                  company="iBos"
                  details="Creative Campus exceeded my expectations with their outstanding work. Their software solutions are exceptional and highly recommended for anyone seeking top-quality results"
                />
                <Testimonial
                  img={testimonial2}
                  name="Moriom Zai"
                  company="Interactive Cares"
                  details="Working with Creative Campus has been a game-changer for my business. Their software solutions have streamlined our operations and improved our overall efficiency. I am grateful for their expertise and highly recommend their services."
                />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="row">
                <Testimonial
                  img={testimonial3}
                  name="Arba Fatu"
                  company="Interactive Cares"
                  details="I am thoroughly impressed with Creative Campus. Their work is exceptional, and their software solutions have truly transformed my website. I highly recommend them for their professionalism, expertise, and outstanding results."
                />
                <Testimonial
                  img={testimonial3}
                  name="Sufia Selim"
                  company="Interactive Cares"
                  details="I can't thank Creative Campus enough for their exceptional work on my website. Their software solutions have not only transformed my online presence but also significantly boosted my business. Their professionalism, expertise, and attention to detail are truly commendable. Highly recommended!"
                />
                <Testimonial
                  img={testimonial3}
                  name="Ibne Hamza"
                  company="Interactive Cares"
                  details="Creative Campus is a true gem in the software industry. Their team's creativity, professionalism, and technical skills have resulted in a website that exceeds my expectations. I am thrilled with the outstanding work they have done"
                />
              </div>
            </div>
            <div className="col-md-4 col-6 next-display">
              <div className="row">
                <Testimonial
                  img={testimonial3}
                  name="Rubiya Zai"
                  company="Interactive Cares"
                  details="I am incredibly impressed with Creative Campus and their ability to deliver top-notch software solutions. Their attention to detail, prompt communication, and dedication to client satisfaction make them a standout choice. I am delighted with the results."
                />
                <Testimonial
                  img={testimonial3}
                  name="Asma Khatun"
                  company="Interactive Cares"
                  details="Choosing Creative Campus was the best decision for my company's website. I couldn't be happier with the outstanding work they have done for us."
                />
                <Testimonial
                  img={testimonial1}
                  name="Faiza Ahmed"
                  company="Interactive Cares"
                  details="Creative Campus has been an invaluable partner in the growth of my business. I am grateful for their expertise and highly recommend their services to others."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
