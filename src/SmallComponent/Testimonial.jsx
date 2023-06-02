import React from 'react'

function Testimonial(props) {
  return (
    <div className="col-9">
        <div className='testimonial-wrapper' >
        <div className='testimonial-comment' >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quo, delectus illum amet voluptas consectetur corrupti nihil magnam eligendi quasi tempore!</p>
        </div>
        <div className='pic-name d-flex' > 
            <div className="pic">
                <img src={props.img} alt="" />
            </div>
            <div className="name ">
                <h4>{props.name}</h4>
                <p>{props.company}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonial