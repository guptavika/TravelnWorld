import React from 'react'
import HeroBlog from '../components/Blogs/HeroBlog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TravelInsights from '../components/Blogs/TravelInsights'

const Blogs = () => {
  return (
    <div>
        <Navbar/>
      <HeroBlog/>
      <TravelInsights/>
      <Footer/>
    </div>
  )
}

export default Blogs
