import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About_us from '../Pages/About_us'
import Review from '../Pages/Review'
import Contact_us from '../Pages/Contact_us'
import Courses from '../Pages/Courses'
import SchoolManagement from '../Pages/SchoolManagement'
import NotFound from '../Pages/NotFound'

function AllRoute() {
  return (
        <BrowserRouter basename='creative-campus-website' >
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About_us/>} />
                <Route path='/contact' element={<Contact_us/>} />
                <Route path='/review' element={<Review/>} />
                <Route path='/courses' element={<Courses/>} />
                <Route path='/school-management-software' element={<SchoolManagement/>} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default AllRoute