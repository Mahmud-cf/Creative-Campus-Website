import React from "react";
import Header from "../Components/Header";
import SectionOne from "../Components/SectionOne_Service";
import SectionTwo from "../Components/SectionTwo_Grow";
import SectionThree from "../Components/SectionFour_Testimonial";
import SectionThree_WorkProcess from "../Components/SectionThree_WorkProcess";
import HomeFooter from "../Components/HomeFooter";

function Home() {
  return (
    <div>
        <Header/>
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
