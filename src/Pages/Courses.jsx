import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import './Courses.css'
import HomeFooter from '../Components/HomeFooter'
import CourseNavbar from '../Components/CourseNavbar.jsx'
import titlebg from '../assets/yellow-bg.png'
import CoursesItem from '../SmallComponent/CoursesItem.jsx'
import web_d from '../assets/web-d.png'
import web_de from '../assets/webDesign.jpg'
import digitalM from '../assets/digitalM.jpg'
import english from '../assets/english.png'
import freelancing from '../assets/freelancing.png'
import CoursesFooter from '../SmallComponent/CoursesFooter.jsx'
import '../Responsive.css'

function Courses() {
  return (
    <div >
      <CourseNavbar/>
      <div className="container-fluid courses-header-wrapper">
        <div className="courses-header text-center">
          <div className='course-header-title' >
          <div>
            <h1>Knowledge Junction</h1>
            <img src={titlebg} alt="" />
          </div>
          <h2>Your Gateway to Learning Excellence</h2>
          </div>
        </div>
      </div>
      <div className="courses-page-wrapper container-fluid">
        <div className="container">
          <div className="skill-courses-wrapper">
            <h1 className='text-center' >Your One-Stop Learning Destination</h1>
            <div className="skill-section-shape">
              <div className="skill-shape-1"></div>
              <div className="skill-shape-1"></div>
            </div>
            <div className="skill-courses-main-part">
              <div className="row">
                <CoursesItem img={web_d} name='Full Stack Web Development' student='700' lesson='500' price='5,000' cut_price='12,000' />
                <CoursesItem img={web_de} name='Web Design' student='1100' lesson='150' price='999' cut_price='5,000' />
                <CoursesItem img={digitalM} name='Digital Marketing' student='600' lesson='400' price='5,000' cut_price='12,000' />
                

              </div>
            </div>
          </div>

          <div className="knowladge-up-section-wrapper">
            <div className="knowladg-up-heading-part text-center">
              <h1>Expand Your Knowledge Base</h1>
              <p>Go to the section of your choice</p>
            </div>
            <div className="knowladge-up-main-section">
              <div className="row">
                <div className="col-md-6">
                  <div className="knowladge-up-single-item d-flex">
                    <div><img src={english} alt="" /></div>
                    <div className='knowladge-up-title' >
                      <h3>Spoken English</h3>
                      <p>Improve Your Speeking Skill</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="knowladge-up-single-item d-flex">
                    <div><img src={freelancing} alt="" /></div>
                    <div className='knowladge-up-title' >
                      <h3>Freelancing</h3>
                      <p>Earn money form online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <CoursesFooter/>
    </div>
  )
}

export default Courses