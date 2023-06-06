import React from "react";
import Navbar from "../Components/Navbar";
import titlebg from "../assets/yellow-bg.png";
import "./About.css";
import Indivitual_team_member from "../SmallComponent/Indivitual_team_member";
import tanjim from "../assets/tanjim.png";
import karim from "../assets/karim.png";
import jubayer from "../assets/jubayer.png";
import emdadul from "../assets/emdadul.png";
import jibon from "../assets/jibon.png";
import rahinur from "../assets/rahinur.png";
import al_amin from "../assets/al-amin.png";
import ishrat from "../assets/ishrat.png";
import jannatul from "../assets/jannatul.png";
import bushra from "../assets/bushra.png";
import robin from "../assets/robin.png";
import sakib from "../assets/sakib.png";
import sajeed from "../assets/sajeed.png";
import akash from "../assets/akash.png";
import ziauddin from "../assets/ziauddin.png";
import jannati from "../assets/jannati.png";
import najmun from "../assets/najmun.png";
import naima from "../assets/naima.png";
import megha from "../assets/megha.png";
import tomal from "../assets/tomal.png";
import shihab from "../assets/shihab.png";
import shahriar from "../assets/shariar.png";
import forhad from "../assets/forhad.png";
import abir from "../assets/abir.png";
import jahidul from "../assets/jahidul.png";
import jack from "../assets/jack.png";
import joy from "../assets/joy.png";
import sathi from "../assets/sathi.png";
import Fazilatunnesa from "../assets/Fazilatunnesa.png";
import HomeFooter from "../Components/HomeFooter";

function About_us() {
  return (
    <div className="full-bg-color">
      <Navbar />
      <div className="about-us-wrapper container-fluid">
        <div className="container">
          <div className="section-title abou-us-title">
            <h1>TEAM - CREATIVE CAMPUS</h1>
            <p className="text-center">Meet Our All Team Member</p>
            <img className="title-bg" src={titlebg} alt="" />
          </div>
          <div className="team-member-wrapper row">
            <Indivitual_team_member
              img={tanjim}
              name="Tanjim Chowdhury"
              title="Founder and CEO"
            />
            <Indivitual_team_member
              img={karim}
              name="M A Karim Munna"
              title="project manager"
            />
            <Indivitual_team_member
              img={jubayer}
              name="Jubayer Admed"
              title="advisor"
            />
            <Indivitual_team_member
              img={emdadul}
              name="Emdadul Huqe"
              title="ANDROID APPS DEVELOPER"
            />
            <Indivitual_team_member
              img={jibon}
              name="Jibon Biswash"
              title="ANDROID APPS DEVELOPER"
            />
            <Indivitual_team_member
              img={rahinur}
              name="Rahinur Islam"
              title="IOS APPS DEVELOPER "
            />
            <Indivitual_team_member
              img={al_amin}
              name="Al Ameen"
              title="IOS APPS DEVELOPER"
            />
            <Indivitual_team_member
              img={ishrat}
              name="Ishrat Jahan"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={jannatul}
              name="Jannatul Ferdouse"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={bushra}
              name="Bushra Yeasin"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={robin}
              name="Md Robin Ahmed"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={sakib}
              name="Sakib Abdullah"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={sajeed}
              name="Sajeeb Hossen"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={akash}
              name="Akash"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={ziauddin}
              name="Ziauddin Apurvo"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={jannati}
              name="Jannati Zim Mithila"
              title="backend DEVELOPER"
            />
            <Indivitual_team_member
              img={naima}
              name="Naima Khatun"
              title="backend DEVELOPER"
            />
            <Indivitual_team_member
              img={najmun}
              name="Najmun Nahar"
              title="FRONTEND DEVELOPER"
            />
            <Indivitual_team_member
              img={megha}
              name="Megha Islam"
              title="backend DEVELOPER"
            />
            <Indivitual_team_member
              img={tomal}
              name="Tomal Sen"
              title="backend DEVELOPER"
            />
            <Indivitual_team_member
              img={shihab}
              name="Shihab"
              title="backend DEVELOPER"
            />
            <Indivitual_team_member
              img={shahriar}
              name="Shahriar Rahaman"
              title="backend DEVELOPER"
            />
            <Indivitual_team_member
              img={forhad}
              name="forhad"
              title="SUPPORT PROJECT MANAGER"
            />
            <Indivitual_team_member
              img={abir}
              name="Abir Chowdhury"
              title="support instructor"
            />
            <Indivitual_team_member
              img={jahidul}
              name="Jahidul Islam"
              title="PROJECT MANAGMENT INSTRUCTOR"
            />
            <Indivitual_team_member
              img={jack}
              name="Mr. Jack Jone"
              title="SUPPORT SOFTWARE ENGINEER (USA)"
            />
            <Indivitual_team_member
              img={joy}
              name="Joy Rahman"
              title="SOFTWARE ENGINEER"
            />
            <Indivitual_team_member
              img={Fazilatunnesa}
              name="Fazilatunnesa"
              title="DIGITAL MARKETER"
            />
            <Indivitual_team_member
              img={sathi}
              name="Sathi"
              title="HUMAN RESOURCE MANAGER"
            />
            
          </div>
        </div>
      </div>
      <HomeFooter/>
    </div>
  );
}

export default About_us;
