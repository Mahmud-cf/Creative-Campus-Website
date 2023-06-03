import React from "react";
import logo from "../assets/logo.png";
import Nevigation from "../Components/Nevigation";
import SectionOne from "../Components/SectionOne_Service";
import SectionTwo from "../Components/SectionTwo_Grow";
import SectionThree from "../Components/SectionFour_Testimonial";
import SectionThree_WorkProcess from "../Components/SectionThree_WorkProcess";
import HomeFooter from "../Components/HomeFooter";

function Home() {
  return (
    <div>
        <Nevigation/>
        <div className="full-bg-color" >
          <SectionOne/>
          <SectionTwo/>
          <SectionThree_WorkProcess/>
          <SectionThree/>
          <HomeFooter/>
        </div>
    </div>
  );
}

export default Home;
