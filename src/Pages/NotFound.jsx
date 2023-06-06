import React from 'react'
import './NotFound.css'
import titlebg from '../assets/yellow-bg.png'
import notFound from '../assets/notFound.png'

function NotFound() {
  return (
    <div className='container-fluid not-found-wrapper full-bg-color' >
        <div className="section-title abou-us-title">
            <h1 className='pt-5'>PAGE NOT FOUND! ERROR</h1>
            <img className="title-bg" src={titlebg} alt="" />
          </div>
        <div className='text-center' >
            <div className='btn btn-primary mt-2 back-home' ><a href="/">Back Home</a></div>
            <div>
                <img src={notFound} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NotFound