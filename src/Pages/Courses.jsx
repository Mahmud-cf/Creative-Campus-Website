import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import './Courses.css'
import HomeFooter from '../Components/HomeFooter'

function Courses() {
  return (
    <div >
      <Navbar/>
      <div className="contact-page-wrapper full-bg-color">
        <div className="contact-page-header courses-page">
          <div className="contact-header-bg">
            <div className="container">
              <header className="text-center">
                <h1>Currently we don't have any open course</h1>
                <h1>Get In Touch...</h1>
              </header>
            </div>
          </div>
        </div>
        <HomeFooter/>
      </div>
    </div>
  )
}

export default Courses