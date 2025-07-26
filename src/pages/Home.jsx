import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import VideoBackground from '../components/VideoBackground'
import AboutUs from '../components/AboutUs'
import TrendingDestination from '../components/TrendingDestination'

import VerifiedHotels from '../components/VerifiedHotels'
import VerifiedTransports from '../components/VerifiedTransports'
// import TopMostTourPackage from '../components/Tourpackage';
import BusinessPage from '../components/BusinessPage'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import TourPackage from '../components/Tourpackage'
import BrowseTopTravel from "../components/BrowseTopTravel";
import PlacesToVisit from '../components/PlacesToVisit';
const Home = () => {
  return (
    <div>
       <Navbar/>
     <VideoBackground/>
     <AboutUs/>
    <VerifiedTransports/>
      <TourPackage/> 
      <BrowseTopTravel/>

    <TrendingDestination/>
     <VerifiedHotels/>
     <PlacesToVisit/>
     {/* <TopMostTourPackage/> */}
    {/* <VerifiedTravelAgentsSection/> */}
    <BusinessPage/>
    <Testimonials/>
   
    
    <Footer/> 
 </div>
  )
}

export default Home
