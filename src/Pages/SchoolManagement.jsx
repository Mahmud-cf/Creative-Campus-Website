import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HomeFooter from "../Components/HomeFooter";
import titlebg from "../assets/yellow-bg.png";
import { Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import client1 from "../assets/testimonial-1.png";
import client2 from "../assets/testimonial-2.png";
import client3 from "../assets/testimonial-3.png";
import "./SchoolManagement.css";
import Modal from "../SmallComponent/Modal";

function SchoolManagement() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      fullName,
      organization,
      email,
      mobile,
      organizationAddress,
    };
    setReviewsList([...reviewsList, newReview]);
    setFullName("");
    setOrganization("");
    setEmail("");
    setMobile("");
    setOrganizationAddress("");
    setShowModal(false);
  };

  const handleWriteReviewClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="full-bg-color">
      <Navbar />
      <div className="container-fluid school-management-wrapper">
        <div className="container">
          <div className="section-title">
            <h1>
              PRICE TABLE FOR <br /> <span>SCHOOL MANAGEMENT SOFTWARE</span>
            </h1>
            <img className="title-bg" src={titlebg} alt="" />
          </div>
          <div className="packeg-wrapper">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-packge-wrapper">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ borderBottom: "1px solid #f8fafc14" }}
                    >
                      <Card.Title>Monthly Package</Card.Title>
                      <Card.Text className="d-flex">
                        {" "}
                        <div>6 Month</div> <div>/50k</div>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        <li>
                          <BiCheck /> Admission Management
                        </li>
                        <li>
                          <BiCheck /> Online Class & Exam System
                        </li>
                        <li>
                          <BiCheck /> Profile Management
                        </li>
                        <li>
                          <BiCheck /> Library Management
                        </li>
                        <li>
                          <BiCheck /> Financial Management
                        </li>
                        <li>
                          <BiCheck /> Examination Management
                        </li>
                        <li>
                          <BiCheck /> Free Management
                        </li>
                        <li>
                          <BiCheck /> Website Management
                        </li>
                        <li>
                          <BiCheck /> Online Account Management
                        </li>
                        <li>
                          <BiCheck /> Human Resource Management
                        </li>
                        <li>
                          <BiCheck /> User Management
                        </li>
                        <li>
                          <BiCheck /> Result Management
                        </li>
                        <li>
                          <BiCheck /> Branch Control
                        </li>
                        <li>
                          <BiCheck /> Human Resource Management
                        </li>
                        <li>
                          <BiCheck /> Student Attendance Tracking Analytics
                        </li>
                        <li>
                          <BiCheck /> Attendance Management
                        </li>
                        <li>
                          <AiFillStar /> Include Server & installation
                          Cost(5000tk)
                        </li>
                      </ul>

                      <Modal/>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-packge-wrapper">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ borderBottom: "1px solid #f8fafc14" }}
                    >
                      <Card.Title>Yearly Package</Card.Title>
                      <Card.Text className="d-flex">
                        {" "}
                        <div>1 Year</div> <div>/120k</div>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        <li>
                          <BiCheck /> Admission Management
                        </li>
                        <li>
                          <BiCheck /> Online Class & Exam System
                        </li>
                        <li>
                          <BiCheck /> Profile Management
                        </li>
                        <li>
                          <BiCheck /> Library Management
                        </li>
                        <li>
                          <BiCheck /> Financial Management
                        </li>
                        <li>
                          <BiCheck /> Examination Management
                        </li>
                        <li>
                          <BiCheck /> Free Management
                        </li>
                        <li>
                          <BiCheck /> Website Management
                        </li>
                        <li>
                          <BiCheck /> Online Account Management
                        </li>
                        <li>
                          <BiCheck /> Human Resource Management
                        </li>
                        <li>
                          <BiCheck /> User Management
                        </li>
                        <li>
                          <BiCheck /> Result Management
                        </li>
                        <li>
                          <BiCheck /> Branch Control
                        </li>
                        <li>
                          <BiCheck /> Human Resource Management
                        </li>
                        <li>
                          <BiCheck /> Student Attendance Tracking Analytics
                        </li>
                        <li>
                          <BiCheck /> Attendance Management
                        </li>
                        <li>
                          <AiFillStar /> Include Server & installation
                          Cost(5000tk)
                        </li>
                      </ul>

                      <Modal/>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-packge-wrapper">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ borderBottom: "1px solid #f8fafc14" }}
                    >
                      <Card.Title>Lifetime Package</Card.Title>
                      <Card.Text className="d-flex">
                        {" "}
                        <div>Lifetime</div> <div>/180k</div>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        <li>
                          <BiCheck /> Admission Management
                        </li>
                        <li>
                          <BiCheck /> Online Class & Exam System
                        </li>
                        <li>
                          <BiCheck /> Profile Management
                        </li>
                        <li>
                          <BiCheck /> Library Management
                        </li>
                        <li>
                          <BiCheck /> Financial Management
                        </li>
                        <li>
                          <BiCheck /> Examination Management
                        </li>
                        <li>
                          <BiCheck /> Free Management
                        </li>
                        <li>
                          <BiCheck /> Website Management
                        </li>
                        <li>
                          <BiCheck /> Online Account Management
                        </li>
                        <li>
                          <BiCheck /> Human Resource Management
                        </li>
                        <li>
                          <BiCheck /> User Management
                        </li>
                        <li>
                          <BiCheck /> Result Management
                        </li>
                        <li>
                          <BiCheck /> Branch Control
                        </li>
                        <li>
                          <BiCheck /> Human Resource Management
                        </li>
                        <li>
                          <BiCheck /> Student Attendance Tracking Analytics
                        </li>
                        <li>
                          <BiCheck /> Attendance Management
                        </li>
                        <li>
                          <AiFillStar /> Include Server & installation
                          Cost(5000tk)
                        </li>
                      </ul>

                      <Modal/>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default SchoolManagement;
