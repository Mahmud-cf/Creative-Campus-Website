import React from 'react'

function Testimonial(props) {
  return (
    <div >
        <div className='testimonial-wrapper' >
        <div className='testimonial-comment' >
            <p>{props.details}</p>
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