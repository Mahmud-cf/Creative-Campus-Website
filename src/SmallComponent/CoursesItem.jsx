import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { BiBookBookmark } from 'react-icons/bi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Container, Row, Col } from 'react-bootstrap';
import '../Pages/Courses.css'

function CoursesItem(props) {
  return (
    <div className='col-xl-4 col-md-6' >
        <Col className='single-course-item'>
          <img className='img-fluid' src={props.img} alt="Course" />
          <div className="course-details">
            <div className="course-title">
              <div className='course-star' ><BsStarFill className="star-icon" /><BsStarFill className="star-icon" /><BsStarFill className="star-icon" /><BsStarFill className="star-icon" /><BsStarFill className="star-icon" /></div>
              <h3>{props.name}</h3>
            </div>
            <div className="course-states d-flex">
              <div className="students d-flex"><div><BiBookBookmark/></div><div>{props.student} Students</div></div>
              <div className="students d-flex"><div><MdOutlinePeopleAlt/></div><div>{props.lesson} Lesson</div></div>
            </div>
          </div>
          <div className="course-prices d-flex">
            <div className="original-price"><TbCurrencyTaka/>{props.price}</div>
            <div className="discounted-price"> <TbCurrencyTaka/><span className='cut-line' >{props.cut_price}</span></div>
          </div>
        </Col>
    </div>
  )
}

export default CoursesItem