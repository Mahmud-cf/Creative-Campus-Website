import React from "react";
import logo from "../assets/logo.png";
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai';

function HomeFooter() {
  return (
    <div className="container-fluid footer-wrapper">
      <div className="container">
        <div className="logo-wrapper">
          <img src={logo} alt="Creative Campus Logo" className="logo" />
        </div>
        <div className="row">
          <div className="col-md-4 col-6">
            <div className="footer-colum">
            <div className="d-flex footer-link">
                <div><MdOutlineLocationOn/></div>
                <div>Sector 07, Uttara Dhaka 1230.</div>
            </div>
            <div className="d-flex footer-link">
                <div><AiOutlineMail/></div>
                <div>info@creativec-ampus.com</div>
            </div>
            <div className="d-flex footer-link">
                <div><AiOutlinePhone/></div>
                <div>+880 19863 - 06582</div>
            </div>
            <div className="d-flex footer-link">
                <div><AiOutlineClockCircle/></div>
                <div>Available : 10:00 AM - 11:00 PM</div>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="footer-colum">
                <div className=" footer-link"><a href="/">HOME</a></div>
                <div className=" footer-link"><a href="/school-management-software">SOFTWARE</a></div>
                <div className=" footer-link"><a href="/about">ABOUT US</a></div>
                <div className=" footer-link"><a href="/courses">COURSES</a></div>
                <div className=" footer-link"><a href="/review">REVIEW</a></div>
                <div className=" footer-link"><a href="contact">CONTACT US</a></div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="footer-colum">
                <h4>Follow Us</h4>
                <div className="d-flex social-media" >
                    <div className="single-social-media" ><a href="https://www.facebook.com/creativecampusbd"><FaFacebookF/></a></div>
                    <div className="single-social-media" ><a href=""><FaInstagram/></a></div>
                    <div className="single-social-media" ><a href=""><FaLinkedinIn/></a></div>
                    <div className="single-social-media" ><a href=""><FaTwitter/></a></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
