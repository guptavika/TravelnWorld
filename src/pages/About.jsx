import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import HeroOverlay from '../components/about/HeroOverlay'
import AboutSection from '../components/about/AboutSection'
import CoreServicesSection from '../components/about/CoreServicesSection'
import ContactSection from '../components/about/ContactSection'
import PlansSection from '../components/about/PlansSection'

const About = () => {
  return (
    <div>
        <Navbar/>
      <AboutHero/>
<HeroOverlay/>
<AboutSection/>
<CoreServicesSection/>
<ContactSection/>
  <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <PlansSection />
    </div>
      <Footer/>
    </div>
  )
}

export default About
