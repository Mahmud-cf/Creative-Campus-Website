import React from "react";
import logo from "../assets/logo.png";
import Nevigation from "../Components/Nevigation";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";

function Home() {
  return (
    <div>
        <Nevigation/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  );
}

export default Home;
