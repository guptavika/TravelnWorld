import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroTestimonial from '../components/testimonialPage/HeroTestimonial'
import TravelersTestimonialpagelay from '../components/testimonialPage/Testimonials'

const TestimonialPage = () => {
  return (
    <div>
        <Navbar/>

        <HeroTestimonial/>
     <TravelersTestimonialpagelay/>
      <Footer/>
    </div>
  )
}

export default TestimonialPage
