import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About_us from '../Pages/About_us'
import Review from '../Pages/Review'
import Contact_us from '../Pages/Contact_us'

function AllRoute() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About_us/>} />
                <Route path='/contact' element={<Contact_us/>} />
                <Route path='/review' element={<Review/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoute